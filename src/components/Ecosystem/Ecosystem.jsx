import React from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const Ecosystem = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center px-6 md:px-20">
      {/* Gradient Glow */}
      <div className="relative w-[200px] h-[150px] bg-red-900/100 blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        {/* LEFT SIDE */}
        <div className="w-full max-w-[620px] ml-[-100px]">
          {/* Label */}
          <p className="text-red-500 font-mokoto tracking-[4px] text-4xl mb-6 uppercase">
            Ecosystem
          </p>

          {/* Heading */}
          <h1 className="text-white text-[60px] font-montserrat leading-[70px] mb-8">
            Unified DeFi AI <br /> Ecosystem
          </h1>

          {/* Content Row */}
          <div className="flex items-start gap-8">
            <p className="text-gray-400 text-[17px] leading-[30px] max-w-[480px]">
              Earn rewards through referrals, staking, and liquidity, while
              leveraging AI infrastructure and seamless global connectivity for
              scalable blockchain operations and decentralized financial growth
              worldwide.
            </p>

            <button
              className="min-w-[56px] h-[56px] mt-14 flex items-center justify-center 
      border border-red-500 rounded-full text-red-500 
      hover:bg-red-500 hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative h-[560px] w-full hidden md:block">
          {/* TOP RIGHT */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-30 top-[130px] right-[40px] w-[350px] h-[170px]
  border border-red-600 rounded-full px-10 py-6 
  bg-black backdrop-blur-sm
  flex flex-col justify-center text-left items-center"
          >
            <h3 className="text-white text-[20px] font-montserrat mb-2">
              Network Rewards System
            </h3>

            <ul className="text-gray-400 text-[15px] leading-5">
              <li>Direct referral rewards</li>
              <li>Team growth incentives</li>
              <li>Level-based earning system</li>
            </ul>
          </motion.div>

          {/* CENTER LEFT */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[210px] left-[-60px]  w-[350px] h-[170px]
    border border-red-600 rounded-full px-10 py-6 y-50 z-30
    bg-black backdrop-blur-sm  flex flex-col justify-center text-left items-center"
          >
            <h3 className="text-white text-[25px] font-montserrat mb-2">
              DeFi Earning Layer
            </h3>
            <ul className="text-gray-400 text-[15px] leading-5">
              <li>Staking rewards</li>
              <li>Liquidity participation</li>
              <li>Smart contract-based earnings</li>
            </ul>
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[130px] right-[20px] top-[300px]  w-[350px] h-[170px]
    border border-red-600 rounded-full px-10 py-6 z-30
    bg-black backdrop-blur-sm  flex flex-col justify-center text-left items-center"
          >
            <h3 className="text-white text-[20px] font-montserrat mb-2">
              AI Infrastructure Layer
            </h3>
            <ul className="text-gray-400 text-[15px] leading-5">
              <li>High-performance nodes</li>
              <li>Staking</li>
              <li>Blockchain validation support</li>
              <li>AI-powered optimization</li>
            </ul>
          </motion.div>

          {/* BOTTOM LEFT */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[10px] w-[350px] h-[170px] left-[-60px] 
    border border-red-600 rounded-full px-10 py-6 y-50 z-30
    bg-black backdrop-blur-sm  flex flex-col justify-center text-left items-center"
          >
            <h3 className="text-white text-[20px] font-montserrat mb-2">
              Global Interconnection
            </h3>
            <p className="text-gray-400 text-[15px] leading-5">
              Seamless connectivity across exchanges, wallets, and blockchain
              networks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
