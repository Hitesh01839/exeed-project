import React from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const loggedIn = false;
  return (
    <div className="flex w-full justify-between items-center bg-nav-bg">
      <div className="h-16 bg-nav-bg flex justify-between px-20 items-center">
        <div className="logo font-bold flex gap-6 items-center">
          <h1 className="text-lg">
            CIPHER<span className="text-accent-color">SAFE</span>
          </h1>
          <div className="links font-extralight gap-6 flex items-center pt-1">
            <Link
              href="/"
              className="group text-main-text-color transition duration-300"
            >
              HOME
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent-color"></span>
            </Link>
            <Link
              href="/#about"
              className="group text-main-text-color transition duration-300"
            >
              ABOUT US
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent-color"></span>
            </Link>
          </div>
        </div>
      </div>
      {loggedIn ? (
        <>
          <Hamburger />
        </>
      ) : (
        <div className="register mr-10">
          <Link
            href="/register"
            className="bg-accent-color px-4 py-1 rounded-3xl"
          >
            REGISTER
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
