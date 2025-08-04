'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
 
import * as Yup from 'yup';

 const validation_Schema = Yup.object({
  name:Yup.string().required('Name is Required'),
  email:Yup.string().email('Invalid Email').required('Email is required'),
  phone :Yup.string().matches(/^[0-9]{10}$/, 'Phone must be 10 digits').required('Number is Required')
 })
 const page = () => {
    const initial_Values = {name: '',email: '',phone: ''};
      const handleSubmit = (values,{ setSubmitting, resetForm }) => {
       alert(JSON.stringify(values));
       resetForm();
    
  };

   return (
     <div className='max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border'>
         <Formik initialValues={initial_Values} validationSchema={validation_Schema} onSubmit={handleSubmit}>
          <Form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <Field
              name="name"
              className="w-full border p-2 rounded"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <Field
              name="phone"
              className="w-full border p-2 rounded"
              placeholder="Enter your phone number"
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
         </Formik>
     </div>
   )
 }
 
 export default page