import React from "react";
import Image from "next/image";
import HeroLogo from "@/assets/herologo.png";

const HeroContent = () => {
  return (
    <div className="grid grid-cols-2 z-50 2xl:mx-72 justify-center items-center h-[calc(100vh-10vh)] pl-24 3xl:mx-96">
      <div className="">
        <div className="relative w-[420px] h-[550px]">
          <Image
            src={HeroLogo}
            fill
            alt="herologo"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 customTransform w-[520px] 2xl:w-full 3xl:w-[600px]">
        <div className="flex items-center justify-start">
          <h1 className="text-4xl herologo 2xl:scale-125 3xl:scale-150 text-white leading-snug">
            Turn Your Website Into Your Best Sales Person
          </h1>
        </div>
        <div className="pt-12 grid grid-cols-3 2xl:grid-cols-1">
          <div className="col-span-1 2xl:hidden"></div>
          <div className="col-span-2 2xl:col-span-1 flex flex-col gap-6 customTransformDesc">
            <p className="font-rubik text-[#F7F7FF] text-base 2xl:text-lg leading-relaxed font-light 2xl:w-full">
              Triple your sales with a pixel-perfect website. At SmartSite
              Studio, we don’t just design and write code, we build a
              revenue-driving machine for your business.
            </p>
            <div className="text-white flex items-center gap-4">
              <p className="border border-transparent rounded-full bg-[#FF632C] px-5 py-3 btntext cursor-pointer">
                Talk to Us
              </p>
              <p className="border border-[#0083FE] rounded-full bg-transparent px-5 py-3 btntext cursor-pointer hover:bg-[#FF632C] hover:border-[#FF632C]">
                See Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
