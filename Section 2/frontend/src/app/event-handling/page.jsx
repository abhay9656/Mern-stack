'use client'
import React from 'react';

const Page = () => {
  return (
    <div>
       Eventhandling

       <hr />
       <button className='btn btn-success ms-4' onClick={ ()=>{ alert('button') } }>Click</button>
    </div>
  );
}

export default Page;
