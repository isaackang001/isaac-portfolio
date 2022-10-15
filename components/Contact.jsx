import React from "react";

import {
  MdLocationOn,
  MdOutlineEmail,
  MdSmartphone,
  MdOutlineCopyright,
} from "react-icons/md";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <footer
      className="bg-mirage flex flex-col justify-center items-center text-white pt-40 pb-20 md:px-10 lg:px-20 xl:px-40"
      id="contact"
    >
      {/* Logo with dividers */}
      <div className="w-[80%] flex justify-between items-center mb-10">
        <div className="w-[25%] h-0.5 bg-white md:max-w-[40%]"></div>
        <div className="grid gap-3 p-2.5 my-2.5 grid-cols-2 border-2 border-solid border-white text-bold rounded-lg justify-self-auto text-white md:w-[30%] lg:w-[25%]">
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
        <div className="w-[25%] h-0.5 bg-white md:max-w-[40%]"></div>
      </div>

      {/* Contact information */}
      <div className="w-full flex justify-evenly items-center flex-col md:flex-row">
        <div className="w-full flex justify-center">
          <MdLocationOn className="relative top-1 right-2" />
          <span className="decoration-black font-normal text-base mb-5">
            Riverside County
          </span>
        </div>
        <div className="w-full flex justify-center">
          <MdOutlineEmail className="relative top-1 right-2" />
          <span className="decoration-black font-normal text-base mb-5">
            isaac.kang001@gmail.com
          </span>
        </div>
        <div className="w-full flex justify-center">
          <MdSmartphone className="relative top-1 right-2" />
          <span className="decoration-black font-normal text-base mb-5">
            (661) 733-8447
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center w-[350px] my-5">
        <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <a
            href="https://github.com/isaackang001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center text-white"
          >
            <FaGithub />
          </a>
        </div>
        <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <a
            href="https://www.linkedin.com/in/isaac-kang-39a648230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="border-2 border-solid border-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <a
            href="https://www.instagram.com/isaac_kang_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright information */}
      <div className="w-full flex justify-center">
        <MdOutlineCopyright className="relative top-1 right-2" />
        <span className="decoration-black font-normal text-base mb-5">
          {" "}
          Isaac Kang 2022
        </span>
      </div>
    </footer>
  );
};

export default Contact;
