import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginUser= () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login/employee", formData);
      localStorage.setItem("token", response.data.token);
      navigate("/employee/dashboard");
    } catch (err) {
      setError(err.response.data.error || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center my-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-3/6 mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 libre-baskerville">
          Employee Login
        </h2>
        {error && <div className="text-red-500 text-sm ">{error}</div>}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            type="submit"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-3xl"
          >
            LOGIN
          </button>
          <button className="px-4 py-2 border flex items-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
