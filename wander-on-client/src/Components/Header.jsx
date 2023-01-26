import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/wanderon-logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 flex items-center justify-between p-2 text-white w-full -mb-[72px] z-50 ${
        isScrolled
          ? "transition duration-500 bg-[#151515] text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="block">
        <Link to="/">
          <img src={Logo} className="w-16" alt="" />
        </Link>
      </div>
      <div className="">
        <a to="#" className=" flex items-center">
          <BsFillTelephoneFill className="mr-4" />
          +91-9870301533
        </a>
      </div>
      {/* menu that is visible on desktop view */}
      <div className="hidden lg:flex">
        <a
          href="/early-bird-sale"
          className="block lg:inline-block p-2 text-white  uppercase mr-4"
        >
          Early Bird Sale 2023
        </a>
        <a
          href="/blogs"
          className="block lg:inline-block p-2 text-white  uppercase mr-4"
        >
          Blogs
        </a>
        <a
          href="about-us"
          className="block lg:inline-block p-2 text-white  uppercase"
        >
          About Us
        </a>
      </div>

      {/* hamburger menu  */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
        <div className="hidden">
          <Link
            href="#"
            className="block lg:inline-block p-2 text-white  uppercase mr-4"
          >
            Early Bird Sale 2023
          </Link>
          <Link
            to="/blogs"
            className="block lg:inline-block p-2 text-white  uppercase mr-4"
          >
            Blogs
          </Link>
          <Link
            href="#"
            className="block lg:inline-block p-2 text-white  uppercase"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* bug here  */}

      {isOpen && (
        <div className="bg-gray-800 text-white w-64 p-4 absolute right-0 top-0 hidden lg:block">
          <Link
            href="#"
            className="block p-2 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Early Bird Sale 2023
          </Link>
          <Link
            to="/blogs"
            className="block p-2 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="#"
            className="block p-2 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
