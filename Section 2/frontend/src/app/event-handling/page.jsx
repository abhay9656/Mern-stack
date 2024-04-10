'use client'
import React from 'react';

const Page = () => {
  return (
    <div>
       Eventhandling

       <hr />
       <button className='btn btn-success ms-4' onClick={ ()=>{ alert('button') } }>Click</button>
       <input type="color" onChange={(e)=>{console.log(e.target.value);
         document.body.style.backgroundColor=e.target.value
      }}/>
    </div>
  );
}

export default Page;
