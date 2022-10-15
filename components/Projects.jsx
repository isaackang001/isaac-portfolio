import React from "react";
import Image from "next/image";

import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <section
      className="bg-mirage flex flex-col justify-center items-center py-8 px-12 md:py-16 md:px-24"
      id="projects"
    >
      <div className="w-full border-2 border-solid border-white rounded-lg bg-blueGrey mb-0 py-16">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-redish font-bold text-7xl">Projects</h1>
          <div className="w-[270px] h-2 bg-white my-5"></div>
        </div>

        <div className="grid grid-cols-1 justify-items-center items-center gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Escape Room */}
          <div className="grid gap-4 grid-rows-work p-4 bg-mirage rounded-lg w-[250px] lg:w-[300px] xl:w-[350px]">
            <div className="flex justify-center items-center">
              <Image
                src="/../public/static/escape.png"
                alt="escape_room"
                width="250"
                height="250"
                className="rounded-lg"
              />
            </div>
            <div className="bg-blueGrey text-white rounded-sm flex justify-center items-center w-full pl-2">
              <p className="font-normal text-base">
                3D Virtual Reality Game with tasks, created utilizing Unity3D
              </p>
            </div>
            <div className="rounded cursor-pointer bg-redish h-[50px] flex justify-center items-center">
              <a
                href="https://github.com/bmcghee98/Figure-It-Out-VR-Escape-Room"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center text-white"
              >
                <SiGithub size={25} className="mr-2.5" />
                <span>Github</span>
              </a>
            </div>
          </div>

          {/* DTF */}
          <div className="grid gap-4 grid-rows-work p-4 bg-mirage rounded-lg w-[250px] lg:w-[300px] xl:w-[350px]">
            <div className="flex justify-center items-center">
              <Image
                src="/../public/static/DTF.png"
                alt="DTF"
                width="250"
                height="250"
              />
            </div>
            <div className="bg-blueGrey text-white rounded-sm flex justify-center items-center w-full pl-2">
              <p className="font-normal text-base">
                3D Space Exploration Game with 2D minigames created utilizing
                Unity.
              </p>
            </div>
            <div className="rounded cursor-pointer bg-redish h-[50px] flex justify-center items-center">
              <a
                href="https://github.com/Traitor-Jones/Disposable-Task-Force"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center text-white"
              >
                <SiGithub size={25} className="mr-2.5" />
                <span>Github</span>
              </a>
            </div>
          </div>

          {/* Geiricht */}
          <div className="grid gap-4 grid-rows-work p-4 bg-mirage rounded-lg w-[250px] lg:w-[300px] xl:w-[350px]">
            <div className="flex justify-center items-center">
              <Image
                src="/../public/static/restaurant.png"
                alt="restaurant"
                width="250"
                height="250"
              />
            </div>
            <div className="bg-blueGrey text-white rounded-sm flex justify-center items-center w-full pl-2">
              <p className="font-normal text-base">
                A Frontend Restaurant project utilized with React and reasuable
                components.
              </p>
            </div>
            <div className="rounded cursor-pointer bg-redish h-[50px] flex justify-center items-center">
              <a
                href="https://github.com/isaackang001/gerich-restaurant-site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center text-white"
              >
                <SiGithub size={25} className="mr-2.5" />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
