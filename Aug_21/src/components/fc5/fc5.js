import React, {Component, useState} from 'react';
import './fc5.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as fc5Actions from "../../store/fc5/actions";

const Fc5 = () => {
  const [data, setData] = useState({
    firstName :'',
    lastName : ''
  })

  const[form,setForm] = useState({
    firstName :'',
    lastName : ''
  })

  const showValues = e => {
    e.preventDefault();
    setForm({
      firstName : data.firstName,
      lastName : data.lastName
    })
  };

  const changeFiled = e => {
    setData({
     ...data, [e.target.name] : e.target.value 
    })
  }

  return(
    <div>
      <form onSubmit={showValues}>
        First Name : 
        <input type="text" name="firstName" value={data.firstName}
          onChange={changeFiled}
        /> 
        <br/><br/>
        Last Name : 
        <input type="text" name="lastName" 
          onChange={changeFiled}
        value={data.lastName} /> 
        <br/><br/>
        <button>Submit</button> 
      </form>
      <br/>
      <p>First Name {form.firstName}</p>
      <p>Last Name : {form.lastName}</p>
    </div>
  )
}

export default Fc5;