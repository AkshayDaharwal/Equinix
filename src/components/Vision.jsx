import React from "react";
import robot from "../assets/homepage/robots/robot3.png";


const roadmapItems = [
  "Scaling to 100 million users by 2027",
  "Launching a high-utility token ecosystem in 2028",
  "Expanding AI-driven financial automation",
  "Creating a fully interconnected global Web3 network",
]

const FutureVision = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Top Left Glow (hidden on small screens) */}
      <div className="hidden md:block absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-red-900/40 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[90vh]">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center">
            {/* Put your image in public/assets/robot-vision.png */}
            <img
              src={robot}
              alt="Robot Vision"
              className="w-[320px] sm:w-[420px] md:w-[520px] h-auto object-cover mt-8 md:mr-16 rounded-[28px] max-w-full"
            />
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
              <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-red-600" />

              <div className="flex flex-col gap-14">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-6 relative">
                    {/* Dot */}
                    <div className="relative z-10 w-4 h-4 rounded-full border border-red-500 flex items-center justify-center bg-black">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF0404] via-[#FF7878] to-[#CF0000]" />
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
  )
}

export default FutureVision
