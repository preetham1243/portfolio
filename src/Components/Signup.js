import React from 'react';
import { Formik, Form } from 'formik';
import  TextField  from './TextField';
import * as Yup from 'yup';
import Loginimage2 from './Assests/Loginimage2.jpg'
// changed arrow function to normal function
 function Signup(){
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(5, "Name must contain atleast 5 characters")
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
  })
  return (
    <>
      <Formik
      initialValues={{
        firstName: '',
        email: ''
       
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
        
      {formik => (
       
        <div style={{backgroundImage: `url(${Loginimage2})`}} className="container">
            <div style={{display: 'flex',justifyContent: 'center'}}>
              <h1 style={{color:'white'}}>Login</h1>
            </div>
          <Form className="form">
          
            <TextField label="Name" name="firstName" type="text" />
           
            <TextField label="Email" name="email" type="email" />
            <button className="btn btn-success" type="submit" style={{marginRight:25}}>Register</button>
            <button className="btn btn-danger " type="reset">Reset</button>
            </Form>
          <span style={{color:'yellow'}}>* { } Please login so that we can know who are viewing our data....<br />Because Privacy matters 😊</span>
        </div>
       
      )}
    </Formik>
    </>
  )

}

export default Signup;