import React from 'react'

const Post = (props) => {
    // const posts = []
    // const newPost = this.state.posts.map((post, i) => {
    //    return (<div className='card'>
    //       <div className='card-header'>{this.state.post[i].pic}</div>
    //       <div className='card-body'>
    //         <h5 className='card-title'>Username</h5>
    //         <p className='card-text'>
    //           With supporting text below as a natural lead-in to additional
    //           content.
    //         </p>
            
    //         </div>
    //         <div className='card-footer'>Icons</div>
    //     </div>)
    // })
    return (
      <React.Fragment>
        <div className='card'>
          <div className='card-header'>Pic</div>
          <div className='card-body'>
            <h5 className='card-title'>Username</h5>
            <p className='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className='card-footer'>Icons</div>
        </div>
      </React.Fragment>
    );
}

export default Post
