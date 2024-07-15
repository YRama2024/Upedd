import React, { useState } from 'react';
import axios from 'axios';
import upeddLogo from "/home/jack/Pictures/Screenshots/UpeddLogo.png"

const CompanyList = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');
  const [employees, setEmployees] = useState(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/all', {
        username,
        password,
      });
      if (response.status === 200) {
        setCompanies(response.data);
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const fetchEmployees = async (companyId) => {
    try {
      const response = await axios.get(`http://localhost:3000/company/${companyId}/employees`);
      setEmployees(response.data);
      setSelectedCompanyId(companyId);
    } catch (err) {
      setError('An error occurred while fetching employees. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4">
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="max-w-md mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-center my-4">Company Profiles</h1>
          <div className="space-y-4">
            {companies.map((company) => (
              <div key={company._id} className="bg-white p-4 rounded-lg shadow-md flex">
                <img
                  src={company.companyProfile.logo || upeddLogo}
                  alt={`${company.companyProfile.companyName} logo`}
                  className="w-16 h-16 mr-4 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{company.companyProfile.companyName}</h2>
                  <p className="text-gray-700">
                    <strong>Industry:</strong> {company.companyProfile.industry}
                  </p>
                  <p className="text-gray-700">
                    <strong>Stage:</strong> {company.companyProfile.stage}
                  </p>
                  <p className="text-gray-700">
                    <strong>Description:</strong> {company.companyProfile.description}
                  </p>
                  <p
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() => fetchEmployees(company._id)}
                  >
                    Company Employees
                  </p>
                  {employees && selectedCompanyId === company._id && (
                    <div>
                      <h3 className="text-lg font-semibold mt-2">Primary Account</h3>
                      {employees.primaryAccount.map((employee) => (
                        <div key={employee._id} className="ml-4">
                          <p><strong>Name:</strong> {employee.name}</p>
                          <p><strong>Email:</strong> {employee.email}</p>
                          <p><strong>Account Type:</strong> {employee.accountType}</p>
                        </div>
                      ))}
                      <h3 className="text-lg font-semibold mt-2">Secondary Account</h3>
                      {employees.secondaryAccount.map((employee) => (
                        <div key={employee._id} className="ml-4">
                          <p><strong>Name:</strong> {employee.name}</p>
                          <p><strong>Email:</strong> {employee.email}</p>
                          <p><strong>Role:</strong> {employee.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
