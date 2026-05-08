import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/homepage/EQUINIXLOGO/EQUINIXLOGO.png";

const Footer = () => {
  const footerLinks = {
    "Quick Links": ["About Us", "Features", "Why Choose Us", "FAQ"],
    Community: ["Telegram", "Twitter (X)", "GitHub"],
    Contact: [
      "79 Robinson Road",
      "Singapore",
      "contact@equinixai.com",
      "www.EquinixAI.com",
    ],
  };

  return (
    <footer className="w-full bg-[#131313] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
          {/* LOGO + TEXT */}
          <div>
            {/* Put logo in public/assets/equinix-logo.png */}
            <img
              src={logo}
              alt="Equinix AI"
              className="w-[140px] sm:w-[160px] md:w-[180px] cursor-pointer object-contain mb-5 max-w-full"
            />

            <p className="text-[#909090] text-blur text-[13px] leading-6 font-montserrat max-w-full md:max-w-[220px]">
              Next-generation crypto infrastructure for a decentralized world
            </p>
          </div>

          {/* FOOTER LINKS */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-gradient-red cursor-pointer hover:opacity-80 font-mokoto uppercase text-[20px] tracking-wide  mb-6 ">
                {title}
              </h3>

              <ul className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="cursor-pointer text-[14px] font-montserrat w-fit relative"
                  >
                    <span className="relative group inline-block">
                      {/* NORMAL TEXT */}
                      <span className="text-gray-400 transition-opacity duration-500 group-hover:opacity-0">
                        {link}
                      </span>

                      {/* GRADIENT TEXT */}
                      <span
                        className="absolute left-0 top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r
        from-[#FF0404]  via-[#FF7878] to-[#CF0000] bg-clip-text text-transparent whitespace-nowrap "
                      >
                        {link}
                      </span>

                      {/* UNDERLINE */}
                      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="w-full h-[1px] bg-[#1a1a1a] mt-12 mb-6" />

        {/* COPYRIGHT */}
        <div className="text-center">
          <p className="text-gray-400 text-[16px] font-montserrat tracking-wide">
            © 2026 Equinix AI. All rights reserved. Built on enterprise-grade
            infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
