import React from 'react';
import PostForm from './PostForm';

function Nav(props) {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='http://yahoo.com'>
          Chirper
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <span className='navbar-nav mr-auto'></span>
          <span className='navbar-text'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='http://yahoo.com'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li>
                <button
                  type='button'
                  className='btn btn-primary'
                  data-toggle='modal'
                  data-target='#exampleModal'>
                  Add Chirp
                </button>

                <div
                  className='modal fade'
                  id='exampleModal'
                  tabIndex='-1'
                  role='dialog'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'>
                  <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5
                          className='modal-title text-primary'
                          id='exampleModalLabel'>
                          Add New Chirps
                        </h5>
                        <button
                          type='button'
                          className='close'
                          data-dismiss='modal'
                          aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body'>
                        <ul style={{paddingLeft: 0}}>
                          <li>
                            <PostForm
                              newUsername={props.newUsername}
                              newMessage={props.newMessage}
                              handleUsername={props.handleUsername}
                              handleMessage={props.handleMessage}
                              handleSubmit={props.handleSubmit}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
