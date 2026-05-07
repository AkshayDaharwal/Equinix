import React from "react";
import hand from "../assets/homepage/robots/hand.png";
import { Banknote, Cloud, Dna, Tv, Settings } from "lucide-react";
import { FaUniversity } from "react-icons/fa";



const IndustriesSection = () => {
  return (
    <section className="bg-black text-white px-10 py-16 flex justify-between items-start">
      {/* LEFT SIDE */}
      <div className="w-[45%] space-y-8 translate-x-10">
        <p className="text-gray-400 font-montserrat text-sm mb-6 leading-6">
          Our infrastructure, powered by Equinix, supports diverse industries
          with secure, scalable, and high-performance connectivity.
        </p>

        {/* Item */}
        <div className="flex items-start gap-3 py-4 border-b border-gray-500">
        <FaUniversity className="text-red-600 w-5 h-5 mt-1" />
         
          <div>
            <h4 className="text-2xl font-montserrat ">Financial Services & Banking</h4>
            <p className="text-gray-400 text-sm font-montserrat mt-2 ">
              Secure, low-latency systems for payments, trading, and global
              finance.
            </p>
          </div>
        </div>

        {/* Active Item */}
        <div className="flex items-start gap-3 py-4 bg-gray-200 text-black rounded-lg my-3 px-4">
         <Cloud className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="text-2xl font-montserrat">Cloud & IT Infrastructure</h4>
            <p className="text-sm font-montserrat mt-2">
              Reliable infrastructure for Web3, nodes, exchanges, and DeFi
              platforms.
            </p>
          </div>
        </div>

        {/* Other Items */}
        <div className="flex items-start gap-3 py-4 border-b border-gray-500">
          <Dna className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="text-2xl font-montserrat">Healthcare & Life Sciences</h4>
            <p className="text-gray-400 text-sm font-montserrat mt-2">
              Fast, secure data handling for healthcare and research platforms.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-4 border-b border-gray-500">
          <Tv className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="text-2xl font-montserrat">Media & Communication</h4>
            <p className="text-gray-400 text-sm font-montserrat mt-2">
              High-speed delivery for streaming content and communication
              networks.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 py-4 border-b border-gray-500">
        <Settings className="text-red-600 w-5 h-5 mt-1" />
          <div>
            <h4 className="text-2xl font-montserrat">Manufacturing & Engineering</h4>
            <p className="text-gray-400 text-sm font-montserrat mt-2">
              Smart infrastructure for IoT, automation, and real-time
              operations.
            </p>
          </div>
        </div>
      </div>


      {/* RIGHT SIDE */}
<div className="w-[45%]">

  <p className="font-mokoto text-gradient-red text-3xl mb-2 tracking-widest">
    SERVICES
  </p>

  <h2 className="text-4xl font-montserrat mb-8 leading-tight">
    INDUSTRIES WE <br /> SERVE
  </h2>

  <div className="grid grid-cols-2 gap-4">
    <img
      src={hand}
      className="w-[500px] h-[500px] rounded-xl max-w-none"
    />
  </div>
</div>
    </section>
  );
};

export default IndustriesSection;
