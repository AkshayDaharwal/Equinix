// import React from "react";
// import { motion } from "framer-motion";
// import logo from "../assets/homepage/EQUINIXLOGO/EQUINIXLOGO.png";

// const Footer = () => {
//   const footerLinks = {
//     "Quick Links": ["About Us", "Features", "Why Choose Us", "FAQ"],
//     Community: ["Telegram", "Twitter (X)", "GitHub"],
//     Contact: [
//       "79 Robinson Road",
//       "Singapore",
//       "contact@equinixai.com",
//       "www.EquinixAI.com",
//     ],
//   };

//   return (
//     <footer className="w-full bg-[#131313] border-t border-[#1a1a1a] text-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
//           {/* LOGO + TEXT */}
//           <div>
//             {/* Put logo in public/assets/equinix-logo.png */}
//             <img
//               src={logo}
//               alt="Equinix AI"
//               className="w-[140px] sm:w-[160px] md:w-[180px] cursor-pointer object-contain mb-5 max-w-full"
//             />

//             <p className="text-[#909090] text-blur text-[13px] leading-6 font-montserrat max-w-full md:max-w-[220px]">
//               Next-generation crypto infrastructure for a decentralized world
//             </p>
//           </div>

//           {/* FOOTER LINKS */}
//           {Object.entries(footerLinks).map(([title, links], index) => (
//             <div key={index}>
//               <h3 className="text-gradient-red cursor-pointer hover:opacity-80 font-['Mokoto'] uppercase text-[20px] tracking-wide  mb-6 ">
//                 {title}
//               </h3>

//               <ul className="flex flex-col gap-4">
//                 {links.map((link, i) => (
//                   <motion.li
//                     key={i}
//                     whileHover={{ x: 6 }}
//                     transition={{ duration: 0.25 }}
//                     className="cursor-pointer text-[14px] font-montserrat w-fit relative"
//                   >
//                     <span className="relative group inline-block">
//                       {/* NORMAL TEXT */}
//                       <span className="text-gray-400 transition-opacity duration-500 group-hover:opacity-0">
//                         {link}
//                       </span>

//                       {/* GRADIENT TEXT */}
//                       <span
//                         className="absolute left-0 top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r
//         from-[#FF0404]  via-[#FF7878] to-[#CF0000] bg-clip-text text-transparent whitespace-nowrap "
//                       >
//                         {link}
//                       </span>

//                       {/* UNDERLINE */}
//                       <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
//                     </span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Border */}
//         <div className="w-full h-[1px] bg-[#1a1a1a] mt-12 mb-6" />

//         {/* COPYRIGHT */}
//         <div className="text-center">
//           <p className="text-gray-400 text-[16px] font-montserrat tracking-wide">
//             © 2026 Equinix AI. All rights reserved. Built on enterprise-grade
//             infrastructure.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
    <footer className="w-full overflow-hidden border-t border-[#1a1a1a] bg-[#131313] text-white">
      <div
        className="
          mx-auto max-w-7xl

          px-6 py-8

          max-[1024px]:px-8
          max-[1024px]:py-10

          max-[996px]:px-10
          max-[996px]:py-8

          max-[768px]:px-8

          max-[550px]:px-4
          max-[550px]:py-7
        "
      >
        {/* Top Section */}
        {/* Top Section */}
<div
  className="
    grid

    grid-cols-4 gap-20

    max-[1200px]:gap-12

    max-[996px]:mx-auto
    max-[996px]:max-w-[700px]
    max-[996px]:grid-cols-2
    max-[996px]:justify-items-center
    max-[996px]:gap-x-20
    max-[996px]:gap-y-12

    max-[768px]:max-w-[620px]
    max-[768px]:gap-x-12

    max-[550px]:max-w-full
    max-[550px]:grid-cols-2
    max-[550px]:gap-12
    max-[550px]:text-center
  "
>
          {/* LOGO + TEXT */}
          <div
            className="
              max-[550px]:flex
              max-[550px]:flex-col
              max-[550px]:items-center
            "
          >
            <img
              src={logo}
              alt="Equinix AI"
              className="
                mb-5 w-[180px]
                max-w-full cursor-pointer object-contain

                max-[1024px]:w-[160px]

                max-[768px]:w-[150px]

                max-[550px]:mb-4
                max-[550px]:w-[130px]
              "
            />

            <p
              className="
                text-blur font-montserrat text-[#909090]

                max-w-[220px]
                text-[13px] leading-6

                max-[1024px]:text-[12px]

                max-[550px]:max-w-full
                max-[550px]:text-center
                max-[550px]:text-[11px]
                max-[550px]:leading-5
              "
            >
              Next-generation crypto infrastructure for a decentralized world
            </p>
          </div>

          {/* FOOTER LINKS */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div
              key={index}
              className="
                max-[550px]:flex
                max-[550px]:flex-col
                max-[550px]:items-center
              "
            >
              <h3
                className="
                  text-gradient-red cursor-pointer
                  font-['Mokoto'] uppercase tracking-wide
                  hover:opacity-80

                  mb-6 text-[20px]

                  max-[1024px]:mb-5
                  max-[1024px]:text-[18px]

                  max-[768px]:text-[16px]

                  max-[550px]:mb-4
                  max-[550px]:text-[15px]
                "
              >
                {title}
              </h3>

              <ul
                className="
                  flex flex-col gap-4

                  max-[1024px]:gap-3

                  max-[550px]:gap-2.5
                "
              >
                {links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="
                      relative w-fit cursor-pointer
                      font-montserrat

                      text-[14px]

                      max-[1024px]:text-[13px]

                      max-[550px]:text-[12px]
                    "
                  >
                    <span className="group relative inline-block">
                      {/* NORMAL TEXT */}
                      <span className="text-gray-400 transition-opacity duration-500 group-hover:opacity-0">
                        {link}
                      </span>

                      {/* GRADIENT TEXT */}
                      <span
                        className="
                          absolute left-0 top-0
                          whitespace-nowrap
                          bg-gradient-to-r
                          from-[#FF0404]
                          via-[#FF7878]
                          to-[#CF0000]
                          bg-clip-text text-transparent
                          opacity-0 transition-opacity duration-500
                          group-hover:opacity-100
                        "
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
        <div
          className="
            mt-12 mb-6
            h-[1px] w-full bg-[#1a1a1a]

            max-[768px]:mt-10
            max-[768px]:mb-5

            max-[550px]:mt-8
            max-[550px]:mb-4
          "
        />

        {/* COPYRIGHT */}
        <div className="text-center">
          <p
            className="
              font-montserrat tracking-wide text-gray-400

              text-[16px]

              max-[1024px]:text-[14px]

              max-[768px]:text-[13px]
              max-[768px]:leading-6

              max-[550px]:text-[11px]
              max-[550px]:leading-5
            "
          >
            © 2026 Equinix AI. All rights reserved. Built on enterprise-grade
            infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;