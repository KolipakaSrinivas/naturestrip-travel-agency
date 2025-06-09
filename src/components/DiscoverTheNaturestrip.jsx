import React from "react";
import Link from "next/link";

export default function ParallaxComponent() {
  return (
    <div
      className="relative  lg:h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center "
      style={{
        backgroundImage:
          "url('/pexels-gabby-k-7412095.jpg')"
      }}
    >
      <div className="relative h-full z-10   flex  justify-center items-end w-full rounded-lg text-white gap-0 mx-auto">
        <div className="flex-1 hidden md:block"  />
        <div className="flex-1 flex  flex-col h-full justify-center items-center px-[2rem] py-[2rem] md:items-start gap-3 md:gap-5 ">
          <h1
            className="text-3xl py-2 px-2  text-center md:px-0 md:text-5xl font-extrabold "
            style={{ fontFamily: "DM Sans" }}
          >
            Discover the Naturestrip
          </h1>
          <p className="text-center md:text-start md:text-lg" style={{ fontFamily: "Noto Sans" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laboriosam beatae esse?
          </p>
          <Link
          href="/about-us"
            className="border-2 uppercase text-xs text-white px-5 md:px-10 py-3 cursor-pointer border-white font-light
    
    transition-all duration-300 ease-in-out
    hover:bg-blue-600 hover:border-transparent
    hover:scale-105 "
            style={{ fontFamily: "Noto Sans" }}
          >
            Discover
          </Link>
        </div>
      </div>
      {/* Optional: Add overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />
    </div>
  );
}
