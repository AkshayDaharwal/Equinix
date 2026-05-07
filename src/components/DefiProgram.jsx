import React from "react"
import { UserRound, Gift } from "lucide-react"

const cards = [
  {
    title: "Referral-based\nnetwork expansion",
  },
  {
    title: "Staking and liquidity\nparticipation",
  },
  {
    title: "AI-optimized reward\ndistribution",
  },
  {
    title: "Multi-level earning\nstructures",
  },
]

const FeatureCard = ({ title }) => {
  return (
    <div className="w-[180px] h-[190px] rounded-2xl bg-gradient-to-b from-[#000000] to-[#310000]  flex flex-col items-center justify-center text-center ">
      <div className="relative mb-8">
        <Gift className="w-10 h-10 text-white" strokeWidth={1.8} />
        <UserRound
          className="w-5 h-5 text-white absolute -bottom-1 -right-3"
          strokeWidth={1.8}
        />
      </div>

      <p className="text-white text-[14px] mt-2 leading-6 font-2xl whitespace-pre-line font-montserrat px-3">
        {title}
      </p>
    </div>
  )
}

const EquinixAIDefiProgram = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative text-white">
      {/* Background Glow */}
      <div className="absolute bottom-[-120px] left-[-80px] w-[340px] h-[240px] bg-red-900/40 blur-3xl rounded-full" />

      <div className="relative z-10 px-10 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center min-h-[90vh]">
          {/* LEFT SECTION */}
          <div>
            <h3 className="text-gradient-red font-mokoto text-[34px]  mb-3 leading-none">
              DEFI
            </h3>

            <h1 className="text-7xl leading-[86px]  tracking-[-2px] font-montserrat mb-10">
              Equinix AI DeFi
              <br />
              Program
            </h1>

            <p className="text-gray-300 text-[16px] leading-9 max-w-[520px] font-montserrat mb-12">
              The Equinix AI DeFi Program is a smart contract-driven earning
              ecosystem designed to combine network rewards with decentralized
              finance.
            </p>

            <p className="text-gray-300 text-[16px] leading-9 max-w-[620px] font-montserrat">
              Our AI layer ensures fair distribution, performance tracking, and
              optimized growth, making the system both scalable and transparent.
              <br />
              <span className="text-white  font-montserrat">
                This is not just DeFi — it’s a hybrid model of AI + Network
                Economy + Blockchain automation.
              </span>
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-white text-[40px] font-montserrat mb-12 self-start ml-8">
              Users can earn through:
            </h2>

            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
              {cards.map((card, index) => (
                <FeatureCard key={index} title={card.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EquinixAIDefiProgram
