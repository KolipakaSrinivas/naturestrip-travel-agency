import React, { useRef } from "react";

export default function Accordion({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);

  // Set maxHeight for smooth animation
  const getMaxHeight = () => {
    if (isOpen && contentRef.current) {
      return contentRef.current.scrollHeight + "px";
    }
    return "0px";
  };

  return (
    <div className="border-b border-[#0A071B]/10 last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
        aria-expanded={isOpen}
      >
        <span  className="font-[Poppins] text-xl font-light md:font-semibold  md:text-xl">{question}</span>
        <svg
          className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: getMaxHeight(),
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="px-5 pt-2 pb-5 text-sm lg:text-base text-[#343E3A] font-medium"
        style={{fontFamily:"Noto Sans"}}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}