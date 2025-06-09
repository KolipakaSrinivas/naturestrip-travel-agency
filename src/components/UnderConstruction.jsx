import React from "react";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-12">
      <svg
        className="w-24 h-24 text-yellow-400 mb-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 48 48"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24 4v6M24 38v6M4 24h6M38 24h6M10.93 10.93l4.24 4.24M32.83 32.83l4.24 4.24M10.93 37.07l4.24-4.24M32.83 15.17l4.24-4.24"
        />
        <circle
          cx="24"
          cy="24"
          r="10"
          stroke="currentColor"
          strokeWidth={3}
          fill="none"
        />
        <rect
          x="18"
          y="22"
          width="12"
          height="6"
          rx="3"
          fill="currentColor"
          className="animate-pulse"
        />
      </svg>
      <h1 className="text-3xl font-bold text-yellow-700 mb-2">Under Construction</h1>
      <p className="text-lg text-yellow-800 text-center max-w-md">
        We’re working hard to bring you something awesome! Please check back soon.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md font-semibold shadow  transition"
      >
        Return to Home
      </Link>
    </div>
  );
}