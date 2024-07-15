// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";

// const NavBar = () => {
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [companyRegistered, setCompanyRegistered] = useState(false);
//   const [founderRegistered, setFounderRegistered] = useState(false);

//   // Check if user is logged in
//   const isLoggedIn = () => {
//     return !!localStorage.getItem('authToken');
//   };

//   // Check if company and founder are registered
//   useEffect(() => {
//     const companyId = localStorage.getItem('companyId');
//     const authToken = localStorage.getItem('authToken');
//     if (companyId) {
//       setCompanyRegistered(true);
//     }
//     if (authToken) {
//       setFounderRegistered(true);
//     }
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('companyId');
//     setShouldRedirect(true);
//   };

//   if (shouldRedirect) {
//     return <Navigate to="/home" />;
//   }

//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between">
//         <div className="text-white text-lg font-bold">Upped</div>
//         <div className="space-x-4">
//           {!isLoggedIn() && (
//             <>
//               <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
//               <Link to="/signup" className="text-white hover:text-gray-200">Signup</Link>
//             </>
//           )}
//           {isLoggedIn() && (
//             <button onClick={handleLogout} className="text-white hover:text-gray-200">Logout</button>
//           )}
//           {isLoggedIn() && !companyRegistered && (
//             <Link to="/company/register" className="text-white hover:text-gray-200">Register Company</Link>
//           )}
//           {isLoggedIn() && companyRegistered && !founderRegistered && (
//             <Link to="/founder/register" className="text-white hover:text-gray-200">Register Founder</Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [companyRegistered, setCompanyRegistered] = useState(false);
  const [founderRegistered, setFounderRegistered] = useState(false);

  // Check if user is logged in
  const isLoggedIn = () => {
    return!!localStorage.getItem('authToken');
  };

  // Check if company and founder are registered
  useEffect(() => {
    const companyId = localStorage.getItem('companyId');
    const authToken = localStorage.getItem('authToken');
    if (companyId) {
      setCompanyRegistered(true);
    }
    if (authToken) {
      setFounderRegistered(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('companyId');
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Navigate to="/home" />;
  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Upped</div>
        <div className="space-x-4">
          {!isLoggedIn() &&!companyRegistered && (
            <>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
              <Link to="/company/register" className="text-white hover:text-gray-200">Register Company</Link>
            </>
          )}
          {!isLoggedIn() && companyRegistered &&!founderRegistered && (
            <>
              <Link to="/founder/register" className="text-white hover:text-gray-200">Register Founding Team</Link>
              <Link to="/employee/register" className="text-white hover:text-gray-200">Register Employees</Link>
            </>
          )}
          {!isLoggedIn() && companyRegistered && founderRegistered && (
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          )}
          {isLoggedIn() && (
            <button onClick={handleLogout} className="text-white hover:text-gray-200">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;