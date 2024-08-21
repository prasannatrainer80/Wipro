import React, {Component, useState} from 'react';
import './fc3.scss'

function fc3() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(6);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default fc3;  