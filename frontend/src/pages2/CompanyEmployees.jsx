import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CompanyEmployees = () => {
  const { id } = useParams();
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/company/${id}/employees`);
        setEmployees(response.data);
      } catch (err) {
        setError('An error occurred while fetching employees. Please try again.');
      }
    };

    fetchEmployees();
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">Company Employees</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {employees ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CompanyEmployees;
