module.exports = (() => {
  /*
   * variables
   */

  // cache document.documentElement
  const docElem = document.body

  // last used input type
  let currentInput = 'initial'

  // last focus state
  let currentFocus = false

  // event timer
  let inputEventTimer = null
  let focusEventTimer = null

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

  // mapping of events to input types
  const inputMap = {
    keydown: 'keyboard',
    keyup: 'keyboard',
    mousedown: 'mouse',
    mousemove: 'mouse',
    pointerdown: 'pointer',
    pointermove: 'pointer',
    touchstart: 'touch',
    touchend: 'touch'
  }

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
    doUpdate()
  }

  /*
   * events
   */

  const addListeners = () => {
    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
    // can only demonstrate potential, but not actual, interaction
    // and are treated separately
    const options = supportsPassive ? { passive: true } : false

    // pointer events (mouse, pen, touch)
    if (window.PointerEvent) {
      window.addEventListener('pointerdown', setInput)
      window.addEventListener('pointerup', setInput)
    } else {
      // mouse events
      window.addEventListener('mousedown', setInput)
      window.addEventListener('mouseup', setInput)

      // touch events
      if ('ontouchstart' in window) {
        window.addEventListener('touchstart', setInput, options)
        window.addEventListener('touchend', setInput, options)
      }
    }

    // keyboard events
    window.addEventListener('keydown', setInput)
    window.addEventListener('keyup', setInput)

    // focus events
    window.addEventListener('focusin', setFocus)
  }

  // checks conditions before updating new input
  const setInput = event => {
    const eventKey = event.which
    let value = inputMap[event.type]

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

    if (currentInput !== value) {
      currentInput = value

      window.clearTimeout(inputEventTimer)

      inputEventTimer = window.setTimeout(() => {
        currentInput = null
      }, 300)
    }

    // Sometimes keyDown event is not fired due to stopPropagation() eg: boostrap dropdown.
    // So we will update by keyUp event. For this task, we need recent focus status
    if (currentFocus) {
      doUpdate()
    }
  }

  const setFocus = event => {
    currentFocus = true

    window.clearTimeout(focusEventTimer)

    focusEventTimer = window.setTimeout(() => {
      currentFocus = false
    }, 300)

    if (currentInput) {
      doUpdate()
    }
  }

  // updates the doc
  const doUpdate = () => {
    docElem.setAttribute(
      'data-focus-source',
      currentInput
    )
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
