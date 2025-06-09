"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [overHero, setOverHero] = useState(true);
  const [pathname, setPathname] = useState("");
  // Set this to match your hero section's height (in px)
  const heroHeight = 600;

  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPathname(currentPath);

    if (currentPath !== "/") {
      setTextColor("black");
    }
  }, []);

  useEffect(
    () => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // Hide/show navbar on scroll direction
        if (currentScrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollY(currentScrollY);

        // Set overHero based on scroll position
        if (currentScrollY < heroHeight - 20) {
          setOverHero(true);
        } else {
          setOverHero(false);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [lastScrollY, heroHeight]
  );


  return (
    <header
      className={` w-full fixed z-10 left-0 top-0 transition-all duration-300 ${showNav
        ? "translate-y-0"
        : "-translate-y-full"} flex flex-wrap md:justify-start md:flex-nowrap
        ${overHero
          ? `bg-transparent backdrop-blur-xs`
          : "bg-slate-50 backdrop-blur-none shadow"} flex flex-wrap  md:justify-start md:flex-nowrap z-20 w-full bg-gray-600`}
    >
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-3 px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center gap-x-1">
          <Link
            className="flex-none font-semibold  focus:outline-hidden focus:opacity-80 text-2xl text-green-500"
            href="/"
            style={{ fontFamily: "Poppins" }}
          >
            Naturestrip
          </Link>
          <button
            className="ml-auto mr-1 py-1 px-3 bg-blue-500 md:hidden"
            style={{ fontFamily: "DM Sans" }}
          >
            Contact Us
          </button>

          {/* Collapse Button */}
          <button
            type="button"
              onClick={() => setNavOpen((open) => !open)}
            className=" md:hidden bg-white cursor-pointer relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
          >
            <svg
              className=" size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block shrink-0 hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
          {/* End Collapse Button */}
        </div>

        {/* Collapse */}
        <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block ">
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
            <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-3">
                  <Link
                    className={`p-2 font-[DM-Sans] font-dm capitalize flex items-center text-[17px] rounded-lg focus:outline-hidden hover:text-gray-600 hover:underline ${textColor ===
                    "black"
                      ? "text-black"
                      : "text-white"}`}
                    href="/"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    Home
                  </Link>
                  {/* Mega Menu */}
                  <Link href="/pilgrimage-tour-packages">
                    <button
                      id="hs-header-base-mega-menu-medium"
                      style={{ fontFamily: "DM Sans" }}
                      type="button"
                      className={`text-[17px] w-full p-2 flex items-center text-sm cursor-pointer  focus:outline-hidden  hover:text-gray-600 hover:underline ${textColor ===
                      "black"
                        ? "text-black"
                        : "text-white"}`}
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Mega Menu"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      packages
                      <svg
                        className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </Link>
                  {/* End Mega Menu */}
                  <Link
                    className={`p-2 font-[DM-Sans] font-dm capitalize flex items-center text-[17px] rounded-lg focus:outline-hidden focus:text-gray-500 hover:text-gray-600 hover:underline ${textColor ===
                    "black"
                      ? "text-black"
                      : "text-white"}`}
                    href="about-us"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    About
                  </Link>
                  <Link
                    className={`p-2 font-[DM-Sans] font-dm capitalize flex items-center text-[17px] rounded-lg focus:outline-hidden hover:text-gray-600 hover:underline ${textColor ===
                    "black"
                      ? "text-black"
                      : "text-white"}`}
                    style={{ fontFamily: "DM Sans" }}
                    href="/services"
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    services
                  </Link>
                </div>
              </div>
              {/* Button Group */}
              <div className="ml-10 flex flex-wrap items-center gap-x-1.5">
                <Link
                  href={"/contact-us"}
                  className="bg-blue-600 font-light px-5 py-2 mt-1  uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_transparent] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  style={{ fontFamily: "DM Sans" }}
                >
                  contact us
                </Link>
              </div>
              {/* End Button Group */}
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
}

export default Header;
