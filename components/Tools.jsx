import React from "react";

import {
  SiGithub,
  SiAmazonaws,
  SiNpm,
  SiSlack,
  SiJirasoftware,
  SiVisualstudiocode,
} from "react-icons/si";

const Tools = () => {
  return (
    <section
      className="bg-mirage flex flex-col justify-center items-center py-8 px-12 md:py-16 md:px-24"
      id="tools"
    >
      {/* Might need to change this to the subheading */}
      <div className="w-full border-2 border-solid border-white rounded-lg bg-blueGrey mb-0 py-16 lg:max-w-[780px] xl:max-w-[1200px]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-redish font-bold text-7xl">Tools</h1>
          <div className="w-[175px] h-2 bg-white my-5"></div>
        </div>

        <div className="w-full flex items-center justify-center py-8 px-2">
          <div className="grid grid-cols-2 gap-20 md:grid-cols-3">
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
              <SiGithub
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className=""
              />
              <h2 className="py-3 text-white text-2xl">Github</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiAmazonaws
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="aws"
              />
              <h2 className="py-3 text-white text-2xl">AWS</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiNpm
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="npm"
              />
              <h2 className="py-3 text-white text-2xl">npm</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiSlack
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="slack"
              />
              <h2 className="py-3 text-white text-2xl">Slack</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiJirasoftware
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="jira"
              />
              <h2 className="py-3 text-white text-2xl">Jira</h2>
            </div>
            <div className="flex justify-center items-center flex-col border-2 border-solid border-white rounded-lg pt-2 max-w-[200px] bg-mirage">
              <SiVisualstudiocode
                size={75}
                style={{ fill: "url(#blue-gradient)" }}
                className="vscode"
              />
              <h2 className="py-3 text-white text-2xl">VSCode</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
