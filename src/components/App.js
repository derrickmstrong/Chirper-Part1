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
    this.setState({
      posts: [
        ...this.state.posts,
        { username: this.state.newUsername, message: this.state.newMessage },
      ],
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
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Username'
                      value={this.state.newUsername}
                      onChange={this.handleUsername}
                    />
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Message'
                      value={this.state.newMessage}
                      onChange={this.handleMessage}
                    />
                    <div className='input-group-prepend'>
                      <span
                        className='input-group-text'
                        onClick={this.handleSubmit}>
                        Add Chirp
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </span>
          </div>
        </nav>

        {newPost}

      </React.Fragment>
    );
  }
}

export default App;
