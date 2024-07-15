import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import design from "../images/design.png";
import handshake from "../images/handshake.jpeg";
import consult from "../images/consult.jpeg";
import money from "../images/money.jpeg";
import startup from "../images/startup.jpg";
import vc1 from "../images/vc1.jpeg";
import vc2 from "../images/vc2.jpg";
import vc3 from "../images/vc3.jpeg";
import img1 from "../images/img1.jpeg";
import img2 from "../images/block5Img2.jpg";
import TopButton from './TopButton'
import BASE_URL from "../variables";

function Home() {
  const Navigate = useNavigate();

  const handleRegisterClick = () => {
    Navigate("/company/register");
  };

  const handleLoginClick = () => {
    Navigate("/login");
  };

  return (
    <div className="flex flex-col items-center  ">
      <TopButton/>
      {/* 1. */}
      <div className="text-9xl mt-8 mb-5 font-custom">Upped Community</div>
      <div className="flex justify-center">
        <img
          src={design}
          alt="Image description"
          className="w-120 h-80 rotate-6" // Adjust width, height, and rotation as needed
        />
      </div>
      <div
        style={{ fontFamily: '"Cormorant SC", serif' }}
        className="text-7xl mt-6 mb-4 text-gray-800"
      >
        FOUNDERS & INVESTORS
      </div>
      <button
        onClick={handleRegisterClick}
        style={{ fontFamily: '"Cormorant SC", serif' }}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-3xl"
      >
        REGISTER COMPANY
      </button>
      <p
        className="font-bold text-xl"
        style={{ fontFamily: '"Cormorant SC", serif' }}
      >
        Already have an account?{" "}
        <button
          onClick={handleLoginClick}
          style={{ fontFamily: '"Cormorant SC", serif' }}
          className="bg-black hover:bg-gray-700 text-white px-2 mt-2 rounded font-bold text-l"
        >
          LOGIN
        </button>
      </p>
      {/* 2. */}
      <div className="flex flex-col items-center justify-center p-6 mt-16 w-screen h-screen">
        <div className="flex justify-between w-full max-w-4xl mt-10 mb-24">
          <div className="text-center ">
            <img
              src={handshake}
              alt="Connect"
              className="rounded-full w-48 h-48 mx-auto mb-2 "
            />
            <h2 className="text-lg font-workSans ">
              WE <span className="font-bold font-custom">CONNECT</span>
            </h2>
          </div>
          <div className="text-center">
            <img
              src={consult}
              alt="Consult"
              className="rounded-full w-48 h-48 mx-auto mb-2"
            />
            <h2 className="text-lg ">
              WE <span className="font-bold font-custom">CONSULT</span>
            </h2>
          </div>
          <div className="text-center ">
            <img
              src={money}
              alt="Capitalize"
              className="rounded-full w-48 h-48 mx-auto mb-2"
            />
            <h2 className="text-lg ">
              WE <span className="font-bold font-custom">CAPITALIZE</span>
            </h2>
          </div>
        </div>
        <div className="flex items-center max-w-4xl justify-between">
          <div>
            <h3 className="text-2xl mb-4">
              WHATS UP FOR <span className="font-bold">STARTUPS?</span>
            </h3>
            <ul className="list-disc list-inside text-lg libre-baskerville">
              <li>Get Funding Opportunities</li>
              <li>Company Portfolio Page</li>
              <li>Know Investability Score</li>
            </ul>
          </div>
          <img
            src={startup}
            alt="Ideas"
            className="w-1/3 rounded" // Adjust width as needed
          />
        </div>
      </div>
      {/* 3.  */}
      <div className="flex flex-col items-center justify-between w-full h-full">
        <h1
          style={{ fontFamily: '"Cormorant SC", serif' }}
          className="text-3xl font-bold mt-8"
        >
          HEAR IT FROM <span className="text-black">PEERS</span>
        </h1>
        <div className="flex flex-col items-center justify-center w-full h-full mt-8">
          <div className="flex w-full h-full px-8 space-x-8">
            <div className="flex flex-col items-center w-1/2 justify-center">
              <p className="mb-4 text-center px-4 libre-baskerville">
                "We find the best ideas here"
              </p>
              <div className="h-32 w-32 bg-white flex items-center justify-center rounded-lg shadow-lg">
                <img
                  src={vc1}
                  alt="Anant Vishwa"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">gurdeep singh</h2>
                <p className="text-gray-600">CEO & Founder of zest labs</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2 justify-center">
              <p className="mb-4 text-center px-4 libre-baskerville">
                "They help you build what's next"
              </p>
              <div className="h-32 w-32 bg-white flex items-center justify-center rounded-lg shadow-lg">
                <img
                  src={vc3}
                  alt="Anant Vishwa"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">Anant Vishwa</h2>
                <p className="text-gray-600">CEO & Founder of multiK</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2 justify-center">
              <p className="mb-4 text-center px-4i libre-baskerville">
                "Innovation lives here"
              </p>
              <div className="h-32 w-32 bg-white flex items-center justify-center rounded-lg shadow-lg">
                <img
                  src={vc2}
                  alt="Ananta Vishwa"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">divya kumar</h2>
                <p className="text-gray-600">CEO & Founder of intellitech</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-16 mt-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold">1000+</h2>
              <p className="text-xl">Founders</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">700+</h2>
              <p className="text-xl">Startups</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="text-xl">Investors</p>
            </div>
          </div>
        </div>
      </div>
      {/* 5. */}
      <div className="flex items-center justify-center w-full space-x-4 mb-8 mt-12">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold mb-6">LET'S</h1>
          <div className="flex ">
            <h2
              style={{ fontFamily: '"Cormorant SC", serif' }}
              className="text-7xl mt-6 mb-6 italic"
            >
              BUILD IT
            </h2>
            <img
              src={img1}
              alt="Image 1"
              className="h-15 w-52 object-cover mt-2 ml-6 rounded-sm"
            />
          </div>
          <div className="flex">
            <img
              src={img2}
              alt="Image 2"
              className="h-15 w-48 object-cover mt-2 mr-6 rounded-sm"
            />
            <h1 className="text-7xl font-bold mt-6">TOGETHER</h1>
          </div>
        </div>
      </div>
      <button
        onClick={handleRegisterClick}
        style={{ fontFamily: '"Cormorant SC", serif' }}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-3xl mt-6"
      >
        REGISTER COMPANY
      </button>
      <p
        className="font-bold text-xl"
        style={{ fontFamily: '"Cormorant SC", serif' }}
      >
        Already have an account?{" "}
        <button
          onClick={handleLoginClick}
          style={{ fontFamily: '"Cormorant SC", serif' }}
          className="bg-black hover:bg-gray-700 text-white px-2 mt-2 rounded font-bold text-l"
        >
          LOGIN
        </button>
      </p>
    </div>
  );
}

export default Home;
