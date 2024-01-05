import { IoPersonCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Menu</a>
              <ul className="p-2">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Details</a>
                </li>
                <li>
                  <a>Category</a>
                </li>
                <li>
                  <a>My Favorites</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Log In/Sign Up</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">pti.</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-3">
        {/* search */}
        <div className="relative shadow rounded-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <FaSearch className="text-orange-400" />
          </span>
          <input
            type="text"
            placeholder="     Search Audiobook"
            className="input w-96"
          />
        </div>
        <div className="dropdown max-w-lg">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white font-bold w-32 border-none shadow m-1"
          >
            MENU
            <span className="ml-6 text-orange-400">
              <FaAngleDown className="text-xl" />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
      <div className="navbar-end">
        <IoPersonCircleOutline className="text-3xl text-orange-500" />
      </div>
    </div>
  );
};

export default Navbar;
