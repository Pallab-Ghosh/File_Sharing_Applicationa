'use client'
import { useState } from 'react';


const Signup = () => {
  const [data , setdata]= useState({name : ' ', year : ' ', dept:' ' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    // You can handle API submission here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <input
        name="year"
        value={data.year}
        onChange={handleChange}
        placeholder="Enter your year"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <input
        name="dept"
        value={data.dept}
        onChange={handleChange}
        placeholder="Enter your department"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get started Free
      </button>
    </form>
  );
};


export default  Signup