module.exports = (() => {
  /*
   * variables
   */

  // cache document.documentElement
  const {body} = document

  // last used input source
  let currentInput = 'initial'

  // last used input intent
  let currentIntent = 'ontouchstart' in window ? 'touch' : 'mouse'

  // list of modifier keys commonly used with the mouse and
  // can be safely ignored to prevent false keyboard detection
  let ignoreMap = [
    16, // shift
    17, // control
    18, // alt
    27, // esc
    91, // Windows key / left Apple cmd
    93 // Windows menu / right Apple cmd
  ]

  let specificMap = []

  // mapping of events to input sources
  const inputMap = {
    keydown: 'keyboard',
    mousedown: 'mouse',
    pointerdown: 'pointer',
    pointermove: 'pointer',
    touchstart: 'touch',
  }

  let ignoreMouseMove = false

  // check support for passive event listeners
  let supportsPassive = false

  try {
    let opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true
      }
    })

    window.addEventListener('test', null, opts)
  } catch (e) {}

  /*
   * set up
   */

  const setUp = () => {
    addListeners()
    doUpdate('focus')
    doUpdate('hover')
  }

  /*
   * events
   */

  const addListeners = () => {
    // Some components like Boostrap Dropdown menu call stopPropagate()
    // useCapture to capture all events
    const useCapture = true
    const options = supportsPassive ? { passive: true, capture: true } : useCapture

    // pointer events (mouse, pen, touch)
    if (window.PointerEvent) {
      window.addEventListener('pointerdown', setInput, useCapture)
      window.addEventListener('pointermove', setIntent, useCapture)
    } else {
      // mouse events
      window.addEventListener('mousedown', setInput, useCapture)

      // touch events
      if ('ontouchstart' in window) {
        window.addEventListener('touchstart', setInput, options)
      }
    }

    // keyboard events
    window.addEventListener('keydown', setInput, useCapture)

    // focus events
    window.addEventListener('focusin', setFocus, useCapture)
  }

  // checks conditions before updating new input
  const setInput = event => {
    const eventKey = event.which
    let value = inputMap[event.type]

    if (event.type === 'pointerdown') {
      setIntent(event)
    }

    if (value === 'pointer') {
      value = pointerType(event)
    }

    const ignoreMatch = (
      !specificMap.length &&
      ignoreMap.indexOf(eventKey) === -1
    )

    const specificMatch = (
      specificMap.length &&
      specificMap.indexOf(eventKey) !== -1
    )

    const validEvent =
      value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) ||
      value === 'mouse' ||
      value === 'touch'

    if (!validEvent) return

    // console.log('setInput', value)

    if (currentInput !== value) {
      currentInput = value
    }
  }

  const setFocus = () => {
    doUpdate('focus')

    // disable hover when focus changed by keyboard
    if (currentInput === 'keyboard') {
      currentIntent = currentInput
      doUpdate('hover')
    }
  }

  // updates input intent for `pointermove`
  const setIntent = event => {
    let value = inputMap[event.type]

    if (value === 'pointer') {
      value = pointerType(event)
    }

    if (currentIntent !== value) {
      currentIntent = value
      // console.log('setIntent', value)
      doUpdate('hover')
    }
  }

  // updates the doc with new input/intent
  const doUpdate = which => {
    switch (which) {
      case 'focus':
        if (currentInput === 'keyboard') {
          body.dataset.useFocus = ''
        } else {
          delete body.dataset.useFocus
        }
        break
      case 'hover':
        if (currentIntent === 'mouse') {
          body.dataset.useHover = ''
        } else {
          delete body.dataset.useHover
        }
        break
    }
  }

  /*
   * utilities
   */

  const pointerType = event => {
    // treat pen like touch
    return event.pointerType === 'pen' ? 'touch' : event.pointerType
  }

  /*
   * init
   */

  setUp()
})()