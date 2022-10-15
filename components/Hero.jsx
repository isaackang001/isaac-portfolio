import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-hero-bg bg-cover bg-no-repeat bg-center w-full h-60 z-[99] md:h-80 lg:h-90 xl:h-screen"
      id="home"
    >
      <div className="flex justify-center items-center flex-col h-60 md:h-80 lg:h-90 xl:h-screen">
        <h1 className="text-white font-black mb-10 text-7xl md:text-8xl md:mb-15 lg:text-9xl lg:mb-20">
          Isaac Kang
        </h1>
        <p className="text-white font-normal mb-10 text-xl md:text-2xl md:mb-15 lg:text-3xl lg:mb-20">
          I&apos;m a Software Engineer
        </p>
        <div className="flex justify-between items-center w-[250px] md:w-[300px] lg:w-[350px]">
          <div className="shadow-xl rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#d95252] text-white p-3 text-sm md:p-4 md:text-lg lg:p-5">
            <a href="#">About Me</a>
          </div>
          <div>
            <button className="shadow-xl rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#d95252] text-white p-3 text-sm md:p-4 md:text-lg lg:p-5">
              <a href="../assets/Resume.pdf" download="Resume.pdf">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
