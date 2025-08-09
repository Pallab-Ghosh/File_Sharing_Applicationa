'use client'
import React from 'react'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';

//Define the Schema for Form
const validation_Schema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().min(6, "Password must be atleast 6 characters").required("Please Provide Password"),
})

const SignInForm = () => {
    
    //Crete a Default value 
const initial_Values = {email: '',password: "" };

    //After Form Submission handleSubmit func will run
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
      alert(JSON.stringify(values));
      resetForm();
  };


return (
    <div > 
        <Formik initialValues={initial_Values} validationSchema={validation_Schema} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-4 items-center">
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

        
            <div>
            <label className="block text-gray-700 font-bold">Password</label>
            <Field
                name="password"
                className="sm:w-md w-80 border p-2 rounded"
                placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>


            <button
            type="submit"
            className="bg-blue-600 text-white h-14 rounded-lg hover:bg-blue-700 sm:w-md w-80"
            >
                 Sign-in 
            </button>
               <div className='text-center mb-14'>
                    <Link href='/resetPassword'>
                        <p className=' text-blue-600 font-bold textlg hover:underline'>Forgot your password?</p>
                    </Link>
                </div>

            <div className='text-center mb-7'>
                <p className='text-xl'>Dont have an account?</p>
                <Link href='/SignUp'>
                    <p className=' text-blue-600 font-bold textlg'>Sign Up</p>
                </Link>
            </div >
        </Form>
        </Formik>
    </div>
  )
}

export default SignInForm
