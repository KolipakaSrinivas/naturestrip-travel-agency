"use client";
import { useState } from "react";
import Card from "@/components/Card";
import AccordionSuppoertComp from "@/components/AccordionSuppoertComp";
import SpringModal from "@/components/SpringModal";

import indianCities from "@/app/indianCities";

export default function PilgrimageTourPackages() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full flex flex-col items-center   ">
      {/* First Section */}
      <div className="max-w-3xl w-full mt-5 mb-2 text-center">
        <h2
          className="text-2xl md:text-4xl font-bold mb-2"
          style={{ fontFamily: "Poppins" }}
        >
          Discover Citys
        </h2>
        <p
          className="text-gray-600 text-sm  mb-4"
          style={{ fontFamily: "Noto Sans" }}
        >
          Our carefully crafted destination-Citys packages cater to your spiritual
          journey — whether you're seeking peace, devotion, or a deeper
          connection with sacred traditions.
        </p>
      </div>

      {/* Second Section */}
      {/* Responsive: lg:flex-row-reverse puts filters left, cards right, but on mobile column (filters above cards) */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row-reverse w-full max-w-6xl gap-4 mb-[5rem]">
        {/* Cards */}
        <div className="flex-1 order-1 lg:order-0 lg:border-[1px] border-gray-300 rounded-2xl py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-content-center place-items-center">
            {/* Example Cards */}
            {indianCities.length > 1 &&
              indianCities.map((Package, i) =>
                <Card
                  Package={Package}
                  openModal={() => setIsModalOpen(true)}
                  key={i}
                />
              )}
          </div>
          <AccordionSuppoertComp />
        </div>

        {/* Filters/Buttons (sticky on large screens) */}
        <div className="max-w-2/2 lg:w-64">
          <div className="rounded-lg  p-4 mb-4 lg:mb-0 lg:sticky lg:top-8 z-20 lg:border-[1px] border-gray-300">
            <h4 className="font-semibold text-lg mb-3">Filters</h4>
            {/* Example Filter */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Search</label>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
      </div>
      <SpringModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
