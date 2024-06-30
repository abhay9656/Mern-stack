import React from 'react'

const product = () => {
  return (
    <div>
      <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
      
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Product Category</label>
          <input
            type="text"
            className="form-control"
            id="productCategory"
         
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            id="productImage"
         
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
