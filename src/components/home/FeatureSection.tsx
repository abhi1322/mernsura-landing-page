import Image from "next/image";

const FeatureSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center my-40">
      <div className="mx-auto px-8 lg:w-2/3 md:h-[75vh]  grid grid-cols-1 grid-flow-row  md:grid-cols-3 md:grid-rows-4 gap-4 ">
        <div className="flex items-center leading-[100%]">
          <p className="text-4xl font-semibold">
            Everything You Need. <br />
            Nothing You Don’t.
          </p>
        </div>
        <div className="md:row-span-2  rounded-2xl bg-gradient-to-br from-[#262626] to-[#242424] p-8">
          <h6 className="text-[44px] leading-12 text-[#C7C7C7] font-semibold">
            📥 One-Click Progress Report
          </h6>
          <p className="text-[#969696]  text-xl leading-6 mt-4">
            Instantly generate a beautifully organized summary of your daily,
            weekly, or monthly progress — with just one tap.
          </p>
        </div>
        <div className="relative overflow-hidden md:row-span-2 rounded-2xl bg-gradient-to-br from-[#262626] to-[#242424] p-8 min-h-[300px]">
          <h6 className="text-[44px] leading-12 text-[#C7C7C7] font-semibold">
            Smart <br /> Dashboard
          </h6>
          <p className="text-[#969696] text-xl w-1/2 leading-6 mt-4">
            Visualize your intake across days, weeks, and macros.
          </p>
          <Image
            className="absolute bottom-0 right-0"
            src={"/grid-dash.svg"}
            alt="dash-illustration"
            width={200}
            height={200}
          />
        </div>
        <div className="relative md:row-span-3 rounded-2xl bg-gradient-to-br from-[#262626] to-[#242424] p-8 overflow-hidden min-h-[550px]">
          <h6 className="text-[44px] leading-11 text-[#C7C7C7] font-semibold">
            🧠 AI-Powered Food Analysis
          </h6>
          <p className="text-[#969696] text-xl leading-6 mt-4">
            Smart image recognition estimates calorie & nutrient content.
          </p>
          <Image
            className="absolute -bottom-10 right-0"
            src={"/ai-food-screen-1.png"}
            alt="dash-illustration"
            width={200}
            height={200}
          />
          <Image
            className="absolute bottom-0 left-10"
            src={"/ai-food-screen-2.png"}
            alt="dash-illustration"
            width={200}
            height={200}
          />
        </div>
        <div className="relative overflow-hidden md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-3  rounded-2xl bg-gradient-to-br from-[#262626] to-[#242424] p-8 h-[520px] lg:h-auto ">
          <h6 className="text-[44px] leading-11 text-[#C7C7C7] font-semibold">
            Meal-Time <br /> Reminders
          </h6>
          <p className="text-[#969696]  text-xl leading-6 mt-4">
            Get notified to stay on <br />
            track with gentle nudges.
          </p>
          <Image
            src={"/Space-black.png"}
            height={550}
            width={550}
            alt="illustration"
            className="absolute bottom-0 right-0"
          />
          <Image
            src={"/notifications.svg"}
            height={250}
            width={250}
            alt="illustration"
            className="absolute right-28 bottom-5 lg:bottom-10 lg:right-54"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
