import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpeddLogo from "./../images/UpeddLogo.png";

const InvestorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/startups/list", {
        username,
        password,
      });

      if (response.status === 200) {
        setCompanies(response.data);
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleCompanyClick = (companyId) => {
    navigate(`/company/details/${companyId}`);
  };

  return (
    <div className="flex justify-center items-center my-6">
      {!isAuthenticated ? (
        <form
          onSubmit={handleLogin}
          className="space-y-6 w-3/6 mx-auto p-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 libre-baskerville">
            Login
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              type="submit"
              style={{ fontFamily: '"Cormorant SC", serif' }}
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
      ) : (
        <div className="w-full mx-auto p-8">
          <h1 className="text-2xl font-bold text-center mb-6 libre-baskerville">
            Company Profiles
          </h1>
          <div className="space-y-4 w-full mx-auto">
            {companies.map((company) => (
              <div
                key={company._id}
                className="bg-white w-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center"
              >
                <img
                  src={UpeddLogo}
                  alt="Company Logo"
                  className="w-16 h-16 mr-4 rounded-full"
                />
                <div>
                  <h2
                    className="text-xl font-semibold mb-2 cursor-pointer hover:underline"
                    onClick={() => handleCompanyClick(company._id)}
                  >
                    {company.companyProfile.companyName}
                  </h2>
                  <p className="text-gray-700">
                    <strong>Industry:</strong> {company.companyProfile.industry}
                  </p>
                  <p className="text-gray-700">
                    <strong>Stage:</strong> {company.companyProfile.stage}
                  </p>
                  <p className="text-gray-700">
                    <strong>Description:</strong>{" "}
                    {company.companyProfile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorLogin;
