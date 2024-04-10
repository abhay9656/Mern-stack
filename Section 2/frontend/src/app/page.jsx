import React from 'react';
import Link from 'next/link';
import classes from './page.module.css' 
const Home = () => {
  return (
    <div className={classes.bg}>
        <h1 className={classes.link} style={{ textAlign:'center',fontSize:60 }}>Welcome page
        </h1>
    </div>
  );
}

export default Home;
 