import React from 'react';

import { Formik, Field, Form } from 'formik';
const errors = [];
const validate = values => {
   
    if (!values.firstName) {
        errors.firstName = 'Please Enter FirstName...';
        alert(errors.firstName);
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    
    }
    return errors;
}

const Validation = () => (
<div>
<h1>Sign Up</h1>
<Formik
initialValues={{
firstName: '',
lastName: '',
email: '',
}} validate={validate}

onSubmit={async (values) => {
//await new Promise((r) => setTimeout(r, 5000));
// alert(JSON.stringify(values, null, 2));
alert("First Name is " +values.firstName);
alert("Last Name is " +values.lastName);
alert("Email is " +values.email);
}}
>
<Form>
<label htmlFor="firstName">First Name</label>
<Field id="firstName" name="firstName" placeholder="Please Enter FirstName" 

/>

<br/><br/>

<label htmlFor="lastName">Last Name</label>
<Field id="lastName" name="lastName" placeholder="Please Enter LastName" />
<br/><br/>
<label htmlFor="email">Email</label>
<Field
id="email"
name="email"
placeholder="Please Enter Email"
type="email"
/> <br/><br/>
<button type="submit">Submit</button>
</Form>
</Formik>
</div>
);
export default Validation;