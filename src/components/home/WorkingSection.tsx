import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { TbPhotoScan, TbProgressCheck } from "react-icons/tb";
import { MdOutlineInsights } from "react-icons/md";
import Image from "next/image";

/*
lets make a object 
*/
export const features = [
  {
    icon: IoCreateOutline,
    title: "Create Your Profile",
    description:
      "Set your height, weight, age, and nutrition goals in just a few taps.",
    image: "/Profile.svg",
  },
  {
    icon: TbPhotoScan,
    title: "Snap or Scan",
    description:
      "Take a photo of your food or scan a barcode — our AI handles the rest.",
    image: "/scan.svg",
  },
  {
    icon: TbProgressCheck,
    title: "Track Daily Progress",
    description:
      "Log and visualize your meals, nutrient intake, and daily streaks with ease.",
    image: "/progress.png",
  },
  {
    icon: MdOutlineInsights,
    title: "Instant Nutrition Insights",
    description:
      "Automatically get calories, protein, carbs, and fats calculated for you.",
    image: "/insights.svg",
  },
];

const WorkingSection = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <h6 className="text-3xl mb-16">How it Works??</h6>
      <div className="flex w-3/4 mx-auto justify-center gap-8 items-end  flex-wrap ">
        {features.map(({ title, description, image, icon: Icon }) => (
          <div
            key={title}
            className="group flex flex-col items-center justify-center text-center hover:-translate-y-8 transition-all ease-in-out duration-300"
          >
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="w-40 h-40 object-contain group-hover:translate-y-3 -z-30 transition-all ease-in-out duration-300"
            />

            <div className="bg-white border border-neutral-200 w-full md:w-[300px] flex p-4  gap-4 rounded-2xl shadow-2xl shadow-neutral-200">
              <div className="bg-neutral-100 w-fit h-fit p-2 rounded-md ">
                <Icon
                  width={40}
                  height={40}
                  color="#717171"
                  className="w-6 h-6 flex "
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 leading-[115%]">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingSection;
