import React from "react";
import profile from "../assets/profile.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div class="flex flex-col w-auto h-[100vh] py-36 bg-black text-white">
      <img class="w-48 h-24" src={profile} alt="profile" />
      <h1 class="text-9xl font-bold">
        Md Tusher <br /> Digital designer <br /> based in London
      </h1>
      <p class="text-4xl font-semibold pt-10 w-[70%]">
        I'm passionate about my work because I believe that good design can make
        a real difference in the world — It can help businesses attract new
        customers, build stronger relationships, and create a more positive
        brand image. I love the challenge of taking someone's vision and turning
        it into a reality.
      </p>
      <div class="flex flex-row justify-between pt-24">
        <div class="flex flex-row border-b-2">
          <h2 class="mr-16 text-xl">Get in touch </h2>
          <span class="flex items-center text-2xl">
            <MdOutlineArrowOutward />
          </span>
        </div>
        <div>
          <button class="border-2 px-2 py-1 rounded-3xl mx-2">Instagram</button>
          <button class="border-2 px-2 py-1 rounded-3xl mx-2">Twitter</button>
          <button class="border-2 px-2 py-1 rounded-3xl mx-2">LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
