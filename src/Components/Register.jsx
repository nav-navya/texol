import React, { useState } from 'react';
import { registerUser } from '../Services/authService';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", password: "", phone: "", role: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      alert(res.data.msg);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#2A586F] underline decoration-amber-300 text-3xl font-bold">
        Register
      </h2>

      <div className="w-[450px] p-6 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit}>
          <label className="font-bold text-xl">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full h-12 px-4 mt-2"
            placeholder="Enter your full name"
          />

          <label className="font-bold text-xl mt-4 block">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full h-12 px-4 mt-2"
            placeholder="Enter your email"
          />

          <label className="font-bold text-xl mt-4 block">Mobile Number</label>
          <div className="flex gap-2 mt-2">
            <span className="border border-gray-300 rounded-sm w-[90px] h-12 flex items-center justify-center bg-gray-200">+91</span>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={handleChange}
              className="border border-gray-300 rounded-sm px-4 w-full h-12"
              placeholder="Enter your phone number"
            />
          </div>

          <label className="font-bold text-xl mt-4 block">Current Status</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center">
              <input type="radio" name="role" value="Student" className="mr-2" onChange={handleChange} />
              Student
            </label>
            <label className="flex items-center">
              <input type="radio" name="role" value="Employee" className="mr-2" onChange={handleChange} />
              Employee
            </label>
          </div>

          <label className="font-bold text-xl block">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="border border-gray-300 rounded-sm w-full h-12 px-4 mt-2"
            placeholder="Enter Password"
          />

          <button type="submit" className="w-full h-12 bg-[#2A586F] text-white font-medium rounded-lg mt-8">
            Save
          </button>
        </form>

        <div className="flex justify-center my-4">
          <p>
            Already have an account?
            <Link to='/login'>
              <span className="text-blue-400 cursor-pointer"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
