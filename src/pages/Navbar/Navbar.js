import React, { useState } from "react";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const { user } = useContext(AuthContext);

  const toggleMode = () => {
    setDark(!dark);
  };

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
            Training <span className="text-teal-500 border-2 rounded p-1"> Online</span>  
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
              About
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact Us
              </Link>
            </li>
            
            <li>
              {user?.uid ? (
                <Link to="/profile">
                  <img
                    title={user?.displayName}
                    className="w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                </Link>
              ) : 
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-12 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Log in"
                  title="Log in"
                >
                  Log In
                </Link>
              }
            </li>
            <li>
              <Link
                to="/register"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Register
              </Link>
            </li>
            <li className="text-white  border-2 px-2 p-1 rounded-xl flex justify-center items-center">
              <button
                onClick={toggleMode}
                className={dark && "text-teal-500"}
              >
                <FaMoon></FaMoon>
              </button>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm absolute top-0 left-0 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          className="w-11 rounded-full"
                          src="https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png"
                          alt=""
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        TRAINING ONLINE
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="text-black border-2 w-14 mx-auto p-1  rounded-full flex justify-center items-center">
                        <button onClick={toggleMode} className="pr-2">
                          <FaSun className={dark || "text-orange-300"}></FaSun>
                        </button>
                        <button onClick={toggleMode}>
                          <FaMoon
                            className={dark && "text-orange-300"}
                          ></FaMoon>
                        </button>
                      </li>
                      <li>
                        {user?.uid ? (
                          <Link to="/profile">
                            <img
                              title={user?.displayName}
                              className="w-10 mx-auto rounded-full"
                              src={user?.photoURL}
                              alt=""
                              referrerPolicy="no-referrer"
                            />
                          </Link>
                        ) : (
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Log in"
                            title="Log in"
                          >
                            Log In
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
