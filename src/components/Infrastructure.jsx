import React from "react";
import box from "../assets/homepage/robots/box1.png";

const EquinixBlockchainPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden relative font-sans">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[320px] h-[220px] bg-red-900/30 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="mb-8 ml-[-40px] ">
          <h2 className="text-[#ff2b2b] text-gradient-red text-4xl font-mokoto tracking-wide uppercase">
            EQUINIX INFRA
          </h2>

          <div className="mt-6 leading-tight">
            <h1 className="text-6xl md:text-7xl font-montserrat  ">
              Blockchain & Crypto
            </h1>
            <h1 className="text-6xl md:text-7xl font-montserrat  mt-2">
              Infrastructure
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex items-center justify-center min-h-[520px]">
          {/* Description Top Right */}
          <div className="absolute -top-[50px] right-0 max-w-md text-[15px] font-montserrat leading-7 text-gray-300 font-light">
            Equinix AI is built on enterprise-grade infrastructure that powers
            modern blockchain ecosystems with speed, security, and scalability.
          </div>

          {/* Center Image */}
          <div className="relative flex items-center justify-center">
            {/* RED GLOW BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full bg-red-600/20 blur-[100px]"></div>
            </div>

            {/* IMAGE */}
            <img
              src={box}
              alt="Center Structure"
             className="relative z-10 w-[350px] md:w-[450px] object-contain animate-smoothOrbit drop-shadow-[0_0_40px_rgba(200,0,0,0.35)]"
            />

            {/* LEFT TOP CARD */}
            <div className="absolute left-[-280px] top-[90px] flex items-center">
              <div className="w-[400px] font-montserrat border ml-[-120px] border-gray-500 py-5 px-5 text-center text-sm leading-6 text-gray-100 bg-black/20 backdrop-blur-sm">
                High-performance blockchain node deployment
              </div>

              <div className="relative w-24 h-[1px] bg-gray-500">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-gray-400 bg-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>
            </div>

            {/* LEFT BOTTOM CARD */}
            <div className="absolute left-[-280px] bottom-[90px] flex items-center">
              <div className="w-[400px] font-montserrat border ml-[-120px] border-gray-500 py-5 px-5 text-center text-sm leading-6 text-gray-100 bg-black/20 backdrop-blur-sm">
                Ultra-low latency connectivity for trading & DeFi
              </div>

              <div className="relative w-24 h-[1px] bg-gray-500">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-gray-400 bg-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>
            </div>

            {/* RIGHT TOP CARD */}
            <div className="absolute right-[-320px] top-[90px] flex items-center flex-row-reverse">
              <div className="w-[400px] mr-[-120px] font-montserrat border border-gray-500 py-5 px-5 text-center text-sm leading-6 text-gray-100 bg-black/20 backdrop-blur-sm">
                Secure private interconnection (no reliance on public internet)
              </div>

              <div className="relative w-24 h-[1px] bg-gray-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-gray-400 bg-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>
            </div>

            {/* RIGHT BOTTOM CARD */}
            <div className="absolute right-[-320px] bottom-[80px] flex items-center flex-row-reverse">
              <div className="w-[400px] mr-[-120px] font-montserrat border border-gray-500 py-5 px-5 text-center text-sm leading-6 text-gray-100 bg-black/20 backdrop-blur-sm">
                Infrastructure support for exchanges, wallets, and Web3 apps
              </div>

              <div className="relative w-24 h-[1px] bg-gray-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-gray-400 bg-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Description */}
          <div className="absolute mb-[-40px] font-montserrat bottom-0 left-[-50px] w-[700px] text-[15px] leading-8 text-gray-400">
            Unlike typical crypto platforms, we focus on real infrastructure
            utility, ensuring that every transaction, node, and network
            interaction runs smoothly and securely.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquinixBlockchainPage;
