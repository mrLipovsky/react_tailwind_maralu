import { useState } from "react";

import { logo } from "../assets";
import { FaBeer, FaMap, FaPhoneAlt } from 'react-icons/fa';


import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[60px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden pr-6 flex flex-1 justify-end items-center">

        <button onClick={() => setToggle((prev) => !prev)}>    
          {toggle ? 
            <FaBeer className="w-[28px] h-[28px] text-white"/> 
            : 
            <FaMap className="w-[28px] h-[28px] text-white"/> 
          }
        </button>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 min-w-[140px] `}
        >
          <ul className="list-none flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-right font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
              
            ))}
            <a rel="stylesheet" href="" className={`font-poppins text-right font-medium cursor-pointer text-[16px] text-white ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                }`} > 
                <FaPhoneAlt className="w-[16px] text-white/> 
                +421 904 088 547 
            </a>
            <a rel="stylesheet" href=""> 
              <FaPhoneAlt className="w-[16px] text-white"/> 
              +421 905 380 345 
            </a>
          </ul>
          <div>
          
          </div>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;
