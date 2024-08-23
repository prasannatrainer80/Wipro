import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });
const Basic = () => {
    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
        alert("User Name  " +values.username);
        alert("Password  " +values.password);
        alert("Eamil  " +values.email);
      };
    return (
      <Formik
        initialValues={{ username: '', email: '', password: '' }} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
            User Name : 
          <Field type="text" name="username" /> <br/>
          <ErrorMessage name="username" component="div" />
          Email : 
          <Field type="email" name="email" /> <br/>
          <ErrorMessage name="email" component="div" />
          Password : 
          <Field type="password" name="password" /> <br/>
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };
  export default Basic;