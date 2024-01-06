import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  return (
    <div class="h-full">
      <div>
        <h1 class="text-6xl w-full border-t-2 pt-8">Work</h1>
        <div class="pt-24">
          <img class="rounded-xl w-full" src={project1} alt="project1" />
          <div className="flex flex-row pt-4">
            <h1 class="mr-2 text-4xl">Pleo</h1>
            <span class="flex items-center text-2xl">
              <FaArrowRightLong />
            </span>
          </div>
          <h2 class="text-2xl">Onboarding employees in-app</h2>
        </div>
        <div class="flex flex-row justify-between py-10 w-full">
          <div class="w-1/2">
            <img class="rounded-xl" src={project2} alt="project2" />
            <div className="flex flex-row pt-4">
              <h1 class="mr-2 text-4xl">Kernel</h1>
              <span class="flex items-center text-2xl">
                <FaArrowRightLong />
              </span>
            </div>
            <h2 class="text-2xl">Marketing site design and build</h2>
          </div>
          <div class="w-1/2">
            <img class="rounded-xl" src={project3} alt="project2" />
            <div className="flex flex-row pt-4">
              <h1 class="mr-2 text-4xl">Freelance Things</h1>
              <span class="flex items-center text-2xl">
                <FaArrowRightLong />
              </span>
            </div>
            <h2 class="text-2xl">Weekly things for freelancers</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
