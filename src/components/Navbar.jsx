import React from 'react'
import "./Components.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <nav>
      <div className="max-w-[100vw] pr-5 md:px-[6%] py-1 lg:py-3 w-full flex justify-between items-center bg-white rounded-xl shadow-3xl">
        <div className="xl:w-1/2 flex lg:justify-between gap-3 items-center">
          <div className="flex items-center xl:scale-100 lg:scale-90 md:scale-75 scale-50 justify-start place-self-start">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9.5" cy="9.5" r="9.5" fill="#3461FF" />
            </svg>
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5192 9.63622C17.1807 10.0221 17.1807 10.9779 16.5192 11.3638L1.50387 20.1227C0.837211 20.5116 -8.75572e-07 20.0308 -8.41836e-07 19.259L-7.61032e-08 1.74104C-4.23671e-08 0.969246 0.837213 0.488374 1.50387 0.877257L9 5.25L16.5192 9.63622Z"
                fill="#3461FF"
              />
            </svg>
            <p className="text-[1.83rem] items-center font-helvetica font-bold">Embrace</p>
          </div>
          <div className="flex justify-between items-center gap-[2rem]">
            <a href='/' className=" text-sm xl:text-base hidden lg:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">How it Works</a>
            <a href='/' className="text-sm xl:text-base hidden lg:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">Our Work</a>
            <a href='/' className="text-sm xl:text-base hidden lg:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">Pricing</a>
            <a href='/' className="text-sm xl:text-base hidden lg:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">About</a>
          </div>
        </div>
        <div>
          <button className="bg-blueC hidden lg:block text-white py-[0.7rem] px-[1rem] rounded-[4rem] text-base font-gen font-medium shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.08] border-none">Try It Now</button>
        </div>
        <GiHamburgerMenu className='block lg:hidden' />
      </div>
    </nav>
  )
}
