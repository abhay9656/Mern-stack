import React from 'react'
import classes from './login.module.css'
const Login = () => {
  return (
    <div className={classes.image}>
      <div className={classes.container}>
      <h1 style={{textAlign:'center'}}>Login Page</h1>
      <input className={classes.input} type="text"  placeholder="Enter your email"   />
      <input className={classes.input}  type="password"  placeholder="Password"  />
      <button className={classes.button} >Login</button>
    </div>
    </div>
  )
}

export default Login
