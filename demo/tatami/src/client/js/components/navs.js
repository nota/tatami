import React from 'react'
import Kamon from './kamon'

export default function Navs () {
  return (
    <div>
      <h1>Navs</h1>

      <h3>Tabs</h3>
      <div>
        <ul className='nav nav-tabs' role='tablist'>
          <li role='presentation' className='active'>
            <a href='#home' aria-controls='home' role='tab' data-toggle='tab' aria-expanded='true'>Home</a>
          </li>
          <li role='presentation'>
            <a href='#profile' aria-controls='profile' role='tab' data-toggle='tab' aria-expanded='false'>Profile</a>
          </li>
          <li role='presentation'>
            <a href='#settings' aria-controls='settings' role='tab' data-toggle='tab' aria-expanded='false'>Settings</a>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div role='tabpanel' className='tab-pane active' id='home' aria-labelledby='home-tab'>
            this is home...
          </div>
          <div role='tabpanel' className='tab-pane' id='profile'>
            this is profile...
          </div>
          <div role='tabpanel' className='tab-pane' id='settings'>
            this is settings...
          </div>
        </div>
      </div>

      <br /><br />

      <h3>Pills</h3>
      <ul className='nav nav-pills'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
        <li role='presentation' className='dropdown'>
          <a className='dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>
            Dropdown <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            <li><a href='javascript:;'>Action</a></li>
            <li><a href='javascript:;'>Another action</a></li>
          </ul>
        </li>
      </ul>

      <br /><br />

      <h3>Stacked pills</h3>
      <div className='row'>
        <div className='col-sm-4'>
          <ul className='nav nav-pills nav-stacked'>
            <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
            <li role='presentation' className='disabled'><a href='javascript:;'>Profile</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <div className='nav-divider' />
            <li role='presentation'>
              <a href='javascript:;'>
                <Kamon name='arrow-down-rect' />
                <span>Forward icon</span>
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <Kamon name='trash' />
                <span>Forward icon</span>
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <Kamon name='enter' />
                <span>Forward icon</span>
              </a>
            </li>
            <div className='nav-divider' />
            <li role='presentation'>
              <a href='javascript:;'>
                <span>Backward icon</span>
                <Kamon name='check' />
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <span>Backward icon</span>
                <Kamon name='locked' />
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <span>Backward icon</span>
                <Kamon name='star' />
              </a>
            </li>
            <div className='nav-divider' />
            <li role='presentation'>
              <a href='javascript:;'>
                <img src='https://i.gyazo.com/4666f59908357a9ddf38d17cd36ad295.jpg' className='nav-stacked-thumbnail' />
                <span>Square thumbnail</span>
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <img src='https://i.gyazo.com/4666f59908357a9ddf38d17cd36ad295.jpg' className='img-circle nav-stacked-thumbnail' />
                <span>Circle thumbnail</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-sm-4'>
          <ul className='nav nav-pills nav-stacked nav-stacked-fixed'>
            <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
            <li role='presentation' className='disabled'><a href='javascript:;'>Profile</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
          </ul>
        </div>
      </div>

      <br /><br />

      <h3>Justified</h3>
      <ul className='nav nav-tabs nav-justified' role='tablist'>
        <li role='presentation' className='active'><a href='#home' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>
        <li role='presentation'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Profile</a></li>
        <li role='presentation'><a href='#messages' aria-controls='profile' role='tab' data-toggle='tab'>Messages</a></li>
      </ul>
      <br />
      <ul className='nav nav-pills nav-justified'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
      </ul>

      <br /><br />

      <h2>Large size</h2>

      <h3>Tabs</h3>
      <div>
        <ul className='nav nav-tabs nav-lg' role='tablist'>
          <li role='presentation' className='active'>
            <a href='#home-lg' aria-controls='home-lg' role='tab' data-toggle='tab'>Home</a>
          </li>
          <li role='presentation'>
            <a href='#profile-lg' aria-controls='profile-lg' role='tab' data-toggle='tab'>Profile</a>
          </li>
          <li role='presentation'>
            <a href='#settings-lg' aria-controls='settings-lg' role='tab' data-toggle='tab'>Settings</a>
          </li>
        </ul>
        <div className='tab-content'>
          <div role='tabpanel' className='tab-pane active' id='home-lg'>
            <div className='text-lg'>this is home...</div>
          </div>
          <div role='tabpanel' className='tab-pane' id='profile-lg'>
            <div className='text-lg'>this is profile...</div>
          </div>
          <div role='tabpanel' className='tab-pane' id='settings-lg'>
            <div className='text-lg'>this is settings...</div>
          </div>
        </div>
      </div>

      <br /><br />

      <h3>Pills</h3>
      <ul className='nav nav-pills nav-lg'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
        <li role='presentation' className='dropdown'>
          <a className='dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>
            Dropdown <span className='caret'></span>
          </a>
          <ul className='dropdown-menu dropdown-menu-lg'>
            <li><a href='javascript:;'>Action</a></li>
            <li><a href='javascript:;'>Another action</a></li>
          </ul>
        </li>
      </ul>

      <br /><br />

      <h3>Stacked pills</h3>
      <div className='row'>
        <div className='col-sm-4'>
          <ul className='nav nav-pills nav-stacked nav-lg'>
            <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
            <li role='presentation' className='disabled'><a href='javascript:;'>Profile</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <div className='nav-divider' />
            <li role='presentation'>
              <a href='javascript:;'>
                <Kamon name='arrow-down-rect' />
                <span>Forward icon</span>
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <Kamon name='trash' />
                <span>Forward icon</span>
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <Kamon name='enter' />
                <span>Forward icon</span>
              </a>
            </li>
            <div className='nav-divider' />
            <li role='presentation'>
              <a href='javascript:;'>
                <span>Backward icon</span>
                <Kamon name='check' />
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <span>Backward icon</span>
                <Kamon name='locked' />
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <span>Backward icon</span>
                <Kamon name='star' />
              </a>
            </li>
            <div className='nav-divider' />
            <li role='presentation'>
              <a href='javascript:;'>
                <img src='https://i.gyazo.com/4666f59908357a9ddf38d17cd36ad295.jpg' className='nav-stacked-thumbnail'/>
                <span>Square thumbnail</span>
              </a>
            </li>
            <li role='presentation'>
              <a href='javascript:;'>
                <img src='https://i.gyazo.com/4666f59908357a9ddf38d17cd36ad295.jpg' className='img-circle nav-stacked-thumbnail' />
                <span>Circle thumbnail</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-sm-4'>
          <ul className='nav nav-pills nav-stacked nav-stacked-fixed nav-lg'>
            <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
            <li role='presentation' className='disabled'><a href='javascript:;'>Profile</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
            <li role='presentation'><a href='javascript:;'>Messages</a></li>
          </ul>
        </div>
      </div>

      <br /><br />
      <h3>Justified</h3>
      <ul className='nav nav-tabs nav-justified nav-lg' role='tablist'>
        <li role='presentation' className='active'><a href='#home' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>
        <li role='presentation'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Profile</a></li>
        <li role='presentation'><a href='#messages' aria-controls='profile' role='tab' data-toggle='tab'>Messages</a></li>
      </ul>
      <br />
      <ul className='nav nav-pills nav-justified nav-lg'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
      </ul>

      <br /><br />

      <h2>Auto large</h2>

      <h3>Tabs</h3>
      <div>
        <ul className='nav nav-tabs nav-auto-lg' role='tablist'>
          <li role='presentation' className='active'>
            <a href='#home-auto-lg' aria-controls='home-auto-lg' role='tab' data-toggle='tab'>Home</a>
          </li>
          <li role='presentation'>
            <a href='#profile-auto-lg' aria-controls='profile-auto-lg' role='tab' data-toggle='tab'>Profile</a>
          </li>
          <li role='presentation'>
            <a href='#settings-auto-lg' aria-controls='settings-auto-lg' role='tab' data-toggle='tab'>Settings</a>
          </li>
        </ul>
        <div className='tab-content'>
          <div role='tabpanel' className='tab-pane active' id='home-auto-lg'>
            <div className='text-auto-lg'>this is home...</div>
          </div>
          <div role='tabpanel' className='tab-pane' id='profile-auto-lg'>
            <div className='text-auto-lg'>this is profile...</div>
          </div>
          <div role='tabpanel' className='tab-pane' id='settings-auto-lg'>
            <div className='text-auto-lg'>this is settings...</div>
          </div>
        </div>
      </div>

      <br /><br />

      <h3>Pills</h3>
      <ul className='nav nav-pills nav-auto-lg'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
        <li role='presentation' className='dropdown'>
          <a className='dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>
            Dropdown <span className='caret'></span>
          </a>
          <ul className='dropdown-menu dropdown-menu-auto-lg'>
            <li><a href='javascript:;'>Action</a></li>
            <li><a href='javascript:;'>Another action</a></li>
          </ul>
        </li>
      </ul>

      <br /><br />

      <h3>Stacked pills</h3>
      <ul className='nav nav-pills nav-stacked nav-auto-lg'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation' className='disabled'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
      </ul>

      <h3>Stacked pills fixed</h3>
      <ul className='nav nav-pills nav-stacked nav-stacked-fixed nav-auto-lg'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation' className='disabled'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
      </ul>

      <br /><br />

      <h3>Justified</h3>
      <ul className='nav nav-tabs nav-justified nav-auto-lg' role='tablist'>
        <li role='presentation' className='active'><a href='#home' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>
        <li role='presentation'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Profile</a></li>
        <li role='presentation'><a href='#messages' aria-controls='profile' role='tab' data-toggle='tab'>Messages</a></li>
      </ul>
      <br />
      <ul className='nav nav-pills nav-justified nav-auto-lg'>
        <li role='presentation' className='active'><a href='javascript:;'>Home</a></li>
        <li role='presentation'><a href='javascript:;'>Profile</a></li>
        <li role='presentation'><a href='javascript:;'>Messages</a></li>
      </ul>


      <h2>List group</h2>
      <div className='list-group'>
        <a href='javascript:;' className='list-group-item active'>
          Cras justo odio
        </a>
        <a href='javascript:;' className='list-group-item'>Dapibus ac facilisis in</a>
        <a href='javascript:;' className='list-group-item'>Morbi leo risus</a>
        <a href='javascript:;' className='list-group-item'>Porta ac consectetur ac</a>
        <a href='javascript:;' className='list-group-item'>Vestibulum at eros</a>
      </div>
    </div>
  )
}
