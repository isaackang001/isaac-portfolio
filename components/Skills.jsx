import React from "react";

import {
  SiCplusplus,
  SiCsharp,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      className="bg-mirage flex flex-col justify-center items-center py-8 px-12 md:py-16 md:px-24"
      id="skills"
    >
      {/* Might need to change this to the subheading */}
      <div className="w-full border-2 border-solid border-white rounded-lg bg-blueGrey mb-0 py-16 lg:max-w-[780px] xl:max-w-[1200px]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-redish font-bold text-7xl">Skills</h1>
          <div className="w-[175px] h-2 bg-white my-5"></div>
        </div>

        <div className="w-full flex justify-center items-center px-2 py-8">
          <div className="grid grid-cols-2 gap-20 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <svg width="0" height="0">
                <linearGradient
                  id="blue-gradient"
                  x1="60%"
                  y1="60%"
                  x2="0%"
                  y2="30%"
                >
                  <stop stopColor="#4158D0" offset="0%" />
                  <stop stopColor="#C850C0" offset="50%" />
                  <stop stopColor="#FFCC70" offset="100%" />
                </linearGradient>
              </svg>
              <SiCplusplus
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className=""
              />
              <h2 className="py-3 text-white text-2xl">C++</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiCsharp
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="csharp"
              />
              <h2 className="py-3 text-white  text-2xl">C#</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiReact
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="react"
              />
              <h2 className="py-3 text-white  text-2xl">React.js</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiJavascript
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="js"
              />
              <h2 className="py-3 text-white  text-2xl">JavaScript</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiHtml5
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="html"
              />
              <h2 className="py-3 text-white  text-2xl">HTML</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiCss3
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="css"
              />
              <h2 className="py-3 text-white  text-2xl">CSS</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiSass
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="sass"
              />
              <h2 className="py-3 text-white  text-2xl">SASS</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiBootstrap
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="bootstrap"
              />
              <h2 className="py-3 text-white  text-2xl">Bootstrap</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
