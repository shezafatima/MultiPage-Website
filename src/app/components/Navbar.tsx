"use client";
import { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav>
      <div className=" justify-between ">
        <div
          className="hidden w-full md:block md:w-auto  backdrop-blur-md bg-opacity-30 top-0 "
          id="navbar-default"
        >
          <div
            className={`hidden md:flex  justify-between items-center py-5  
             ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="flex justify-evenly items-start  space-x-10 text-white text-md ">
              <li>
                <Link href="/" className="block ml-8" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#About" className="block">About</Link>
              </li>
              <li>
                <Link href="/testimonial" className="block">Testimonial</Link>
              </li>
              <li>
                <Link href="/contact" className="block">Contact us</Link>
              </li>
            </ul>
            {/* <div className="text-white text-xl uppercase font-bold">Clay Global</div> */}
            <div className="mr-8 block">
              <button className="bg-white border text-black px-6 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-white">
                Sign up &#8594;
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <div className="sm:text-6xl text-4xl text-white sm:p-6 p-4">
                <MdCancelPresentation />
              </div>
            ) : (
              <div className="sm:text-6xl text-4xl text-white sm:p-6 p-4">
                <MdMenu />
              </div>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div>
            <Link href="/">Home</Link>
            <Link href="#About">About</Link>
            <Link href="#testimonial">Testimonial</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
