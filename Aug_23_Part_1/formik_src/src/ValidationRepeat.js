import React from 'react';
import { Formik, Form, Field } from 'formik';

const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Please Enter email Addresss';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
}

const validateUsername = (value) => {
    let error;
    if (!value) {
     error="Please Enter UserName"
    }
    if (value.length >= 20) {
        error = "Canont Cross 20 chars";
    }
    return error;
}

const validateFirstName = (value) => {
    let error;
    if (!value) {
        error="Please Enter FirstName..."
    }
    return error;
}

const validateLastName = (value) => {
    let error;
    if (!value) {
        error ="Please Enter LastName..."
    }
    return error;
}
export const ValidationRepeat = () => (
    <div>
      <h1>Signup</h1>
      <Formik
       initialValues={{
            username: '',
            email: '',
            firstName :'',
            lastName : ''
          }}
          onSubmit={values => {
           alert(values.username);
           alert(values.email);
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
        
            <Form>
                   <label htmlFor="Email">Please Enter Email</label>
              <Field name="email" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>} <br/>
              <label htmlFor="UserName">User Name</label>
 
      <Field name="username" validate={validateUsername} />
              {errors.username && touched.username && <div>{errors.username}</div>} <br/>
              <label htmlFor="FirstName">First Name</label>
 
 <Field name="firstName" validate={validateFirstName} />
         {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
 <br/>
 <label htmlFor="LastName">Last Name</label>
 <Field name="lastName" validate={validateLastName} />
         {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
 <br/>
 
       <button type="submit">Submit</button>
                </Form>
    )}
     </Formik>
   </div>
 );
 
 export default ValidationRepeat