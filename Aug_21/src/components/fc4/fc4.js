import React, {Component, useState} from 'react';
import './fc4.scss'

const Fc4 = () => {
  const[data, setData] = useState({
    firstName : '',
    lastName : ''
  })
  const[form, setForm] = useState({
    firstName :'',
    lastName :''
  })

  const updateField = e => {
    setData({
      ...data, [e.target.name] : e.target.value 
    })
  }

  const show = e => {
    e.preventDefault();
    setForm({
      firstName : data.firstName,
      lastName : data.lastName
    })
  }

  return (
    <div>
      <form onSubmit={show}>
        First Name : 
        <input type="text" value={data.firstName} name="firstName" onChange={updateField} /> <br/><br/>
        Last Name : 
        <input type="text" value={data.lastName} name='lastName' onChange={updateField} /> <br/><br/>
        <button>Submit</button>
      </form>
      <br/>
      <p>First Name is : {form.firstName}</p>
      <p>Last Name is : {form.lastName}</p>
    </div>
  )
}
export default Fc4;