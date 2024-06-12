import React from "react";
import logo from "../LOGO_FC_2-RGB-350ppi-RASTER-WEB.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="ml-4">
        <img src={logo} className="w-[200px] h-[55px]"></img>
      </div>
      <ul className="flex flex-row justify-end space-x-4 mr-4">
        
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
