import React from 'react'
import styles from './signup.module.css'
const Signup = () => {
  return (
    <div>
       <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.img}></div>
        <div className={styles.sign}>
          <div className={styles.page}>
            <h2>Sign up</h2>
            <div className={styles.input}>
              <input className={styles.inp} type="text" placeholder="Enter your Username" />
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="password" placeholder="Enter your password" />
            </div>
            <div className={styles.password}>
              <input className={styles.inp} type="email" placeholder="Enter your Email" />
            </div>
            <button className={ styles.btnPrimary}  type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
