import React from "react"
import { motion } from "framer-motion";
import logo from "../assets/homepage/EQUINIXLOGO/EQUINIXLOGO.png";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      "About Us",
      "Features",
      "Why Choose Us",
      "FAQ",
    ],
    Community: ["Telegram", "Twitter (X)", "GitHub"],
    Contact: [
      "79 Robinson Road",
      "Singapore",
      "contact@equinixai.com",
      "www.EquinixAI.com",
    ],
  }

  return (
    <footer className="w-full bg-[#131313] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-10 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-20">
          {/* LOGO + TEXT */}
          <div>
            {/* Put logo in public/assets/equinix-logo.png */}
            <img
              src={logo}
              alt="Equinix AI"
              className="w-[180px] cursor-pointer object-contain mb-5"
            />

            <p className="text-[#909090] text-blur text-[13px] leading-6 font-montserrat max-w-[220px]">
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
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer text-gray-400 hover:text-white text-[14px] font-montserrat w-fit relative"
                  >
                    <span className="relative group">
                      {link}

                      {/* Animated underline */}
                      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
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
  )
}

export default Footer