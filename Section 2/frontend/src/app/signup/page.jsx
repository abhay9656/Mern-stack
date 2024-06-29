'use client'
import React from 'react'
import styles from './signup.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Signup = () => {


  return (
    <div>
       <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.img}></div>
        <div className={styles.sign}>
          <div className={styles.page}>
            <h2>Sign up</h2>
            <form >
            <div className={styles.input}>
              <input className={styles.inp} type="text" id='name'  placeholder="Enter your Username" />
            
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" id='password'  placeholder="Enter your password" />
             
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" id='confirmPassword'   placeholder="Confirm your password " />
             
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="email" id='email'   placeholder="Enter your Email" />
             
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
