import React, {Component, useState} from 'react';
import './fc3.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as fc3Actions from "../../store/fc3/actions";
const Fc3 = () => {
  const[count, setCount] = useState(0);

  return (
    <div>
      <p>Default Value {count}</p>
      <p>
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
      </p>
    </div>
  )

}

export default Fc3;