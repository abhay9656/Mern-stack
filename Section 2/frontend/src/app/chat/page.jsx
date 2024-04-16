'use client'
import React from 'react';
import styles from './chat.module.css'
import  { useState } from 'react';
const Chat = () => {
  
    const [chat, setchat] = useState([{
        chat:"hello! i  m here"
    }])

    const msg=(e)=>{
          if(e.code==='Enter'){
            setchat([...chat,{chat:e.target.value}])
            e.target.value=''
          }
    }

  return (
    <div>
      <div className={styles.chatcontainer}>
        <div className={`${styles.chatheader}`}>Chat Page</div>
        <div className='p-5'>
           
           {
            chat.map((item)=>{
                return <p>{item.chat}</p>
            })
           }
         
        </div>
        <div className={styles.chatinput}>
          <input className={styles.input} onKeyDown={msg} type="text" placeholder="Type your message..." />
        </div>
      </div>
    </div>
  );
}

export default Chat;
