 'use client'
import React from 'react'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

// Define the Schema for Contact Form
const validation_Schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  mobile: Yup.string().matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number").required("Mobile number is required"),
});

const ContactForm = () => {
  // Default values
  const initial_Values = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // After form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initial_Values}
        validationSchema={validation_Schema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 items-center">
          
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-bold">Name</label>
            <Field
              name="name"
              type="text"
              className="sm:w-md w-80 border p-2 rounded"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <Field
              name="email"
              type="email"
              className="sm:w-md w-80 border p-2 rounded"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          {/* mobile */}
          <div>
            <label className="block text-gray-700 font-bold">Mobile No</label>
            <Field
              name="mobile"
              type="text"
              className="sm:w-md w-80 border p-2 rounded"
              placeholder="Enter Contact Number"
            />
            <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white h-14 rounded-lg hover:bg-blue-700 sm:w-md w-80"
          >
            Connect Us
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
