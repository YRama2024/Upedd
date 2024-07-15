// only a button component to stay in top of the home page component
import React from 'react'
import { useNavigate } from 'react-router-dom'


function TopButton() {
    const Navigate = useNavigate();

    const handleRedirect = () => {
        Navigate("/investor/login")
    }
  return (
      <div className="w-full flex justify-end p-4">
        <button
          onClick={handleRedirect}
          style={{ fontFamily: '"Cormorant SC", serif' }}
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-3xl"
        >
         For Investors 
        </button>
      </div>
  )
}

export default TopButton 