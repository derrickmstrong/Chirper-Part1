import React, { Component } from 'react';

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 0,
          pic: 'https://mypic.com/pic1',
          name: 'Derrick',
          message: 'Message 1',
        },
        {
          id: 1,
          pic: 'https://mypic.com/pic2',
          name: 'Regina',
          message: 'Message 2',
        },
        {
          id: 2,
          pic: 'https://mypic.com/pic3',
          name: 'Sam',
          message: 'Message 3',
        },
      ],
    };
  }

  handleClick = (e) => {
      const NEWPOST = {
        id: 4,
        pic: 'https://mypic.com/pic1',
        name: e.target.value,
        message: e.target.value,
      };
      console.log(NEWPOST)
    //   this.setState(prevState => {
    //       posts: [...prevState.posts, NEWPOST]
    //   })
  }
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <label htmlFor='name'>Username </label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter your username'
          value=""
          onChange={this.handleChange}
        />
        <label htmlFor='name'>Message </label>
        <input
          type='text'
          name='message'
          id='message'
          placeholder='Enter your message'
          value=""
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add New Chirp</button>
      </div>
    );
  }
}

export default PostForm;
