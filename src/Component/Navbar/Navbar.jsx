import { GoPerson } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-start">
      <a className="btn btn-ghost text-3xl font-bold">pti.</a>
    </div>
    <div className="navbar-center flex lg:gap-2">
      <div className="relative  shadow rounded-md">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaSearch className="text-orange-400" />
        </span>
        <input
          type="text"
          placeholder="     Search Audiobook"
          className="input w-44 lg:w-96"
        />
      </div>
      <div className="dropdown max-w-lg">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-white font-bold w-32 border-none shadow m-1"
        >
          MENU{" "}
          <span className="ml-6 text-orange-400">
            <FaAngleDown size={20} />
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 lg:w-52"
        >
          <li className="hover:text-orange-500 font-semibold">
            <a>Home</a>
          </li>
          <li className="hover:text-orange-500 font-semibold">
            <a>Details</a>
          </li>
          <li className="hover:text-orange-500 font-semibold">
            <a>Category</a>
          </li>
          <li className="hover:text-orange-500 font-semibold">
            <a>My Favorites</a>
          </li>
          <li className="hover:text-orange-500 font-semibold">
            <a>Profile</a>
          </li>
          <li className="hover:text-orange-500 font-semibold">
            <a>Log In/Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-end hidden lg:flex">
      <p className="bg-orange-600 rounded-full p-3 text-white text-xl font-bold">
        <GoPerson />
      </p>
    </div>
  </div>
  );
};

export default Navbar;
