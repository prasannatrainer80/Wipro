import React from 'react';
import { Formik, Form, Field } from 'formik';
function validateEmail(value) {
   let error;
   if (!value) {
     error = 'Please Enter email Addresss';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
     error = 'Invalid email address';
   }
   return error;
 }
function validateUsername(value) {
   let error;
   if (!value) {
    error="Please Enter UserName"
   }
   if (value === 'admin') {
     error = 'Nice try!';
   }
   return error;
 }
 export const Validate = () => (
   <div>
     <h1>Signup</h1>
     <Formik
      initialValues={{
           username: '',
           email: '',
         }}
         onSubmit={values => {
          alert(values.username);
          alert(values.email);
           console.log(values);
         }}
       >
         {({ errors, touched, isValidating }) => (
           <Form>
             <Field name="email" validate={validateEmail} />
             {errors.email && touched.email && <div>{errors.email}</div>}

     <Field name="username" validate={validateUsername} />
             {errors.username && touched.username && <div>{errors.username}</div>}

      <button type="submit">Submit</button>
               </Form>
   )}
    </Formik>
  </div>
);

export default Validate