'use client'
import React from 'react'
import styles from './signup.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name:Yup.string().min(4,'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().required('password is required').min(6,"too small")
});


const Signup = () => {

  
  const signupForm=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''

    },
    onSubmit:(value)=>{
      console.log(value);
      fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(value),
        headers:{
          'content-Type':'application/json'
        }
      })
    },
    validationSchema:SignupSchema

  })

  return (
    <div>
       <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.img}></div>
        <div className={styles.sign}>
          <div className={styles.page}>
            <h2>Sign up</h2>
            <form onSubmit={signupForm.handleSubmit}>
            <div className={styles.input}>
              <input className={styles.inp} type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} placeholder="Enter your Username" />
              {signupForm.touched.name && (
                <small className='text-danger'>{signupForm.errors.name}</small>
              )}
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} placeholder="Enter your password" />
              {signupForm.touched.password && (
                <small className='text-danger'>{signupForm.errors.password}</small>
              )}
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmPassword} placeholder="Confirm your password " />
              {signupForm.touched.confirmPassword && (
                <small className='text-danger'>{signupForm.errors.confirmPassword}</small>
              )}
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="email" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} placeholder="Enter your Email" />
              {signupForm.touched.email && (
                <small className='text-danger'>{signupForm.errors.email}</small>
              )}
            </div>
            <button className={ styles.btnPrimary} type="submit">
              Sign up
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
