 'use client'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';


// Define the Schema for Feedback Form
const validation_Schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  category: Yup.string().required('Please select a category'),
  message: Yup.string().min(10, "Feedback must be at least 10 characters").required("Message is required"),
});

const FeedbackForm = () => {
  // Default values
  const initial_Values = {
    name: '',
    email: '',
    category: '',
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

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-bold">Category</label>
            <Field
              as="select"
              name="category"
              className="sm:w-md w-80 border p-2 rounded"
            >
              <option value="">Select category</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="general">General Feedback</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-bold">Message</label>
            <Field
              as="textarea"
              name="message"
              rows="4"
              className="sm:w-md w-80 border p-2 rounded"
              placeholder="Write your feedback..."
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Submit */}
       
      <button
            type="submit"
            className="bg-blue-600 text-white h-14 rounded-lg hover:bg-blue-700 sm:w-md w-80"
          >
            Submit Feedback
          </button>
         
    
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
