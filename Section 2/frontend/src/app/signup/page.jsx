import React from 'react'
import classes from './signup.module.css'
const Signup = () => {
  return (
    <div className={classes.img}>
      <div className={classes.container}>
      <h2 style={{textAlign:'center'}}>Signup Page</h2>
      <input className={classes.input} type="text" placeholder="Username" />
      <input className={classes.input} type="password"  placeholder="Password"  />
      <input className={classes.input} type="email" placeholder="Email Address"/>
      <button className={classes.button}>Signup</button>
    </div>
    </div>
  )
}

export default Signup
