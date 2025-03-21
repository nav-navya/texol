import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import React, { useState } from 'react';
import { loginUser } from '../Services/authService';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      alert(res.data.msg); 
      navigate('/quiz'); 
    } catch (error) {
      console.error(error.response?.data?.msg || 'Login failed');
      alert(error.response?.data?.msg || 'Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <ToastContainer position="top-center" autoClose={3000} />

      <h2 className="text-[#2A586F] underline decoration-amber-300 text-3xl font-bold my-8">
        Login
      </h2>

      <div className="w-[450px] p-6 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit}>
          <label className="font-bold text-xl">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full h-12 px-4 mt-2"
            placeholder="Enter your email"
            required
          />

          <label className="font-bold text-xl mt-4 block">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full h-12 px-4 mt-2"
            placeholder="Enter Password"
            required
          />

          <button
            type="submit"
            className="w-full h-12 bg-[#2A586F] text-white font-medium rounded-lg mt-6"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center my-4">
          <p>
            Don't have an account?{' '}
            <Link to="/register">
              <span className="text-blue-400 cursor-pointer">Register Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
