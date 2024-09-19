import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Sagar.jpg";
import { useTypewriter } from "react-simple-typewriter"; // Use react-simple-typewriter

const Sagar = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Software Engineer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left side with text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-10">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Sagar Gopalasetti
            </h1>

            {/* Typed effect for different job titles */}
            <span className="bg-gradient-to-r from-purple-500 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
            {'_'}{text}
            </span>

            <p className="my-2 max-w-xl tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right side with profile picture */}
        <div className="w-full lg:w-1/3 lg:p-6 mx-20">
          <div className="flex justify-center">
            <img
              src={profilePic}
              className="rounded-lg"
              alt="Sagar Gopalasetti"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sagar;
