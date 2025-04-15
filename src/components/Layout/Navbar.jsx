/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Btn from "../UI/Buttons/Btn";
import DonationMain from "../../View/DonationPageView/DonationMain";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showDonationMain, setShowDonationMain] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDonationClick = () => {
    setShowDonationMain(true);
  };

  const navbarItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About Us", link: "/about" },
    { id: 3, text: "What We Do", link: "/What-we-do" },
    { id: 4, text: "Media", link: "/media" },
    { id: 5, text: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-[#FFFFFF]  border-b-[1px] border-[#00000066]">
      <div className="container">
        <div className="py-4 flex justify-between items-center">
          {/* Company Name */}
          <div className="font-Roboto text-[24px] text-[#000000] font-bold sm:text-[24px] md:text-[28px] lg:text-[28px]">
            largerthan
            <span className="font-Courgette font-normal text-[24px] sm:text-[24px] md:text-[28px] lg:text-[28px]">i</span>
          </div>

          {/* list items with map function */}
          <ul className="items-center gap-10 hidden lg:flex">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="text-[#525560] font-medium text-[20px] sm:text-[13px] md:text-[16px] lg:text-[16px]">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Btn onClick={handleDonationClick} to="/donations" className="bg-[#1D2130] text-[#FFFFFF] font-bold py-[10px] px-[24px] rounded text-[16px] sm:text-[12px] hidden  md:text-[16px] lg:flex lg:px-[20px] lg:py-[8px]">
            Donation
          </Btn>

          <div onClick={handleNav} className="block lg:hidden">
            {!nav ? <FaBars size={20} /> : <IoClose size={20} />}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={nav ? "fixed left-0 top-0 w-[40%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-[#1D2130]" : "fixed left-[-100%]"}>
        <div className="flex relative">
          <div className="font-Roboto text-[24px] text-orange-500 font-bold p-6 sm:text-[20px] md:text-[24px] lg:text-[26px]">
            largerthan
            <span className="font-Courgette font-normal text-[25px] sm:text-[24px] lg:text-[26px]">i</span>
          </div>
          <IoClose className="bg-white absolute right-5 top-8 md:right-6 md:top-10" onClick={() => setNav(!nav)} />
        </div>

        <ul className="uppercase p-6">
          {navbarItems.map((item) => (
            <li className="py-3 border-b border-b-white lg:flex" key={item.id}>
              <a href={item.link} className="font-medium text-[20px] text-orange-500 md:flex">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {showDonationMain && <DonationMain />}
    </nav>
  );
};

export default Navbar;
