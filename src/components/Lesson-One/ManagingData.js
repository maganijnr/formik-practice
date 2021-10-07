import React from 'react'

import { useFormik } from 'formik'

const ManagingData = () => {
  const formik = useFormik({
    //Passing our intial values to our fields
    initialValues:{
      name: '',
      email: ''
    }
  })

  console.log('Form values', formik.values)
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default ManagingData
