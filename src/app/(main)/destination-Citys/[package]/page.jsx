import indianCities from "@/app/indianCities";
import CarouselTwo from "@/components/CarouselTwo";
import Packages from "@/app/Packages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return indianCities.map(pkg => ({
    package: encodeURIComponent(pkg.title.toLowerCase())
  }));
}

function ONE() {
  return (
    <div className="grow pb-8 group-last:pb-0 font-[Poppins]">
      <h3 className="mb-1 text-sm font-bold text-blue-500 uppercase ">Day 1</h3>
      <p className="font-semibold text-sm text-gray-800 ">Delhi to Nainital</p>
      <p className="mt-1 text-sm text-gray-900 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, architecto
        aspernatur! Consectetur!
      </p>
      <ul className="list-disc ms-6 mt-3 space-y-1.5">
        <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
          Pickup from Delhi Airport
        </li>
        <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
          Railway Station and depart for Nainital.
        </li>
        <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
          Evening enjoy Mall road.
        </li>
        <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
          Overnight stay at Hotel.
        </li>
      </ul>
    </div>
  );
}

export default function IndividualCytePackage({ params }) {
  const packageTitle = decodeURIComponent(params.package).toLowerCase();

  const data = indianCities.find(
    pkg => pkg.title.toLowerCase() === packageTitle
  );

  if (!data) {
    // Show 404 page if package not found
    notFound();
  }

  return (
    <div className="w-full pt-5">
      {/* FIRST-DEV */}
      <div className="h-full md:h-[80vh] flex flex-col md:flex-row w-full gap-5">
        {/* Image */}
        <div className="w-full h-[50vh] md:h-[80vh] md:w-1/2 order-1 md:order-0">
          <img
            src={data.imgURl}
            className="size-full object-cover rounded-3xl"
            alt={data.title}
          />
        </div>
        {/* Heading and Text */}
        <div className="w-full h-[50vh] md:h-fit justify-between md:w-1/2 flex flex-col gap-2 ">
          <h2 className="text-3xl font-bold text-purple-800 font-[Poppins]">
            {data.title}
          </h2>
          <p
            className="text-orange-500 font-bold"
            style={{ fontFamily: "DM Sans" }}
          >
            {data.duration}
          </p>
          <p className="text-gray-700" style={{ fontFamily: "Montserrat" }}>
            {data.description}
          </p>

          <div className="flex flex-col ">
            <h3
              className="text-xl font-bold text-orange-500 "
              style={{ fontFamily: "DM Sans" }}
            >
              Inclusions
            </h3>
            <div className="flex justify-between items-end">
              <div className="flex items-center flex-col">
                {/* Accommodation SVG */}
                <span>Accommodation</span>
              </div>
              <div className="flex items-center flex-col">
                {/* Meals SVG */}
                <span>Meals</span>
              </div>
              <div className="flex items-center flex-col">
                {/* Sightseeing SVG */}
                <span>Sightseeing</span>
              </div>
              <div className="flex items-center flex-col">
                {/* Transport SVG */}
                <span>Transport</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND-DEV */}
      <div className="second-dev flex flex-col md:flex-row w-full mt-[5rem] relative gap-5 ">
        {/* Full Text */}
        <div className="w-full md:w-2/3 p-6 border-[1px] border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 font-[Poppins]">
            Summary
          </h3>
          {/* Timeline */}
          <div>
            {/* Timeline items */}
            <div className="group relative flex gap-x-5">
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">
                  {/* Timeline Icon SVG */}
                </div>
              </div>
              <ONE />
            </div>
            {/* Repeat <ONE /> if you want */}
          </div>
        </div>

        {/* Sticky Enquiry Form */}
        <div className="w-full md:w-1/3 p-6 border-[1px] rounded-2xl border-gray-300">
          <div className="sticky top-20 bg-white p-4 space-x-10">
            <h4 className="text-xl text-center font-bold mb-2 font-[Poppins] uppercase">
              Fill Enquiry Form
            </h4>
            <form
              className="flex flex-col gap-5"
              style={{ fontFamily: "Noto Sans" }}
            >
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Phone No"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <div className="w-full">
                <h3>Departure Date</h3>
                <input
                  type="text"
                  placeholder="MM/DD/YY"
                  className="border p-2 rounded w-full mt-2"
                />
              </div>
              <textarea placeholder="Message" className="border p-2 rounded" />
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-blue-700"
                style={{ fontFamily: "DM Sans" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* THIRD-DEV */}
      <div className="third-dev w-full mt-10">
        <h3
          className="text-3xl font-semibold mb-4 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          Similar Packages
        </h3>
        <div className="overflow-x-auto flex gap-4 p-4">
          <CarouselTwo Packages={Packages} />
        </div>
      </div>
    </div>
  );
}
