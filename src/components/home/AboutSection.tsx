import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="sm:w-3/6 mx-auto flex flex-col items-center mt-20 sm:mt-40">
      <h6 className="text-3xl sm:text-7xl leading-[90%] text-center  ">
        Nutrition Tracking, <br />
        Reimagined
      </h6>
      <div className="w-full flex flex-wrap-reverse sm:flex-nowrap mt-8 gap-16  items-center">
        <p className="text-4xl px-4 text-neutral-700 leading-[98%]">
          At Mensura, we're on a mission to make nutrition tracking effortless,
          accurate, and stress-free — using AI and modern mobile design. No
          typing, no searching, just scan, snap, and go.
        </p>
        <Image
          src={"dashboard.svg"}
          alt="dashbaorad"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default AboutSection;
