import React from "react";
import hand from "../assets/homepage/robots/hand.png";
import { Banknote, Cloud, Dna, Tv, Settings } from "lucide-react";
import { FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const IndustriesSection = () => {
  return (
    <section
  className="
    bg-black text-white overflow-hidden
    px-10 py-16
    flex justify-between items-start

    max-[996px]:flex-col
    max-[996px]:items-center
    max-[996px]:gap-20

    max-[768px]:px-6
  "
>

      {/* LEFT SIDE */}
<div
  className="
    w-[45%] space-y-8 translate-x-10

    max-[1200px]:translate-x-0

    max-[996px]:order-2
    max-[996px]:w-full
  "
>
        <p className="text-gray-400 font-['Montserrat'] text-sm mb-6 leading-6">
          Our infrastructure, powered by Equinix, supports diverse industries
          with secure, scalable, and high-performance connectivity.
        </p>

        {/* Item */}
        <div className="flex items-start gap-3 py-4 border-b border-gray-500">
          <FaUniversity className="text-red-600 w-5 h-5 mt-1" />

          <div>
            <h4 className="!text-3xl font-['Montserrat'] premium-heading ">
              Financial Services & Banking
            </h4>
            <p className="text-gray-400 text-sm font-['Montserrat'] mt-2 ">
              Secure, low-latency systems for payments, trading, and global
              finance.
            </p>
          </div>
        </div>

        {/* Active Item */}
        <div className="flex items-start gap-3 py-4 bg-gray-200 text-black rounded-lg my-3 px-4">
          <Cloud className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="!text-3xl font-['Montserrat'] premium-heading">
              Cloud & IT Infrastructure
            </h4>
            <p className="text-sm font-['Montserrat'] mt-2">
              Reliable infrastructure for Web3, nodes, exchanges, and DeFi
              platforms.
            </p>
          </div>
        </div>

        {/* Other Items */}
        <div className="flex  items-start gap-3 py-4 border-b border-gray-500">
          <Dna className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="!text-3xl font-['Montserrat'] premium-heading">
              Healthcare & Life Sciences
            </h4>
            <p className="text-gray-400 text-sm font-['Montserrat'] mt-2">
              Fast, secure data handling for healthcare and research platforms.
            </p>
          </div>
        </div>

        <div className="flex  items-start gap-3 py-4 border-b border-gray-500">
          <Tv className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="!text-3xl font-['Montserrat'] premium-heading">
              Media & Communication
            </h4>
            <p className="text-gray-400 text-sm font-['Montserrat'] mt-2">
              High-speed delivery for streaming content and communication
              networks.
            </p>
          </div>
        </div>

        <div className="flex  items-start gap-3 py-4 border-b border-gray-500">
          <Settings className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="!text-3xl font-['Montserrat'] premium-heading">
              Manufacturing & Engineering
            </h4>
            <p className="text-gray-400 text-sm font-['Montserrat'] mt-2">
              Smart infrastructure for IoT, automation, and real-time
              operations.
            </p>
          </div>
        </div>
      </div>

  
     {/* RIGHT SIDE */}
<div
  className="
    w-[45%]

    max-[996px]:order-1
    max-[996px]:w-full
    max-[996px]:flex
    max-[996px]:flex-col
    max-[996px]:items-center
    max-[996px]:text-center
  "
>
        <section id="feature">
          <p className="font-['Mokoto'] text-gradient-red text-3xl mb-2 tracking-widest">
          SERVICES
        </p>
        </section>

        <h2 className="text-4xl font-['Montserrat'] mb-8 leading-tight">
          INDUSTRIES WE <br /> SERVE
        </h2>

        <div className="relative flex justify-center items-center overflow-hidden">
          {/* RED GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[420px] h-[420px]
    max-[768px]:w-[320px] max-[768px]:h-[320px]
    max-[550px]:w-[240px] max-[550px]:h-[240px]
    bg-red-600/20 rounded-full blur-[100px]"
          />

          {/* ROTATING BORDER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[530px] h-[530px]
    max-[768px]:w-[340px] max-[768px]:h-[340px]
    max-[550px]:w-[260px] max-[550px]:h-[260px]
    rounded-[30px]
    border border-red-500/30
    border-dashed"
          />

          {/* SCANNING LINE */}
          <motion.div
            animate={{
              y: [-220, 220, -220],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute z-20
    w-[480px] h-[4px]
    max-[768px]:w-[320px]
    max-[550px]:w-[240px]
    bg-gradient-to-r
    from-transparent
    via-red-500
    to-transparent
    blur-sm"
          />

          {/* IMAGE */}
          <motion.img
            src={hand}
            alt="AI Hand"
            className="relative z-10
    w-[500px] h-[500px]
    max-[768px]:w-[320px] max-[768px]:h-[320px]
    max-[550px]:w-[240px] max-[550px]:h-[240px]
    rounded-xl
    object-cover
    border border-red-500/20
    shadow-[0_0_50px_rgba(255,0,0,0.25)]"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
