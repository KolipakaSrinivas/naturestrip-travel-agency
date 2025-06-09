"use client";

import React from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

export default function Carousel({ Packages, url }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 15 }
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 }
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 }
      }
    },
    slides: { perView: 1, spacing: 15 }
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {Packages.map(Package =>
        <div
          key={Package.id}
          className={`keen-slider__slide number-slide${Package.id} relative rounded-2xl overflow-hidden h-64`} // <-- set a fixed height
        >
          <Link className="block h-full w-full relative" href="#">
            <img
              src={`${Package.imgURl}`}
              className="object-cover w-full h-full"
              alt=""
            />
            {/* Overlay: covers the entire slide, centers text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
              <h1 className="text-white text-2xl text-center px-5 font-[Montserrat]">
                {Package.title}
              </h1>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
