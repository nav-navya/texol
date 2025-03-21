

import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)] w-full px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Welcome to <u className="underline decoration-amber-500 underline-offset-1">TSEEP Mastery Box</u>
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Unlock your potential with <b>AI-inspired tools</b>
        </p>
      </div>

      <hr className="border-gray-300 mb-7" />

      
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6">
       
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <p className="text-gray-700 text-sm md:text-base">
            I confirm that I have read and accept the terms and conditions and privacy policy.
          </p>
        </div>

       
        <Link to='/login'><button className="w-[150px] h-[50px] bg-[#2A586F] text-white font-medium rounded-lg mt-4 md:mt-0">
          Get Started
        </button></Link>
      </div>
    </>
  );
}

export default Landing;
