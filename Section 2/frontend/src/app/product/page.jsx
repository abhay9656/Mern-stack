'use client'
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';

const product = () => {


  const productDetails = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: ''
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://localhost:5500/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Product added successfully')
          }
        }).catch((err) => {
          console.log(err);
          toast.error("Something went wrong")
        });

    },
  })

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Add Product</h2>
        <form onSubmit={productDetails.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={productDetails.handleChange}
              value={productDetails.values.name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={productDetails.handleChange}
              value={productDetails.values.price}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">Product Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              onChange={productDetails.handleChange}
              value={productDetails.values.category}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">Product Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              onChange={productDetails.handleChange}
              value={productDetails.values.image}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default product
