import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";

function TourPackages({ title, Packages, url }) {
  return (
    <div className="lg:h-[100vh] py-[5rem] flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5  justify-between">
        <div className="flex flex-col gap-5">
          <h1
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            {title}
          </h1>
          <p style={{ fontFamily: "Noto Sans" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, labore!
          </p>
        </div>
        <Link
          className="underline text-xl text-blue-700 hover:text-blue-400"
          href={`${url}`}
          style={{ fontFamily: "DM Sans" }}
        >
          Explore More
        </Link>
      </div>
      <div>
        <Carousel Packages={Packages} url={url} />
      </div>
    </div>
  );
}

export default TourPackages;
