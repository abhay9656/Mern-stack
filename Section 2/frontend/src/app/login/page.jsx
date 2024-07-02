'use client'
import React from 'react'
import classes from './login.module.css'
import { useFormik } from 'formik'
const Login = () => {

  const loginForm=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      console.log(values);
    }
  })
  return (
    <div className={classes.image}>
      <div className={classes.container}>
       <form onSubmit={loginForm.handleSubmit}>
      <h1 style={{textAlign:'center'}}>Login Page</h1>
      <input className={classes.input} type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email}  placeholder="Enter your email"   />
      <input className={classes.input}  type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} placeholder="Password"  />
     
      <button type='submit' className={classes.button} >Login</button>
       </form>
    </div>
    </div>
  )
}

export default Login
