import React from 'react'
import Kamon from './kamon'

export default function Dropdowns () {
  return (
    <div>
      <h1>Dropdowns</h1>
      <div className='dropdown'>
        <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1'
          data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          Dropdown <span className='caret' />
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
          <li><a href='javascript:;'>New</a></li>
          <li><a href='javascript:;'>Save</a></li>
          <li><a href='javascript:;'>Open in Chrome</a></li>
          <li role='separator' className='divider' />
          <li className='selected'><a href='javascript:;'>Selected link</a></li>
          <li className='disabled'><a href='javascript:;'>Disabled link</a></li>
          <li role='separator' className='divider' />
          <li>
            <a href='javascript:;'>
              <Kamon name='arrow-down-rect' />
              <span>Forward icon</span>
            </a>
          </li>
          <li>
            <a href='javascript:;'>
              <Kamon name='trash' />
              <span>Forward icon</span>
            </a>
          </li>
          <li>
            <a href='javascript:;'>
              <Kamon name='person' />
              <span>Forward icon</span>
            </a>
          </li>
          <li role='separator' className='divider' />
          <li>
            <a href='javascript:;'>
              <span>Backward icon</span>
              <Kamon name='check' />
            </a>
          </li>
          <li>
            <a href='javascript:;'>
              <span>Backward icon</span>
              <Kamon name='locked' />
            </a>
          </li>
          <li>
            <a href='javascript:;'>
              <span>Backeard icon</span>
              <Kamon name='star' />
            </a>
          </li>
          <li role='separator' className='divider' />
          <li>
            <a href='javascript:;'>
              <img className='dropdown-menu-thumbnail' src='https://i.gyazo.com/6443b0ef2268925c2551b125ff500480.jpg' />
              <span>Rect thumbnail</span>
            </a>
          </li>
          <li>
            <a href='javascript:;'>
              <img className='dropdown-menu-thumbnail img-circle' src='https://i.gyazo.com/6443b0ef2268925c2551b125ff500480.jpg' />
              <span>Circle thumbnail</span>
            </a>
          </li>
        </ul>
      </div>

      <br /><br />

      <div className='dropdown'>
        <button className='btn btn-clear dropdown-toggle' type='button' id='dropdownMenu2'
          tabIndex='0'
          data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          Dropdown <span className='caret' />
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
          <li><a href='javascript:;'>New</a></li>
          <li><a href='javascript:;'>Save</a></li>
          <li><a href='javascript:;'>Open in Chrome</a></li>
          <li role='separator' className='divider' />
          <li className='selected'><a href='javascript:;'>Selected link</a></li>
          <li className='disabled'><a href='javascript:;'>Disabled link</a></li>
        </ul>
      </div>

      <br /><br />

      <div className='btn-group'>
        <button type='button' className='btn btn-danger'>Action</button>
        <button type='button' className='btn btn-danger dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          <span className='caret'></span>
          <span className='sr-only'>Toggle Dropdown</span>
        </button>
        <ul className='dropdown-menu'>
          <li><a href='javascript:;'>New</a></li>
          <li><a href='javascript:;'>Save</a></li>
          <li><a href='javascript:;'>Open in Chrome</a></li>
          <li role='separator' className='divider'></li>
          <li><a href='javascript:;'>Delete</a></li>
        </ul>
      </div>
      {' '}
      <div className='btn-group dropup'>
        <button type='button' className='btn btn-default'>Dropup</button>
        <button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          <span className='caret'></span>
          <span className='sr-only'>Toggle Dropdown</span>
        </button>
        <ul className='dropdown-menu'>
          <li><a href='javascript:;'>Action</a></li>
          <li><a href='javascript:;'>Another action</a></li>
        </ul>
      </div>

      <br /><br />
      <h3>Large size</h3>

      <div className='dropdown'>
        <button className='btn btn-clear btn-lg dropdown-toggle' type='button' id='dropdownMenu2'
          tabIndex='0'
          data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          Dropdown <span className='caret' />
        </button>
        <ul className='dropdown-menu dropdown-menu-lg' aria-labelledby='dropdownMenu2'>
          <li><a href='javascript:;'>New</a></li>
          <li><a href='javascript:;'>Save</a></li>
          <li><a href='javascript:;'>Open in Chrome</a></li>
          <li><a href='javascript:;'>Print</a></li>
          <li className='selected'><a href='javascript:;'>Share</a></li>
          <li className='dropdown-header'>Header</li>
          <li><a href='javascript:;'>Download</a></li>
          <li><a href='javascript:;'>Delete</a></li>
        </ul>
      </div>

      <h3>Light hover style</h3>

      <div className='dropdown'>
        <button className='btn btn-clear btn-lg dropdown-toggle' type='button' id='dropdownMenu2'
          tabIndex='0'
          data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          Dropdown <span className='caret' />
        </button>
        <ul className='dropdown-menu dropdown-menu-lg dropdown-menu-light-hover-style' aria-labelledby='dropdownMenu2'>
          <li><a href='javascript:;'>New</a></li>
          <li><a href='javascript:;'>Save</a></li>
          <li><a href='javascript:;'>Open in Chrome</a></li>
          <li><a href='javascript:;'>Print</a></li>
          <li className='selected'><a href='javascript:;'>Share</a></li>
          <li className='dropdown-header'>Header</li>
          <li><a href='javascript:;'>Download</a></li>
          <li><a href='javascript:;'>Delete</a></li>
        </ul>
      </div>
    </div>
  )
}
