import React, { Component } from 'react';
import Nav from './Nav'
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
console.log(this.state.posts);
console.log(this.state.newUsername);
console.log(this.state.newMessage);
    return (
      <div class='container'>
      
        <Nav 
        newUsername={this.state.newUsername}
        newMessage={this.state.newMessage}
        handleUsername={this.handleUsername}
        handleMessage={this.handleMessage}
        handleSubmit={this.handleSubmit} />
        {newPost}
      </div>
    );
  }
}

export default App;
