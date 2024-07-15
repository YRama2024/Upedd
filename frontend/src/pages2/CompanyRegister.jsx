import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, Option } from "@material-tailwind/react";
import { Navigate } from "react-router-dom";

const CompanyRegistrationForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    stage: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields before submitting
    const isEmpty = Object.values(formData).some((field) => !field);
    if (isEmpty) {
      alert("Please fill out all required fields before submitting.");
      return; // Prevent form submission if fields are empty
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register/company",
        formData
      );
      
      const companyId = response.data.company._id;
      if (companyId) {
        localStorage.setItem("companyId", companyId);
        alert("Company registered!");
        setShouldRedirect(true);
      } else {
        console.error("No companyId found in response:", response.data);
        alert("Failed to register company. Please try again.");
      }
    }catch (error) {
      console.error("There was an error registering the company:", error);
      if (error.response?.data?.error === "Company already exists") {
        alert("Company already exists");
      } else {
        console.log(error.message);
      }
    }
  };

  const handleRegisterClick = () => {
    Navigate("/company/register");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-3/6 mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Register Your Company
        </h2>
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter company name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Industry
          </label>
          <Select
            id="industry"
            label="Select Industry"
            className=""
            onChange={(e) => handleSelectChange("industry", e)}
          >
            <Option value="Agriculture">Agriculture</Option>
            <Option value="Food Processing">Food Processing</Option>
            <Option value="Textiles and Apparel">Textiles and Apparel</Option>
            <Option value="Information Technology (IT) and IT Enabled Services (ITES)">
              IT and ITES
            </Option>
            <Option value="Tourism and Hospitality">
              Tourism and Hospitality
            </Option>
            <Option value="Logistics and Transportation">
              Logistics and Transportation
            </Option>
            <Option value="Construction and Real Estate">
              Construction and Real Estate
            </Option>
            <Option value="Automobile">Automobile</Option>
            <Option value="Pharmaceuticals">Pharmaceuticals</Option>
            <Option value="Chemicals">Chemicals</Option>
            <Option value="Renewable Energy">Renewable Energy</Option>
            <Option value="E-commerce">E-commerce</Option>
            <Option value="Fintech">Fintech</Option>
            <Option value="Education Technology (EdTech)">EdTech</Option>
            <Option value="Artificial Intelligence (AI) and Machine Learning (ML)">
              Artificial Intelligence (AI) and Machine Learning (ML)
            </Option>
            <Option value="Gems and Jewellery">Gems and Jewellery</Option>
            <Option value="Media and Entertainment">
              Media and Entertainment
            </Option>
            <Option value="Non-profit">Non-profit</Option>
            <Option value="Arts and Culture">Arts and Culture</Option>
            <Option value="Other">Other</Option>
          </Select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="stage"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Stage
          </label>
          <Select
            id="stage"
            label="Select Stage"
            className=""
            onChange={(e) => handleSelectChange("stage", e)}
          >
            <Option value="Pre-seed Stage">Pre-seed Stage</Option>
            <Option value="Seed Stage">Seed Stage</Option>
            <Option value="Startup Stage (Early Stage)">
              Startup Stage (Early Stage)
            </Option>
            <Option value="Growth Stage">Growth Stage</Option>
            <Option value="Established Stage">Established Stage</Option>
            <Option value="Expansion Stage">Expansion Stage</Option>
            <Option value="Maturity Stage">Maturity Stage</Option>
            <Option value="Merger and Acquisition Stage">
              Merger and Acquisition Stage
            </Option>
          </Select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter company description"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleRegisterClick}
            style={{ fontFamily: '"Cormorant SC", serif' }}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-3xl"
          >
            REGISTER
          </button>
        </div>
      </form>
      {shouldRedirect && <Navigate to="/founder/register" />}
    </div>
  );
};

export default CompanyRegistrationForm;
