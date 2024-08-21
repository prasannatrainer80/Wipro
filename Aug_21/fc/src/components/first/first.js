import React, {Component} from 'react';
import './first.scss'

const first = () => {

  const show = () => {
    alert("Welcome to Functional Component...");
  }
  
  return (
    <div style={{ margin: '50px' }}>
        <button onClick={show}>Show</button>
    </div>
  )

}
export default first;