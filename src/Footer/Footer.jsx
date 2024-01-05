import img from "../assets/img/Image2.png";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-orange-400 flex justify-between gap-2 p-10 items-center mt-0">
        <div className="space-y-6 lg:w-[800px] mx-auto">
          {/* search */}
          <div className="relative shadow rounded-md">
            <span className="absolute inset-y-0 right-0 pl-3 flex items-center p-3 py-5">
              <button className="lg:btn text-orange-500 font-semibold flex items-center justify-center gap-2 lg:bg-orange-600 lg:text-white px-6">
                Subscribe <FaArrowRightLong />
              </button>
            </span>
            <input
              type="text"
              placeholder="Enter your email         "
              className="input w-80 lg:w-full h-[60px]"
            />
           
          </div>
          <div className="lg:hidden flex items-center justify-center gap-5">
              <p className="bg-orange-600 text-white lg:bg-gray-200 rounded-full p-3 lg:text-orange-500">
                <FaGoogle />
              </p>
              <p className="bg-orange-600 text-white lg:bg-gray-200 rounded-full p-3 lg:text-orange-500">
                <FaTwitter />
              </p>
              <p className="bg-orange-600 text-white lg:bg-gray-200 rounded-full p-3 lg:text-orange-500">
                <FaInstagram />
              </p>
            </div>
          <p className="text-5xl text-black font-semibold text-center lg:text-start">
            pti<span className="font-bold text-orange-600">.</span>
          </p>
          <div className="block lg:flex justify-between items-center gap-10">
            <p className="font-semibold text-black text-center lg:text-start">
              Copyright©Tripp.All Right Reserved
            </p>
            <div className="hidden lg:flex items-center justify-center gap-5">
              <p className="bg-orange-600 text-white lg:bg-gray-200 rounded-full p-3 lg:text-orange-500">
                <FaGoogle />
              </p>
              <p className="bg-orange-600 text-white lg:bg-gray-200 rounded-full p-3 lg:text-orange-500">
                <FaTwitter />
              </p>
              <p className="bg-orange-600 text-white lg:bg-gray-200 rounded-full p-3 lg:text-orange-500">
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:mr-20">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
