import React from "react";
import girl from "../assets/homepage/robots/girl.png";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Adaire Fox-Martin",
    role: "CEO & President",
    desc: "Leads global strategy and ecosystem growth, driving the vision of a scalable AI-powered Web3 network focused on mass adoption and long-term sustainability.",
    highlight: false,
  },
  {
    name: "Charles J. Meyers",
    role: "Executive Chairman",
    desc: "Provides strategic direction and governance, ensuring secure, transparent, and sustainable network expansion across global markets.",
    highlight: true,
  },
  {
    name: "Yee May Leong",
    role: "Managing Director",
    desc: "Oversees regional growth and community expansion, strengthening the network-driven ecosystem across Asia-Pacific.",
    highlight: false,
  },
];

const Leadership = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-black overflow-hidden">
      {/* RED GRADIENT SIDE */}
      {/* <div className="absolute right-0 top-0 w-[40%] h-full "></div> */}
      <div className="hidden md:block absolute right-0 top-0 w-[200px] h-[150px] bg-red-900/100 blur-[100px]"></div>
      {/* HEADER */}
      <div className="text-center mb-12 relative z-10">
        <p className=" font-mokoto tracking-widest text-gradient-red text-3xl mb-2">
          SERVICES
        </p>
        <h2 className="text-3xl md:text-6xl font-montserrat ">Leadership</h2>
      </div>

      {/* CARDS */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-20">
        {leaders.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className={`group relative overflow-hidden
transform-gpu
[transform-style:preserve-3d] 
  w-full md:w-[360px]
  font-montserrat
  min-h-[420px]
  rounded-2xl
  p-6
  text-center
  flex flex-col justify-between

  backdrop-blur-xl

  ${
    item.highlight
      ? "bg-black border border-red-600 text-white"
      : "bg-gray-200 text-black"
  }

  shadow-[0_0_30px_rgba(255,0,0,0.08)]
  hover:shadow-[0_0_60px_rgba(255,0,0,0.30)]
  duration-500`}
          >
            {/* AI SHINE EFFECT */}
            <motion.div
              initial={{ x: "-120%" }}
              whileHover={{ x: "250%" }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 z-20
  h-full w-[35%]
  skew-x-12
  bg-gradient-to-r
  from-transparent
  via-white/20
  to-transparent"
            />

            {/* CYBER GRID */}
<div
  className="absolute inset-0 opacity-10
  bg-[linear-gradient(rgba(255,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.3)_1px,transparent_1px)]
  bg-[size:30px_30px]"
/>


{/* TOP CORNER GLOW */}
<div className="absolute top-0 left-0 w-24 h-24 bg-red-500/20 blur-[60px]" />

{/* BOTTOM CORNER GLOW */}
<div className="absolute bottom-0 right-0 w-24 h-24 bg-red-500/20 blur-[60px]" />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10
  w-40 h-40
  bg-red-500/20
  rounded-full
  blur-[80px]"
            />
            <h3
              className={`font-montserrat font-semibold text-2xl leading-tight mt-2 mb-1 ${
                item.name === "Charles J. Meyers" ? "text-white" : "text-black"
              }`}
            >
              {item.name} –
            </h3>

            <p className="font-montserrat font-semibold text-2xl leading-tight mb-6">
              {item.role}
            </p>

            {/* IMAGE */}
            <motion.img
              src={girl}
              className="w-24 h-24 md:w-28 md:h-28 items-center justify-center mx-auto
  rounded-full object-cover 
  border border-red-500/30
  shadow-[0_0_30px_rgba(255,0,0,0.25)]"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
             whileHover={{
  y: -12,
  rotateX: 6,
  rotateY: -6,
  scale: 1.03,
}}
            />

            {/* DESC */}
            <p
              className={`text-sm ${
                item.highlight ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FOOTER TEXT */}
      <p className="text-center text-white font-montserrat italic mt-12 text-3xl relative z-10">
        Driven By Leadership. Powered By Network Growth.
      </p>
    </section>
  );
};

export default Leadership;
