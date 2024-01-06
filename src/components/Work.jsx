import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  return (
    <div class="h-full mt-10">
      <div>
        <h1 class="text-6xl w-full border-t-2 pt-8">Work</h1>
        <div class="pt-24">
          <img class="rounded-xl w-full" src={project1} alt="project1" />
          <div className="flex flex-row pt-4">
            <h1 class="mr-2 text-4xl">Britmarksolution</h1>
            <span class="flex items-center text-2xl">
              <FaArrowRightLong />
            </span>
          </div>
          <h2 class="text-2xl pt-2">
            Digital Marketing and Web Development start-up
          </h2>
        </div>
        <div class="flex flex-row justify-between py-10 w-full">
          <div class="w-1/2">
            <img class="rounded-xl" src={project2} alt="project2" />
            <div className="flex flex-row pt-4">
              <h1 class="mr-2 text-4xl">Cambridge lead</h1>
              <span class="flex items-center text-2xl">
                <FaArrowRightLong />
              </span>
            </div>
            <h2 class="text-2xl pt-2">
              Immigration and international student consultency{" "}
            </h2>
          </div>
          <div class="w-1/2">
            <img class="rounded-xl" src={project3} alt="project2" />
            <div className="flex flex-row pt-4">
              <h1 class="mr-2 text-4xl">Olympia care</h1>
              <span class="flex items-center text-2xl">
                <FaArrowRightLong />
              </span>
            </div>
            <h2 class="text-2xl pt-2">
              International recruiting firm and social care home
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
