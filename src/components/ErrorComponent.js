import React from 'react';
import './ErrorComponent.css';

/**
 * this component returns error depending on the error object
 * @param {object} error
 * @returns {React.ComponentElement}
 */
export default function ErrorComponent({ error }) {
  if(error && error.response && error.response.status) {
    return (
      <div className='error-container'>
        <div className='error'>
          <h1>{error.response.status} - {error.response.statusText}</h1>
          <h2>{error.response.data}</h2>
        </div>
      </div>
  
    )
  } else {
    return (
      <div className='error-container'>
        <div className='error'>
          <h1>503 Service Unavailable</h1>
          <h2>The server is temporarily unavailable</h2>
        </div>
      </div>
    )
  }
  
}
