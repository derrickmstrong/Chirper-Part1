import React from 'react';

function Nav() {
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
                <li className='nav-item'>
                  <a className='nav-link' href='http://yahoo.com'>
                    New Chirp
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='http://yahoo.com'>
                    Edit Chirp
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </nav>
    
    </React.Fragment>
  );
}

export default Nav;
