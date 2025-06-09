import React from "react";
import Hero from "@/components/Hero";
import TourPackages from "@/components/TourPackages";
import DiscoverTheNaturestrip from "@/components/DiscoverTheNaturestrip";
import Packages from "@/app/Packages";
import indianCities from "@/app/indianCities";

function Home() {
  return (
    <section>
      <Hero />
      <div className="py-3 px-4 sm:px-6 lg:px-14 bg-white">
        <TourPackages
          title="Explore Travel Packages"
          Packages={Packages}
          url={"/pilgrimage-tour-packages"}
        />
        <DiscoverTheNaturestrip />
        <TourPackages
          title="Explore Travel Packages"
          Packages={indianCities}
          url={"/destination-Citys"}
        />
      </div>
    </section>
  );
}

export default Home;
