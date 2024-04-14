import React from 'react';
import Link from 'next/link';
import {IconLogin} from '@tabler/icons-react'
import classes from './page.module.css' 
const Home = () => {
  return (
    <div className={classes.bg}>
        <h1 className={classes.link} style={{ textAlign:'center',fontSize:60 }}>Welcome page
        </h1>
        <button className='btn btn-primary ms-5'><IconLogin size={30} color='white'/>  Click</button>
    </div>
  );
}

export default Home;
 