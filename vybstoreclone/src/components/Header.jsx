
import React from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";
import { MdHeadphones } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div
      className="flex flex-row container justify-between w-[1200px] fixed text-body1
        backdrop-blur-md
        h-20
        my-[12px]
        p-[20px] 
        gap-[60px]
        bg-secondary
        font-primarytxt
        rounded-[35px]
        items-center"
    >
      <div className="flex flex-row items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/Images/logo.svg"
            alt="YB Store Logo"
            className="h-12 w-auto"
          />
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search Creators"
            className="rounded-full border border-gray-300 h-10 font-primarytxt px-4"
            aria-label="Search Creators"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <Link to="/cart" className="flex items-center gap-2 cursor-pointer">
          <LuShoppingCart className="text-xl" />
          <span>Cart</span>
        </Link>
        
        <Link to="/about" className="flex items-center gap-2 cursor-pointer">
          <FcAbout className="text-xl" />
          <span>About</span>
        </Link>
      
        <Link to="/contact" className="flex items-center gap-2 cursor-pointer">
          <MdHeadphones className="text-xl" />
          <span>Contact</span>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="flex items-center rounded-xl bg-[#ffffff] px-8 py-2 border-2 border-[#a9a9a9] bg-white text-[#003c3c]">
            <IoIosContact className="text-xl mr-2" />
            <IoIosArrowDown className="text-xl ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
