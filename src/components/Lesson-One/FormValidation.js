import React from 'react'
import { useFormik } from 'formik'


const initialValues = {
  name: '',
  email: ''
}

const onSubmit =  values => {
  console.log('Form data', values)
}

const validate =  values => {
  let errors = {}
      
  if(!values.name){
    errors.name = "Name field is required"
  } 

  if(!values.email){
    errors.email = "Email field is required"
  }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
    errors.email = "Invalid mail format"
  }

  return errors
}

const FormValidation = () => {
  const formik = useFormik({
    //Passing our intial values to our fields
    initialValues,
    onSubmit,
    validate
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
        {formik.errors.name ? <span>{formik.errors.name}</span> : null}

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <span>{formik.errors.email}</span> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
