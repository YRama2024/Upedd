import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyRegister from "./pages2/CompanyRegister";
import FounderRegister from "./pages2/FounderRegister";
import EmployeeRegister from "./pages2/EmployeeRegister";
import Home from "./pages2/Home";
import LoginUser from "./pages2/LoginUser";
import TopButton from './pages2/TopButton'
import InvestorLogin from './pages2/InvestorLogin'
import CompanyEmployees from "./pages2/CompanyEmployees";
import CompanyDetails from "./pages2/CompanyDetails";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/founder/register" element={<FounderRegister />} />
          <Route path="/employee/register" element={<EmployeeRegister />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/topButton" element={<TopButton/>} />
          <Route path="/investor/login" element={<InvestorLogin/>} />
          <Route path="/company/details/:id" element={<CompanyDetails />} />
          <Route path="/company/employees" element={<CompanyEmployees />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
