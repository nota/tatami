import React from 'react'
import Kamon from './kamon'

export default function ButtonGroups () {
  return (
    <div>
      <h2>Button groups</h2>
      <div className='btn-group' role='group' aria-label='...'>
        <button type='button' className='btn btn-default btn-auto-size active'>Left</button>
        <button type='button' className='btn btn-default btn-auto-size'>Middle</button>
        <button type='button' className='btn btn-default btn-auto-size'>Right</button>
      </div>&nbsp;&nbsp;

      <div className='btn-group' role='group' aria-label='...'>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='share' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='pencil' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='card-plus' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='unlocked' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='trash' />
        </button>
      </div>

      <h4>Vertical</h4>
      <div className='btn-group-vertical' role='group' aria-label='...'>
        <button type='button' className='btn btn-default btn-auto-size'>One</button>
        <button type='button' className='btn btn-default btn-auto-size'>Two</button>
        <button type='button' className='btn btn-default btn-auto-size'>Three</button>
        <div className='btn-group' role='group' aria-label='...'>
          <button type='button' className='btn btn-default btn-auto-size dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            Dropdown{' '}
            <span className='caret'></span>
          </button>
          <ul className='dropdown-menu dropdown-menu-auto-size'>
            <li><a href='javascript:;'>Dropdown link</a></li>
            <li><a href='javascript:;'>Dropdown link</a></li>
          </ul>
        </div>
        <button type='button' className='btn btn-default btn-auto-size'>Four</button>
      </div>&nbsp;&nbsp;

      <div className='btn-group-vertical' role='group' aria-label='...'>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='share' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='pencil' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='card-plus' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='unlocked' />
        </button>
        <button type='button' className='btn btn-default btn-auto-size'>
          <Kamon name='trash' />
        </button>
      </div>

      <h4>Toolbar</h4>
      <div className='btn-toolbar' role='toolbar' aria-label='...'>
        <div className='btn-group' role='group' aria-label='...'>
          <button type='button' className='btn btn-default btn-auto-size'>1</button>
          <button type='button' className='btn btn-default btn-auto-size'>2</button>
          <button type='button' className='btn btn-default btn-auto-size'>3</button>
        </div>
        <div className='btn-group' role='group' aria-label='...'>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Dropdown{' '}
              <span className='caret'></span>
            </button>
            <ul className='dropdown-menu dropdown-menu-auto-size'>
              <li><a href='javascript:;'>Dropdown link</a></li>
              <li><a href='javascript:;'>Dropdown link</a></li>
            </ul>
          </div>
          <button type='button' className='btn btn-default btn-auto-size'>4</button>
          <button type='button' className='btn btn-default btn-auto-size'>5</button>
          <button type='button' className='btn btn-default btn-auto-size'>6</button>
        </div>
      </div>

      <h4>Small size</h4>
      <div className='btn-group btn-group-sm' role='group' aria-label='...'>
        <button type='button' className='btn btn-default btn-auto-size'>Left</button>
        <button type='button' className='btn btn-default btn-auto-size'>Middle</button>
        <button type='button' className='btn btn-default btn-auto-size'>Right</button>
      </div>

      <h4>Justified</h4>
      <div className='btn-group btn-group-justified' role='group' aria-label='...'>
        <button type='button' className='btn btn-default btn-auto-size'>Left</button>
        <button type='button' className='btn btn-default btn-auto-size'>Middle</button>
        <button type='button' className='btn btn-default btn-auto-size'>Right</button>
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            Dropdown{' '}
            <span className='caret'></span>
          </button>
          <ul className='dropdown-menu dropdown-menu-auto-size'>
            <li><a href='javascript:;'>Dropdown link</a></li>
            <li><a href='javascript:;'>Dropdown link</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
