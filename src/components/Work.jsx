import React from "react";
import project1 from "../assets/project1.png";
import { MdArrowForward } from "react-icons/md";

const Work = () => {
  return (
    <div class="h-full">
      <div>
        <h1 class="text-6xl w-full border-t-2 pt-8">Work</h1>
        <div class="pt-24">
          <img class="rounded-xl" src={project1} alt="project1" />
          <div className="flex flex-row pt-4">
            <h1 class="mr-2 text-4xl">Pleo</h1>
            <span class="flex items-center text-4xl">
              <MdArrowForward />
            </span>
          </div>
          <h2 class="text-2xl">Onboarding employees in-app</h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
