import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-mirage">
      <div className="flex justify-between items-center w-full h-full px-5 md:pl-10">
        {/* Logo */}
        <div className="grid gap-3 p-2.5 my-2.5 grid-cols-2 border-2 border-solid border-white text-bold rounded-lg justify-self-auto text-white max-w-[150px]">
          <div className="grid grid-cols-5">
            <span class="flex justify-center">I</span>
            <span class="flex justify-center">S</span>
            <span class="flex justify-center">A</span>
            <span class="flex justify-center">A</span>
            <span class="flex justify-center">C</span>
          </div>
          <div className="grid grid-cols-4">
            <span class="flex justify-center">K</span>
            <span class="flex justify-center">A</span>
            <span class="flex justify-center">N</span>
            <span class="flex justify-center">G</span>
          </div>
        </div>

        {/* List/Links/etc. */}
        <div>
          <ul className="hidden md:flex">
            <Link href="#home" scroll={false}>
              <li className="ml-10 text-sm text-white uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="#about" scroll={false}>
              <li className="ml-10 text-sm text-white uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="#skills" scroll={false}>
              <li className="ml-10 text-sm text-white uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="#tools" scroll={false}>
              <li className="ml-10 text-sm text-white uppercase hover:border-b">
                Tools
              </li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className="ml-10 text-sm text-white uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#contact" scroll={false}>
              <li className="ml-10 text-sm text-white uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          {/* HamburgerMenu Icon */}
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={50} />
          </div>
        </div>
      </div>

      {/* Hamburger Menu Display */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-mirage p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* Logo for mobile device hamburger menu */}
              <div className="grid gap-3 p-2.5 my-2.5 grid-cols-2 border-2 border-solid border-white text-bold rounded-lg justify-self-auto text-white max-w-[150px]">
                <div className="grid grid-cols-5">
                  <span class="flex justify-center">I</span>
                  <span class="flex justify-center">S</span>
                  <span class="flex justify-center">A</span>
                  <span class="flex justify-center">A</span>
                  <span class="flex justify-center">C</span>
                </div>
                <div className="grid grid-cols-4">
                  <span class="flex justify-center">K</span>
                  <span class="flex justify-center">A</span>
                  <span class="flex justify-center">N</span>
                  <span class="flex justify-center">G</span>
                </div>
              </div>

              {/* X/close button on hamburger menu */}
              <div
                className="border-2 border-solid border-white rounded-full shadow-lg p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose color="white" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-white font-normal text-base">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          {/* Hamburger Menu List */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#home" scroll={false}>
                <li className="py-4 text-sm text-white">Home</li>
              </Link>
              <Link href="#about" scroll={false}>
                <li className="py-4 text-sm text-white">About</li>
              </Link>
              <Link href="#skills" scroll={false}>
                <li className="py-4 text-sm text-white">Skills</li>
              </Link>
              <Link href="#tools" scroll={false}>
                <li className="py-4 text-sm text-white">Tools</li>
              </Link>
              <Link href="#projects" scroll={false}>
                <li className="py-4 text-sm text-white">Projects</li>
              </Link>
              <Link href="#contact" scroll={false}>
                <li className="py-4 text-sm text-white">Contact</li>
              </Link>
            </ul>

            {/* Connect Icons */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] flex justify-center text-center">
                Let&apos;s connect
              </p>
              {/* Social Link Icons */}
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin className="text-white" />
                </div>
                <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub className="text-white" />
                </div>
                <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail className="text-white" />
                </div>
                <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
