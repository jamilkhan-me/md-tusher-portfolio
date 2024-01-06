import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Writing = () => {
  return (
    <div class="w-full h-full mt-20">
      <div class="flex flex-row gap-10">
        <div class="w-1/3">
          <hr class="mt-4" />
          <h1 class="text-6xl pt-8">Writing</h1>
        </div>
        <div class="w-2/3">
          <div>
            <h1 class="text-2xl mb-16">Recent blog posts</h1>
            <div class="mt-10">
              <h1 class="text-4xl py-4">
                Selling templates on Framer vs. Webflow
              </h1>
              <h2 class="text-xl pb-10">Jul 4, 2023 ˚ 5 min</h2>
              <hr />
            </div>
            <div class="mt-10">
              <h1 class="text-4xl py-4">
                5 common freelance challenges and how I think about them
              </h1>
              <h2 class="text-xl pb-10">Jul 4, 2023 ˚ 5 min</h2>
              <hr />
            </div>
            <div class="mt-10">
              <h1 class="text-4xl py-4">
                6 actionable steps to launch your portfolio
              </h1>
              <h2 class="text-xl pb-10">Jul 4, 2023 ˚ 5 min</h2>
              <hr />
            </div>
            <div class="mt-10">
              <h1 class="text-4xl py-4">5 freelance learnings of 2022</h1>
              <h2 class="text-xl pb-10">Jul 4, 2023 ˚ 5 min</h2>
              <hr />
            </div>
            <div class="mt-10">
              <h1 class="text-4xl py-4">Thoughts on Framer Sites</h1>
              <h2 class="text-xl pb-10">Jul 4, 2023 ˚ 5 min</h2>
              <hr />
            </div>
            <div class="flex flex-row my-12 cursor-pointer">
              <h1 class="text-2xl  pr-3">View all writing </h1>
              <span class="flex items-center text-2xl">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
