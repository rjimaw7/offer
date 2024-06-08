import React from "react";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="grid grid-cols-2 z-50 2xl:mx-72 justify-center items-center h-[calc(100vh-10vh)] pl-24 3xl:mx-96">
      <div className="">
        <div className="relative w-[420px] h-[550px]">
          <Image src="/herologo.png" fill alt="herologo" />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className=" flex items-center justify-start -translate-x-40 2xl:-translate-x-72 3xl:-translate-x-96">
          <h1 className="text-2xl 2xl:text-4xl scale-125 herologo text-white leading-snug 3xl:w-[90%]">
            Turn Your Website Into Your Best Sales Person
          </h1>
        </div>
        <div className="-translate-x-2 2xl:-translate-x-24 flex flex-col gap-4 pt-12 3xl:-translate-x-48">
          <p className="font-rubik text-[#F7F7FF] text-base 2xl:text-lg leading-relaxed font-light">
            Triple your sales with a pixel-perfect website. At SmartSite Studio,
            we don’t just design and write code, we build a revenue-driving
            machine for your business.
          </p>
          <div className="text-white flex items-center gap-4">
            <p className="border border-transparent rounded-full bg-[#FF632C] px-5 py-3 2xl:px-10 2xl:py-3 btntext cursor-pointer">
              Talk to Us
            </p>
            <p className="border border-[#0083FE] rounded-full bg-transparent px-5 py-3 2xl:px-10 2xl:py-3 btntext cursor-pointer hover:bg-[#FF632C] hover:border-[#FF632C]">
              See Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
