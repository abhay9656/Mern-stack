'use client'
import React from 'react'
import styles from './signup.module.css'
import { useFormik } from 'formik'
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

    }
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
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} placeholder="Enter your password" />
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmPassword} placeholder="Confirm your password " />
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="email" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} placeholder="Enter your Email" />
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
