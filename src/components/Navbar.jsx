import React, { useState } from "react";
import logo from "../assets/homepage/EQUINIXLOGO/EQUINIXLOGO.png";


const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);



  return (
    <header className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5 bg-black text-white relative">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="w-24 md:w-28 h-auto cursor-pointer" />
      </div>

      <button 
  className="lg:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

  <div className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-6 lg:px-0 py-6 lg:py-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"} lg:flex`}>

        {/* NAV LINKS */}
       <nav className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-sm items-center">

          <div className="relative group">
            <a className="text-red-500">Home</a>
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-red-500"></span>
          </div>

          {["About Us", "Feature", "Why Choose Us"].map((item, i) => (
            <div key={i} className="relative group cursor-pointer">
              <a className="text-gray-400 group-hover:text-white transition">
                {item}
              </a>

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

        </nav>

        {/* BUTTONS */}
        <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto items-center">
          <button className="btn-cut">SIGN IN</button>
          <button className="btn-cut">SIGN UP</button>
        </div>

      </div>

    </header>
  );
};

export default Navbar;