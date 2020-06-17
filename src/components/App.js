import React, { Component } from 'react';
// import Nav from './Nav'
// import Footer from './Footer';
import './App.css';

// TODO: Create unique id counter w/uuid

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUsername: '',
      newMessage: '',
      posts: [
        {
          username: 'Derrick',
          message: 'Message 1',
        },
        {
          username: 'Regina',
          message: 'Message 2',
        },
        {
          username: 'Sam',
          message: 'Message 3',
        },
      ],
    };
  }
// TODO: Find out if we need to bind our methods to this in the constructor or do we use an arrow function
  handleUsername = (e) => {
    this.setState({
      newUsername: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      newMessage: e.target.value,
    });
  };
  handleSubmit = () => {
    let newChirp = {
      username: this.state.newUsername,
      message: this.state.newMessage,
    };
    this.setState({
      posts: [...this.state.posts, newChirp,],
    });
    this.setState({
      newUsername: '',
      newMessage: '',
    });
  };

  render() {
    const newPost = this.state.posts.map((post, id) => {
      return (
        <div key={id} className='card my-5'>
          <div className='card-header'>Pic</div>
          <div className='card-body'>
            <h5 className='card-title'>{post.username}</h5>
            <p className='card-text'>{post.message}</p>
          </div>
          <div className='card-footer'>Icons</div>
        </div>
      );
    });

    return (
      <div class='container'>
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
                          <ul>
                            <li>
                              <div className='input-group'>
                                <input
                                  type='text'
                                  className='form-control  mx-2'
                                  placeholder='Enter Username'
                                  value={this.state.newUsername}
                                  onChange={this.handleUsername}
                                />
                                <input
                                  type='text'
                                  className='form-control  mx-2'
                                  placeholder='Enter Message'
                                  value={this.state.newMessage}
                                  onChange={this.handleMessage}
                                />
                                <button
                                  type='button'
                                  className='btn btn-primary mx-2'
                                  onClick={this.handleSubmit}>
                                  Add Chirp
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='modal-footer'>
                          <button
                            type='button'
                            className='btn btn-secondary'
                            data-dismiss='modal'>
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </span>
          </div>
        </nav>

        {newPost}
      </div>
    );
  }
}

export default App;
