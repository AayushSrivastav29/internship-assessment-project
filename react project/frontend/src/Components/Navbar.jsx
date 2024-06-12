import React from "react";
import logo from "../LOGO_FC_2-RGB-350ppi-RASTER-WEB.png";

const Navbar = () => {
  return (
    
        <nav className="flex" >
          <ul className="flex justify-end ">
            <li>
            <img src={logo} className="w-[200px] h-[55px]"></img>
            </li>
            <li>
            <button>Window Cleaning</button>
            </li>
            <li>
            <button>Roof Cleaning</button>
            </li>
            <li>
            <button>Gutter Cleaning</button>
            </li>
          </ul>
        
        </nav>
    
  );
};

export default Navbar;
