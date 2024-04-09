import React from 'react';
import Link from 'next/link';
import classes from './page.module.css' 
const Home = () => {
  return (
    <div>
        <Link  href="/login">Login page</Link><br/>
        <Link href="/signup">Sign up</Link>
        <h1 className={classes.link} style={{ textAlign:'center',fontSize:60 }}>Welcome page</h1>
        <input type="text" /><br />
        <button className='mybtn'>Click</button>
    </div>
  );
}

export default Home;
 