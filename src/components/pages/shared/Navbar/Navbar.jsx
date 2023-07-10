import React from "react";
import logo from "/top-logo.png";
import background from "/images/more/15.jpg"

const Navbar = () => {
  return (
    <>
      <div className="navbar justify-center relative p-0 ">
        <img src={background} alt=""  className="w-full h-24 "/>
        <div className="absolute">
          <img src={logo} alt="" />
          <a className="btn btn-ghost px-0 normal-case text-white text-2xl font-bold italic">
            Coffee House
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
