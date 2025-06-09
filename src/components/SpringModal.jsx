import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";

export default function SpringModal({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={e => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            {/* <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" /> */}
            <div className="relative z-10">
              <div className="sticky top-20   p-4 space-x-10  ">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}