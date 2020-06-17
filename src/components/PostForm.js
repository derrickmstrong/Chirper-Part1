import React from 'react'
import { findByLabelText } from '@testing-library/react';

const PostForm = (props) => {
  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control mx-2'
        placeholder='Enter Username'
        value={props.newUsername}
        onChange={props.handleUsername}
      />
      <input
        type='text'
        className='form-control mx-2'
        placeholder='Enter Message'
        value={props.newMessage}
        onChange={props.handleMessage}
      />
      <button
        type='button'
        className='btn btn-primary mx-2'
        onClick={props.handleSubmit}>
        <svg
          class='bi bi-plus-circle-fill'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z'
          />
        </svg>{' '}
        Chirp
      </button>
    </div>
  );
}

export default PostForm
