import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full flex justify-between pt-8 px-16 items-center">
      {/* navbar links */}
      <div className="hidden lg:flex justify-between">
        <ul className="flex justify-between gap-x-3">
          <li className="cursor-pointer hover:border-[#E38C20] hover:border-b-2 ">
            About
          </li>
          <li className="cursor-pointer hover:border-[#E38C20] hover:border-b-2 ">
            Speakers
          </li>
          <li className="cursor-pointer hover:border-[#E38C20] hover:border-b-2 ">
            Agenda
          </li>
          <li className="cursor-pointer hover:border-[#E38C20] hover:border-b-2 ">
            Informations
          </li>
        </ul>
      </div>
      {/* navbar buttons */}
      <div className="flex fixed lg:relative">
        <button className="mr-2 hover:bg-gray-200">Visit Site</button>
        <button className="bg-[#E38C20] text-white flex items-center gap-x-[10px] hover:bg-[#eab87a] group">
          Register for Expo <BsChevronRight size={15} />
        </button>
      </div>
      {/* mobile menu */}
      <div onClick={handelNav} className="z-30 lg:hidden right-3 fixed">
        {!nav ? (
          <HiMenuAlt3 className="z-20 cursor-pointer" size={25} />
        ) : (
          <AiOutlineClose
            className="z-20 text-white cursor-pointer"
            size={25}
          />
        )}
      </div>
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10 "
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8 cursor-pointer" id="about">
            About
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer" id="speakers">
            Speakers
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer" id="agenda">
            Agenda
          </li>
          <li
            className="font-bold text-3xl p-8 cursor-pointer"
            id="information"
          >
            Information
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
