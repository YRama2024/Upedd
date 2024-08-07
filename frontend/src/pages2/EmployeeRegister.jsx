import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import BASE_URL from "../variables";

const EmployeeRegister = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [formData, setFormData] = useState({
    companyId: "",
    name: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    const storedCompanyId = localStorage.getItem("companyId");
    if (storedCompanyId) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        companyId: storedCompanyId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/register/employee`,
        formData
      );
      const token = response.data.token;
      // Store token in local storage
      localStorage.setItem("authToken", token);
      alert(response.data.message);
      setShouldRedirect(true);
    } catch (error) {
      console.error("Error registering employee:", error);
      alert(error.response?.data?.error || "Internal server error");
    }
  };

  const handleRegisterClick = () => {
    Navigate("/home");
  };

  return (
    <div className="flex justify-center items-center my-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-3/6 mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 libre-baskerville">
          Register Employee
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter employee name"
            required
          />
        </div>
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
            placeholder="Enter employee email"
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
            placeholder="Enter employee password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter employee role"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={handleRegisterClick}
            style={{ fontFamily: '"Cormorant SC", serif' }}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-3xl"
          >
            REGISTER
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
      {shouldRedirect && <Navigate to="/home" />}
    </div>
  );
};

export default EmployeeRegister;
