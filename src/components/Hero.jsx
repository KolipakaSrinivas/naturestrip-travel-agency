"use client";
// The "use client" directive tells Next.js this is a client component

import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

/**
 * Hero section component that fills the viewport and displays a carousel.
 */
function Hero() {
  return (
    <div className="w-full  h-[100vh]">
      {/* Full viewport width and height */}
      <Carousel />
    </div>
  );
}

export default Hero;

/**
 * Carousel component using Keen Slider with auto-scroll and navigation arrows.
 * Slides feature a fixed background image and centered moving text.
 */
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null); // Ref to manage auto-scroll interval

  // Initialize Keen Slider
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true, // Enable infinite looping
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Update current slide index
    },
    created() {
      setLoaded(true); // Mark carousel as loaded
    }
  });

  // Auto-scroll logic: move to next slide every 2.5s
  useEffect(() => {
    if (instanceRef.current) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        instanceRef.current.next();
      }, 5000); // auto-scroll every 5 seconds (slower)
    }
    // Cleanup interval on unmount
    return () => clearInterval(intervalRef.current);
  }, [instanceRef, loaded]);

  // Carousel slides data (add more slides as needed)
  const slides = [
    {
      image: "/pexels-nitindeshwal009-21524764.jpg",
      whichSlide: "one"
    },
    {
      image: "/pexels-shubham-1175058629-32451660.jpg",
      whichSlide: "two"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center rounded-4xl">
      {/* Keen Slider container */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center w-full justify-center relative"
          >
            {/* Background image, fixed for parallax effect */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
              aria-hidden="true"
            />
            {/* Content overlay */}
            <div className="relative z-10 flex items-center justify-center h-full w-full">
              {slide.whichSlide == "one" ? <TextOne /> : <TextTwo />}
            </div>
            {/* Optional: overlay for readability */}
            <div
              className="absolute inset-0 bg-black/40 z-0"
              aria-hidden="true"
            ></div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />
          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}

      {/* Slide indicators */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === idx ? "bg-gray-500" : "bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Arrow navigation button for the carousel.
 * @param {Object} props
 * @param {boolean} props.left - If true, renders the left (previous) arrow.
 * @param {function} props.onClick - Click handler for the arrow.
 * @param {boolean} [props.disabled] - If true, disables the arrow.
 */
function Arrow({ left, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`absolute cursor-pointer top-1/2 z-20 w-12 h-12 hover:bg-gray-200 bg-opacity-40 rounded-full flex items-center justify-center
        ${left ? "left-4 -translate-y-1/2" : "right-4 -translate-y-1/2"}
        ${disabled ? "opacity-30 pointer-events-none" : "opacity-80"}
      `}
      disabled={disabled}
      aria-label={left ? "Previous" : "Next"}
      type="button"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        {left ? (
          <path
            d="M15 19l-7-7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

function TextOne() {
  return (
    <div className="text-center pt-12 pb-28 px-6 ">
      <h2
        className="text-3xl text-white md:text-5xl font-bold mb-4"
        style={{ fontFamily: "Poppins" }}
      >
        Embark on a Spiritual Adventure
      </h2>
      <p
        className="text-white mb-6 max-w-2xl mx-auto"
        style={{ fontFamily: "DM Sans" }}
      >
        Explore our curated pilgrimage packages and sacred city destinations.
        Reconnect with peace and purpose.
      </p>
      <div className="flex items-center justify-center gap-10">
        <Link
        href="/about-us"
          className="border-2 uppercase text-white px-10 py-2 cursor-pointer border-white font-light
    
    transition-all duration-300 ease-in-out
    hover:bg-blue-600 hover:border-transparent
    hover:scale-105 "
          style={{ fontFamily: "Noto Sans" }}
        >
          About US
        </Link>
        <Link
        href="/services"
          className="
    
    px-10 py-2
    cursor-pointer
    bg-white
    border-blue-700
    relative
    text-gray-600
    font-light
    overflow-hidden
    transition-all duration-300
    hover:bg-blue-700
    hover:text-white
    hover:scale-105
    focus:outline-none
    "
          style={{ fontFamily: "Noto Sans" }}
        >
          Services
        </Link>
      </div>
    </div>
  );
}

function TextTwo() {
  return (
    <div className="text-center pt-12 pb-[10rem] px-6 ">
      <p
        className="text-white mb-6 max-w-2xl mx-auto font-bold"
        style={{ fontFamily: "DM Sans" }}
      >
        Tell us what you're looking for—we'll craft the perfect itinerary for
        you.
      </p>
      <h2
        className="text-3xl text-white md:text-5xl font-bold mb-4"
        style={{ fontFamily: "Poppins" }}
      >
        Need Help Choosing a Destination?
      </h2>

      <div className="flex items-center justify-center gap-10">
        <Link
        href="/pilgrimage-tour-packages"
          className="border-2 uppercase text-white px-10 py-2 cursor-pointer border-white font-light
    
    transition-all duration-300 ease-in-out
    hover:bg-blue-600 hover:border-transparent
    hover:scale-105 "
          style={{ fontFamily: "Noto Sans" }}
        >

          explore
        </Link>
      </div>
    </div>
  );
}
