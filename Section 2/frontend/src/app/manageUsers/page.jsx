"use client"
import React, { useEffect, useState } from 'react'

const MangeUsers = () => {

     const [userList,setUserList]=useState([])

    const fetchUser= async ()=>{
     const res= await fetch('http://localhost:5500/user/getall',{
        method:'GET'
      })
      console.log(res.status);
      const data = await res.json()
      console.table(data)
      setUserList(data)
    }

    useEffect(()=>{
       fetchUser();
    },[])

    const deleteUser =async (id)=>{
      const res=await fetch(`http://localhost:5500/user/delete/${id}`,{
        method:'DELETE'
      });
      console.log(res.status);
      if(res.status===200){
        toast.success("user delete successfully")
        fetchUser();
      }
    }

  return (
    <div>
      <h3 className='mt-5 text-center fw-bold'>Manage User</h3>
      <div className='container'>
          <table className='table '>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th colSpan={2}> Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((user)=>{
                        return (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toDateString()}</td>
                            <td>
                                <button className='btn btn-danger '>Delete</button>
                            </td>
                            <td>
                            <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default MangeUsers
