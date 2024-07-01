import React from 'react'

const updateUser = () => {
  return (
    <div>
      <div className="container mt-5">
      <h2>Update User Information</h2>
      <form >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update
        </button>
      </form>
    </div>
    </div>
  )
}

export default updateUser
