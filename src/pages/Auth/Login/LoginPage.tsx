import React from 'react';
import { useNavigate } from 'react-router';

const LoginPage:React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="">
      <div className="p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form autoComplete="off">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={() => navigate("Menu/Home")}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
