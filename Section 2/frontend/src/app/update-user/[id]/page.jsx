'use client'
import { Formik } from 'formik';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const updateUser = () => {
  const { id } = useParams();
  const [userData, setuserData] = useState(null)

  const fetchUser = async () => {
    const res = await fetch('http://localhost:5500/user/getbyid/' + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setuserData(data);
  }
  useEffect(() => {
    fetchUser();
  }, [])

  const submitForm = () => { }

  return (
    <div>
      <div className="container mt-5 shadow card ">
        <h2 className='text-center'>Update User Information</h2>
        {
          userData !== null ? (
            <Formik initialValues={userData} onSubmit={submitForm}>
              {(userFrom) => {
                return (
                  <form onSubmit={userFrom.handleSubmit}>
                    <div>{id}</div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={userFrom.handleChange}
                        value={userFrom.values.name}
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
                        onChange={userFrom.handleChange}
                        value={userFrom.values.email}
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
                        onChange={userFrom.handleChange}
                        value={userFrom.values.email}
                        name="password"

                        required
                      />

                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="Cpassword"
                        onChange={userFrom.handleChange}
                        value={userFrom.values.email}
                        name="password"

                        required
                      />

                    </div>
                    <button type="submit" className="btn btn-primary mt-4 mb-5">
                      Update
                    </button>
                  </form>
                )
              }}
            </Formik>
          ) : (
            <p className='fw-bold text-muted'>Loading....</p>
          )
        }


      </div>
    </div>
  )
}

export default updateUser
