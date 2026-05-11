// import React, { useState } from "react";
import logo from "../assets/homepage/EQUINIXLOGO/EQUINIXLOGO.png";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Feature", link: "#feature" },
  { name: "Why Choose Us", link: "#whychoose" },
];

  return (
    <header className="flex  items-center justify-between px-6 md:px-10 lg:px-16 bg-black text-white relative">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo}   className="w-[100px] md:w-[180px] h-auto cursor-pointer object-contain"  />
      </div>

      <button
  className="lg:hidden relative z-50 text-white text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
</button>

  <div
  className={`
    ${menuOpen ? "flex" : "hidden"}
    
    lg:flex
    flex-col lg:flex-row
    items-center
    gap-6 lg:gap-10

    absolute top-[100%] left-0
    lg:static

    w-full lg:w-auto

    bg-black lg:bg-transparent

    px-6 py-6 lg:p-0

    z-50
  `}
>

        {/* NAV LINKS */}
      <nav className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-sm items-center">

  {navItems.map((item, i) => (
    <div key={i} className="relative group cursor-pointer">

      <a
        href={item.link}
        className="text-gray-400 font-montserrat premium-heading transition"
      >
        {item.name}
      </a>

      <span className="absolute left-0 -bottom-2 w-0 h-[2px] transition-all duration-300 group-hover:w-full"></span>

    </div>
  ))}

</nav>

        {/* BUTTONS */}
      <div className="flex flex-col lg:flex-row gap-4 items-center">

  <button className="cyber-btn font-montserrat font-semibold">
  <span>
    <p>SIGN IN</p>
  </span>
</button>

  <button className="cyber-btn font-montserrat font-semibold">
    <span>
      <p>SIGN UP</p>
    </span>
  </button>

</div>

      </div>

    </header>
  );
};

export default Navbar;