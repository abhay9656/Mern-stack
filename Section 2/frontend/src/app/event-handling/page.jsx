'use client'
import React from 'react';

const Page = () => {
  return (
    <div>
       Eventhandling

       <hr />
       <button className='btn btn-success' onClick={ ()=>{ alert('button was clicked') } }>Click</button>
    </div>
  );
}

export default Page;
