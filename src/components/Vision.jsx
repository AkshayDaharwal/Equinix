import React from "react";
import robot from "../assets/homepage/robots/robot3.png";
import { motion } from "framer-motion";

const roadmapItems = [
  "Scaling to 100 million users by 2027",
  "Launching a high-utility token ecosystem in 2028",
  "Expanding AI-driven financial automation",
  "Creating a fully interconnected global Web3 network",
];

const FutureVision = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Top Left Glow (hidden on small screens) */}
      <div className="hidden md:block absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-red-900/40 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[90vh]">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center items-center group perspective-[2000px]">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-red-500/10 blur-[80px] scale-110 opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out" />

            {/* Rotating Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="absolute w-[650px] h-[650px] rounded-full border border-red-500/20"
            />

            {/* Rotating Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="absolute w-[500px] h-[500px] rounded-full border border-red-400/10"
            />

            {/* Floating Particles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute top-16 left-10 w-3 h-3 rounded-full bg-red-500 blur-[2px]"
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute bottom-24 right-10 w-4 h-4 rounded-full bg-white blur-[2px]"
            />

            {/* Main 3D Card */}
            <motion.div
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 1.2,
              }}
              className="relative preserve-3d transition-all duration-500 ease-out"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glass Reflection */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/10 via-transparent to-transparent z-20 pointer-events-none" />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-red-500/30 shadow-[0_0_40px_rgba(255,0,0,0.35)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />

              {/* Robot Image */}
              <motion.img
                src={robot}
                alt="Robot Vision"
                className="relative z-10 w-[500px] h-[620px] object-cover rounded-[30px] 
shadow-[0_0_80px_rgba(255,0,0,0.25)] 
transition-all duration-700 ease-out"
                style={{
                  transform: "translateZ(60px)",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            <h3 className="text-gradient-red text-[36px] uppercase tracking-wide font-mokoto mb-4">
              Vision
            </h3>

            <h1 className="text-[72px] leading-[82px] tracking-[-2px]  font-montserrat mb-8">
              Future Vision
            </h1>

            <p className="text-gray-300 text-[15px] leading-8 max-w-[500px] font-montserrat mb-6">
              Equinix AI is building a global decentralized financial ecosystem
              designed for mass adoption.
            </p>

            <p className="text-gray-400 text-[15px] leading-8 font-montserrat mb-14">
              Our future roadmap includes:
            </p>

            {/* ROADMAP */}
            <div className="relative ml-2">
              {/* Vertical Line */}
              <div className="absolute left-[10px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#000000] via-[#CF0000] to-[#000000]" />

              <div className="flex flex-col gap-14">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-6 relative">
                    {/* Dot */}
                    <div className="relative z-10 w-6 h-6 rounded-full border border-red-500 flex items-center justify-center bg-black">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FF0404] via-[#FF7878] to-[#CF0000]" />
                    </div>

                    {/* Text */}
                    <p className="text-gray-400 text-[20px] leading-8 font-montserrat">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureVision;
