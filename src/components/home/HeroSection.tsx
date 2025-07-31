import Image from "next/image";
import React from "react";
import { Button } from "../ui";
import { IoRocketOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center md:mt-16 justify-center bg-cover bg-center min-h-screen relative">
      <Image
        src="/circle-dash.svg"
        alt="hero-bg"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="flex flex-col items-center justify-center mt-16 px-4">
        <Image
          src="/Logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] mb-8 absolute top-30  md:top-0 left-1/2 -translate-x-1/2"
        />
        <Image
          alt="hero-img"
          src={"/Hero-img.png"}
          width={500}
          height={500}
          className="mt-20 sm:mt-0 w-[80%] sm:w-[60%] md:w-[80%] lg:w-[100%] h-auto object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-center md:text-5xl text-3xl  font-medium text-neutral-900 mt-2 mb-4">
          Effortless Calorie Tracking, Powered by AI✨
        </h1>
        <p className="text-center md:text-lg text-sm  w-[80%] sm:w-[40%] mx-auto text-neutral-500">
          Mensura helps you log meals with just a photo or barcode scan — no
          manual entry, no guesswork. Built for real life.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center w-full md:w-[40%] px-10">
          <button className="bg-gradient-to-br from-zinc-900 to-zinc-700 border border-neutral-600  w-full sm:px-12 py-4 rounded-xl flex items-center justify-center gap-2 text-neutral-300 font-normal cursor-pointer shadow-2xl shadow-[#d8d8d8]">
            Get Early Access
            <IoRocketOutline className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-b from-white to-[#EEEEEE] w-full  sm:px-12 py-4 rounded-xl flex items-center justify-center gap-2 border border-neutral-200/80 p !text-neutral-800 font-normal cursor-pointer shadow-2xl shadow-[#d8d8d8]">
            <LuVideo className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex gap-1 items-center mt-16 px-8">
        <Image src={"/tool box.png"} alt="toolbox" width={100} height={100} />
        <p className="text-neutral-500">
          Built with cutting-edge food recognition & privacy-first architecture.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
