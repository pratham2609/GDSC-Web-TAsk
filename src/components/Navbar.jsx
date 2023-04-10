import React, { useEffect, useRef } from 'react'
import "./Components.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx"
export default function Navbar({isOpen, setIsOpen}) {
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  useEffect(() => {
    const nav = document.getElementById("nav");
    const navHeight = nav.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");        
      }
    });
  }, []); 
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const uref = useRef(null);
  useOutsideAlerter(uref);
  return (
    <nav>
      <div id='nav' className="max-w-[100vw] z-40 transition-all duration-300 pr-5 md:px-[6%] py-1 lg:py-3 w-full flex justify-between bg-white items-center rounded-xl shadow-3xl">
        <div className="xl:w-1/2 flex justify-between gap-1 lg:gap-2 items-center">
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
          <div className="flex justify-between items-center gap-3 lg:gap-[2rem]">
            <a href='/' className=" text-[0.7rem] xl:text-base hidden md:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">How it Works</a>
            <a href='/' className="text-[0.7rem] xl:text-base hidden md:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">Our Work</a>
            <a href='/' className="text-[0.7rem] xl:text-base hidden md:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">Pricing</a>
            <a href='/' className="text-[0.7rem] xl:text-base hidden md:block font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">About</a>
          </div>
        </div>
        <button onClick={toggle}><GiHamburgerMenu className={`${isOpen ? "hidden" : "block"} block md:hidden`} /></button>
        <button className="bg-blueC hidden md:block text-white py-2 px-3 lg:py-[0.7rem] lg:px-[1rem] rounded-[4rem] text-[0.8rem] lg:text-sm xl:text-base font-gen font-medium shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.08] border-none">Try It Now</button>


      </div>
      <div ref={uref} id='nav' className={`${isOpen ? "flex" : "hidden"} py-10 px-4 gap-3 fixed w-2/3  bg-white z-50 transition-all duration-300 ease-linear flex-col flex items-start top-0 left-0 h-screen`}>
        <button onClick={toggle}><RxCross2 className={`${isOpen ? "block" : "hidden"} block md:hidden`} /></button>
        <a href='/' onClick={toggle} onBlur={hide} onFocus={show} className=" text-sm xl:text-base font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">How it Works</a>
        <a href='/' onClick={toggle} onBlur={hide} onFocus={show} className="text-sm xl:text-base font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">Our Work</a>
        <a href='/' onClick={toggle} onBlur={hide} onFocus={show} className="text-sm xl:text-base font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">Pricing</a>
        <a href='/' onClick={toggle} onBlur={hide} onFocus={show} className="text-sm xl:text-base font-medium font-gen transition-all duration-300 ease-in-out hover:text-blueC hover:scale-[1.1]">About</a>
        <button onClick={toggle} onBlur={hide} onFocus={show} className="bg-blueC text-white py-2 px-3 lg:py-[0.7rem] lg:px-[1rem] rounded-[4rem] text-[0.8rem] lg:text-sm xl:text-base font-gen font-medium shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.08] border-none">Try It Now</button>

      </div>
    </nav >
  )
}
