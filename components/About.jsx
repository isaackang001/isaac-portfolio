import React from "react";
import Image from "next/image";

import profile from "../public/static/profile.png";

const About = () => {
  return (
    <section
      className="flex justify-evenly items-center relative flex-col w-full h-full bg-mirage py-16 px-12 md:py-16 md:px-24 lg:flex-row lg:py-40"
      id="about"
    >
      {/* About content */}
      <div className="flex-1 w-full flex justify-center items-start flex-col relative bg-blueGrey rounded-lg px-4 py-4 md:max-w-[80%] lg:max-w-[50%]">
        <h1 className="text-redish font-bold text-7xl">About Me</h1>
        <div className="w-[345px] h-2 bg-white my-5"></div>
        <p className="text-white font-normal text-base mb-5">
          Hi! I’m Isaac Kang and I’ve recently graduated from UC Riverside with
          a Bachelor’s in Computer Science.
        </p>
        <p className="text-white font-normal text-base mb-5">
          My fascination for technology stems from a woodshop class I took in
          middle school. Since the class was an elective provided by my school,
          I had no meaningful expectations. Astonishingly, the class set the
          foundation for the goals I have today. Being able to create a finished
          product from nothing but a block of wood both peaked my interests and
          fed my desire to learn. Much like woodshop, the ability to build
          remarkable things to solve real problems through coding is what fuels
          my passion for technology.
        </p>
      </div>

      {/* About Image */}
      <div className="flex-1 w-full flex justify-center items-start py-8 md:ml-8 max-w-[400px]">
        <div className="relative w-full h-fit">
          <Image
            src={profile}
            alt="Profile"
            width="250"
            height="250"
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
