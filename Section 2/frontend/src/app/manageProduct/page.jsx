"use client"
import React, { useState,useEffect } from 'react'

const manageProduct = () => {
    const [productList,setProductList]=useState([])
     
    const fetchProduct=async()=>{
        const res=await fetch('http://localhost:5500/product/getAll',{
            method:'GET',
        })
        console.log(res.status);
        const data=await res.json();
        setProductList(data);
    }
    useEffect(()=>{
        fetchProduct();
    },[])

  return (
     

    <div className='container'>
        <h3 className='text-center mt-4 mb-5'>Manage Product</h3>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody> 
   {
    productList.map((product)=>{
        return(
            <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.image}</td>
            </tr>
        )
    })
   }
  </tbody>
</table>
      
    </div>
  )
}

export default manageProduct
