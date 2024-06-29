import React, { useEffect } from 'react'

const MangeUsers = () => {


    const fetchUser= async ()=>{
     const res= await fetch('http://localhost:5500/user/getall',{
        method:'GET'
      })
      console.log(res.status);
    }

    useEffect

  return (
    <div>
      hello
    </div>
  )
}

export default MangeUsers
