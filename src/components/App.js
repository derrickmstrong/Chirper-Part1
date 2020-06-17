import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import './App.css'

// TODO: Create unique id counter w/uuid

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    })

    return (
      <React.Fragment>
      <Nav />
      {newPost}
      <Footer />
    </React.Fragment>
    );
  }
}

export default App;
