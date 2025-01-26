"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<>
<div className=" hidden md:block text-white p-4  ">
    <div className='flex justify-between'>

    <div className=" mt-3 logo">
      <Image 
        src="/favicon.png" 
        alt="Logo" 
        width={100}
        height={100} 
        priority 
      />
    </div>
    <ul className="flex space-x-4  p-2 rounded-full border-[1px] border-gray-700">
      <li>
        <Link legacyBehavior href="/about">
          <a className="hover:text-gray-500 text-xs font-extralight">What we do</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/">
          <a className="hover:text-gray-500 text-xs font-extralight">For Companies</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          <a className="hover:text-gray-500 text-xs font-extralight">For Talent</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          <a className="hover:text-gray-500 text-xs font-extralight">For Contribution</a>
        </Link>
      </li>

    </ul>

    <div className='justify-between space-x-5'>
      <button className='border-[1px] border-white rounded-full text-xs p-2 pl-3 pr-3 font-extralight'>Hire a Talent</button>
      <button className='font-extralight pl-3 pr-3 border-[1px] border-white rounded-full text-xs p-2'>Find a Job</button>
      <button className='font-extralight pl-3 pr-3 bg-[#CC5920] text-white rounded-full text-xs p-2'>Log In</button>

    </div>
    </div>
  </div>
    <div className="text-white p-4">
      <div className="flex justify-between items-center">
        <div className="mt-3 block md:hidden logo">
          <Image  src="/favicon.png" alt="Logo" width={100} height={100} priority />
        </div>
        <button
          className="md:hidden block z-10 p-2 rounded-md focus:outline-none hover:bg-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className={`block md:hidden h-6 w-6 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`flex-col space-x-4 p-10 border-[1px] border-gray-700 md:static absolute bg-black md:bg-transparent w-full md:w-auto top-16 left-0 md:flex-row  md:space-x-4 md:space-y-0 space-y-4 transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className=" m-20 flex-col space-x-4">
            <li>
              <Link legacyBehavior href="/about">
                <a className="hover:text-gray-500 text-xs font-extralight">What we do</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="hover:text-gray-500 text-xs font-extralight">For Companies</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="hover:text-gray-500 text-xs font-extralight">For Talent</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="hover:text-gray-500 text-xs font-extralight">For Contribution</a>
              </Link>
            </li>
          </ul>
          <div className="flex space-x-5">
            <button className="border-[1px] border-white rounded-full text-xs p-2 pl-3 pr-3 font-extralight">
              Hire a Talent
            </button>
            <button className="font-extralight pl-3 pr-3 border-[1px] border-white rounded-full text-xs p-2">
              Find a Job
            </button>
            <button className="font-extralight pl-3 pr-3 bg-[#CC5920] text-white rounded-full text-xs p-2">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Navbar;