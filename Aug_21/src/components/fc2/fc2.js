import React, {Component, useState} from 'react';
import './fc2.scss'

function Fc2() {
  const msg = useState("Welcome to UseState")
  const count = useState(0)
  return (
    <div>
    Hello All...Thank You {msg} <br/>
    Default Count is : {count}
    </div>
  )
}
export default Fc2;