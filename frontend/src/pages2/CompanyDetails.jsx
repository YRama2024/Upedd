import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UpeddLogo from './../images/UpeddLogo.png';
import BASE_URL from '../variables';

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/company/data/${id}`);
        setCompany(response.data);
      } catch (err) {
        setError('An error occurred while fetching company details.');
      }
    };

    fetchCompanyDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center my-4">{error}</p>;
  }

  if (!company) {
    return <p className="text-center my-4">Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center my-6">
      <div className="w-full mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src={UpeddLogo}
              alt="Company Logo"
              className="w-20 h-20 mr-4 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{company.companyProfile.companyName}</h1>
              <p className="text-gray-700">Industry: {company.companyProfile.industry}</p>
              <p className="text-gray-700">Stage: {company.companyProfile.stage}</p>
              <p className="text-gray-700">{company.companyProfile.description}</p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Founding Team</h2>
            <div className="space-y-4">
              {company.primaryAccount && company.primaryAccount.length > 0 ? (
                company.primaryAccount.map((account) => (
                  <div key={account.email} className="flex items-center">
                    {account.profilePic && (
                      <img src={account.profilePic} alt={account.name} className="w-12 h-12 rounded-full mr-4" />
                    )}
                    <div>
                      <p className="text-gray-700 font-semibold">{account.name}</p>
                      <p className="text-gray-700">Role: {account.accountType}</p>
                      <p className="text-gray-700">Email: {account.email}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No founding team members found.</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Employees</h2>
            <div className="space-y-4">
              {company.secondaryAccount && company.secondaryAccount.length > 0 ? (
                company.secondaryAccount.map((account) => (
                  <div key={account.email} className="flex items-center">
                    {account.profilePic && (
                      <img src={account.profilePic} alt={account.name} className="w-12 h-12 rounded-full mr-4" />
                    )}
                    <div>
                      <p className="text-gray-700 font-semibold">{account.name}</p>
                      <p className="text-gray-700">Role: {account.role}</p>
                      <p className="text-gray-700">Email: {account.email}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No employees found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
