import React from 'react'
import { useFormik } from 'formik'

const HandlingSubmission = () => {
  const formik = useFormik({
    //Passing our intial values to our fields
    initialValues:{
      name: '',
      email: ''
    },

    onSubmit: values => {
      console.log('Form data', values)
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default HandlingSubmission
