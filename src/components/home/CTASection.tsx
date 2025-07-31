import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";

const CTASection = () => {
  return (
    <div className="w-full my-16 h-full flex flex-col items-center justify-center">
      <h1 className="text-center md:text-5xl text-3xl  font-medium text-neutral-900 mt-2 mb-4">
        Start Tracking Smarter✨
      </h1>
      <p className="text-center md:text-lg text-sm  w-[80%] sm:w-[40%] mx-auto text-neutral-500">
        Mensura is currently in private beta. Join early and be among the first
        to experience effortless, AI-powered nutrition tracking.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center w-full md:w-[40%] px-10">
        <button className="bg-gradient-to-br from-zinc-900 to-zinc-700 border border-neutral-600  w-full sm:px-12 py-4 rounded-xl flex items-center justify-center gap-2 text-neutral-300 font-normal cursor-pointer shadow-2xl shadow-[#d8d8d8]">
          Get Early Access
          <IoRocketOutline className="w-5 h-5" />
        </button>
        <button className="bg-gradient-to-b from-white to-[#EEEEEE] w-full  sm:px-12 py-4 rounded-xl flex items-center justify-center gap-2 border border-neutral-200/80 p !text-neutral-800 font-normal cursor-pointer shadow-2xl shadow-[#d8d8d8]">
          Join Beta Program
        </button>
      </div>
      <p className="text-neutral-400 text-sm mt-8">
        No spam. Just clean tracking, your way.
      </p>
    </div>
  );
};

export default CTASection;
