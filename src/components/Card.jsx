function Card({ openModal, Package }) {

  return (
    <div className="flex flex-col w-[320px] h-full border-b-2 border-gray-500  shadow-2xs rounded-xl ">
      <div className=" flex flex-col justify-center items-center  ">
        <a
          href="#"
          className="group w-full  relative block bg-black  overflow-hidden rounded-t-2xl"
        >
          <img
            alt={`${Package.imgURl}`}
            src={`${Package.imgURl}`}
            className="absolute inset-0 h-full w-full  object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            {/* <p
              className="text-sm font-medium tracking-widest text-orange-800 uppercase "
              style={{ fontFamily: "DM Sans" }}
            >
              Developer
            </p> */}

            <p className="text-xl font-semibold text-white sm:text-2xl font-[Poppins]">
              {Package.title}
            </p>

            <div className="mt-[13rem] sm:mt-48 lg:mt-[10rem]">
              <p className="text-xl text-white" style={{ fontFamily: "DM Sans" }}>
                {Package.duration}
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-auto flex  border-gray-400   divide-x  ">
        <button
          type="button"
          className="w-full cursor-pointer font-[Poppins] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          
          onClick={openModal}
        >
          Get Quote
        </button>
        <a
          className="w-full font-[Poppins] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          href="#"
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default Card;
