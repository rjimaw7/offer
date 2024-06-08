"use client";

import React from "react";
import Image from "next/image";

const Overlay = () => {
  return (
    <>
      <Image
        src="/eclipse-blue.png"
        width={500}
        height={500}
        alt="eclipseblue"
        className="absolute top-0 left-0 w-3/4"
      />
      <Image
        src="/eclipse-gray.png"
        width={500}
        height={500}
        alt="eclipsegray"
        className="absolute bottom-0 right-0 w-1/2"
      />
    </>
  );
};

export default Overlay;
