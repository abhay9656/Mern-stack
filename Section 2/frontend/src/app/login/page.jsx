'use client'
import React from 'react'
import classes from './login.module.css'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
const Login = () => {

  const loginForm=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      fetch('http://localhost:5500/user/authenticate',{
        method:'post',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify(values)
      })
      .then((response) => {
        if(response.status===200){
          toast.success('Login successful');
          resetForm();
        }
        else{
          toast.error('Login failed');
        }
        return response.json()
      }).then((result)=>{
            console.log(result);
            localStorage.setItem('token',result);
            document.cookie=`token${result}`;
      })
      .catch((err) => {
          toast.error('Something went wrong');
      });
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
