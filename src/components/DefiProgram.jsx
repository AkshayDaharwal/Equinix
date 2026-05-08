import React from "react";
import { UserRound, Gift } from "lucide-react";
import { motion } from "framer-motion";

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
];

const FeatureCard = ({ title }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 12,
      }}
      className="
        relative z-10 group cursor-pointer
        flex flex-col items-center justify-center text-center
        rounded-2xl bg-gradient-to-b from-[#000000] to-[#310000]

        w-[180px] h-[190px]

        max-[1024px]:w-[165px]
        max-[1024px]:h-[175px]

        max-[768px]:w-full
        max-[768px]:max-w-[240px]
        max-[768px]:h-[170px]

        max-[550px]:max-w-full
        max-[550px]:h-[160px]
      "
    >
      {/* Gradient Glow */}
      <div
        className="
          absolute -inset-6 -z-10 opacity-0
          transition-all duration-500
          group-hover:opacity-40
          bg-gradient-to-br
          from-red-700/40 via-red-500/30 to-red-900/20
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative mb-8 max-[550px]:mb-6">
          <Gift
            className="
              text-white

              w-10 h-10

              max-[550px]:w-8
              max-[550px]:h-8
            "
            strokeWidth={1.8}
          />

          <UserRound
            className="
              text-white absolute -bottom-1 -right-3

              w-5 h-5

              max-[550px]:w-4
              max-[550px]:h-4
            "
            strokeWidth={1.8}
          />
        </div>

        <p
          className="
            whitespace-pre-line px-3
            font-montserrat text-white

            text-[14px] leading-6

            max-[1024px]:text-[13px]

            max-[550px]:text-[12px]
            max-[550px]:leading-5
          "
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

const EquinixAIDefiProgram = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div
        className="
          hidden md:block absolute
          bottom-[-120px] left-[-80px]
          h-[240px] w-[340px]
          rounded-full bg-red-900/40 blur-3xl
        "
      />

      <div
        className="
          relative z-10 mx-auto max-w-7xl

          px-6 py-10

          max-[1024px]:px-8
          max-[1024px]:py-12

          max-[768px]:px-6
          max-[768px]:py-10

          max-[550px]:px-4
          max-[550px]:py-8
        "
      >
        <div
          className="
            grid min-h-[90vh] items-center

            grid-cols-2 gap-12

            max-[1024px]:gap-10

            max-[768px]:grid-cols-1
            max-[768px]:gap-16
          "
        >
          {/* LEFT SECTION */}
          <div
            className="
              max-[768px]:text-center
              max-[768px]:flex
              max-[768px]:flex-col
              max-[768px]:items-center
            "
          >
            <h3
              className="
                text-gradient-red font-mokoto leading-none

                mb-3 text-[34px]

                max-[1024px]:text-[28px]

                max-[768px]:text-[24px]

                max-[550px]:text-[20px]
              "
            >
              DEFI
            </h3>

            <h1
              className="
                font-montserrat tracking-[-2px]

                mb-10 text-7xl leading-[86px]

                max-[1200px]:text-6xl
                max-[1200px]:leading-[74px]

                max-[1024px]:text-5xl
                max-[1024px]:leading-[64px]

                max-[768px]:mb-8
                max-[768px]:text-4xl
                max-[768px]:leading-[52px]

                max-[550px]:text-[32px]
                max-[550px]:leading-[42px]
              "
            >
              Equinix AI DeFi
              <br />
              Program
            </h1>

            <p
              className="
                font-montserrat text-gray-300

                mb-12 max-w-[520px]
                text-[16px] leading-9

                max-[1024px]:text-[15px]
                max-[1024px]:leading-8

                max-[768px]:mb-8
                max-[768px]:max-w-full
                max-[768px]:text-[14px]
                max-[768px]:leading-7

                max-[550px]:text-[13px]
                max-[550px]:leading-6
              "
            >
              The Equinix AI DeFi Program is a smart contract-driven earning
              ecosystem designed to combine network rewards with decentralized
              finance.
            </p>

            <p
              className="
                font-montserrat text-gray-300

                max-w-[620px]
                text-[16px] leading-9

                max-[1024px]:text-[15px]
                max-[1024px]:leading-8

                max-[768px]:max-w-full
                max-[768px]:text-[14px]
                max-[768px]:leading-7

                max-[550px]:text-[13px]
                max-[550px]:leading-6
              "
            >
              Our AI layer ensures fair distribution, performance tracking, and
              optimized growth, making the system both scalable and transparent.
              <br />
              <span className="font-montserrat text-white">
                This is not just DeFi — it’s a hybrid model of AI + Network
                Economy + Blockchain automation.
              </span>
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div
            className="
              flex flex-col items-center justify-center

              max-[768px]:w-full
            "
          >
            <h2
              className="
                self-start font-montserrat text-white

                ml-8 mb-12 text-[40px]

                max-[1200px]:text-[34px]

                max-[1024px]:ml-0
                max-[1024px]:text-[30px]

                max-[768px]:self-center
                max-[768px]:mb-10
                max-[768px]:text-center
                max-[768px]:text-[28px]

                max-[550px]:mb-8
                max-[550px]:text-[22px]
              "
            >
              Users can earn through:
            </h2>

            <div
              className="
                grid

                grid-cols-2
                gap-x-16 gap-y-10

                max-[1200px]:gap-x-10
                max-[1200px]:gap-y-8

                max-[1024px]:gap-x-6

                max-[768px]:w-full
                max-[768px]:grid-cols-2
                max-[768px]:justify-items-center
                max-[768px]:gap-6

                max-[550px]:grid-cols-1
              "
            >
              {cards.map((card, index) => (
                <FeatureCard key={index} title={card.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquinixAIDefiProgram;