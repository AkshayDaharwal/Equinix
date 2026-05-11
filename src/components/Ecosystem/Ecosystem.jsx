import React from "react";
import { motion } from "framer-motion";

const ecosystemCards = [
  {
    title: "Network Rewards System",
    points: [
      "Direct referral rewards",
      "Team growth incentives",
      "Level-based earning system",
    ],
    className: `
      top-[130px] right-[40px]

      max-[1200px]:top-[110px]
      max-[1200px]:right-[0px]

      max-[992px]:right-0
      max-[992px]:top-[130px]
    `,
    animation: {
      y: [0, -6, 0],
    },
  },

  {
    title: "DeFi Earning Layer",
    points: [
      "Staking rewards",
      "Liquidity participation",
      "Smart contract-based earnings",
    ],
    className: `
      top-[210px] left-[-60px]

      max-[1200px]:top-[210px]
      max-[1200px]:left-[0px]

      max-[992px]:left-0
      max-[992px]:top-[230px]
    `,
    animation: {
      y: [0, 10, 0],
      x: [0, -10, 0],
    },
  },

  {
    title: "AI Infrastructure Layer",
    points: [
      "High-performance nodes",
      "Staking",
      "Blockchain validation support",
      "AI-powered optimization",
    ],
    className: `
      top-[300px] right-[20px]

      max-[1200px]:top-[300px]
      max-[1200px]:right-[-10px]

      max-[992px]:right-0
      max-[992px]:top-[370px]
    `,
    animation: {
      y: [0, -6, 0],
      x: [0, 10, 0],
    },
  },

  {
    title: "Global Interconnection",
    description:
      "Seamless connectivity across exchanges, wallets, and blockchain networks.",
    className: `
      bottom-[10px] left-[-60px]

      max-[1200px]:bottom-[10px]
      max-[1200px]:left-[0px]

      max-[992px]:left-0
      max-[992px]:bottom-[30px]
    `,
    animation: {
      y: [0, -6, 0],
      x: [0, -8, 0],
    },
  },
];

const Ecosystem = () => {
  return (
    <section
      className="
        relative flex min-h-screen items-center overflow-hidden bg-black
        px-6 sm:px-8 md:px-12 lg:px-20
      "
    >
      {/* GRADIENT GLOW */}
      <div
        className="
          absolute left-0 top-[20%]
          h-[150px] w-[200px]
          bg-red-900/100 blur-[100px]
        "
      />

      <div
        className="
          relative z-10 mx-auto grid w-full
          items-center gap-46 md:grid-cols-2 px-20
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            w-full max-w-[620px]

            lg:ml-[-100px]

            max-[1024px]:ml-0
            max-[768px]:max-w-full
            max-[768px]:text-center
          "
        >
          {/* LABEL */}
          <p
            className="
              mb-6 font-['Mokoto'] uppercase tracking-[4px]
              text-red-500

              text-4xl

              max-[1200px]:text-3xl
              max-[992px]:text-2xl
              max-[768px]:text-xl
            "
          >
            Ecosystem
          </p>

          {/* HEADING */}
          <h1
            className="
              mb-8 font-montserrat text-white

              text-[60px] leading-[70px]

              max-[1200px]:text-[52px]
              max-[1200px]:leading-[60px]

              max-[992px]:text-[42px]
              max-[992px]:leading-[50px]

              max-[768px]:text-[34px]
              max-[768px]:leading-[42px]

              max-[480px]:text-[28px]
              max-[480px]:leading-[36px]
            "
          >
            Unified DeFi AI <br /> Ecosystem
          </h1>

          {/* CONTENT ROW */}
          <div
            className="
              flex items-start gap-8

              max-[768px]:flex-col
              max-[768px]:items-center
              max-[768px]:gap-6
            "
          >
            <p
              className="
                max-w-[480px] text-gray-400

                text-[17px] leading-[30px]

                max-[992px]:text-[15px]
                max-[992px]:leading-[26px]

                max-[768px]:text-center
                max-[768px]:text-[14px]
                max-[768px]:leading-[24px]
              "
            >
              Earn rewards through referrals, staking, and liquidity, while
              leveraging AI infrastructure and seamless global connectivity for
              scalable blockchain operations and decentralized financial growth
              worldwide.
            </p>

            <button
              className="
                mt-14 flex h-[56px] min-w-[56px]
                items-center justify-center rounded-full
                border border-red-500 text-red-500
                transition hover:bg-red-500 hover:text-white

                max-[768px]:mt-0
              "
            >
              →
            </button>
          </div>
        </div>

       
{/* DESKTOP FLOATING CARDS */}
<div
  className="
    relative hidden w-full xl:block

    h-[560px]

    translate-x-[80px]

    max-[1400px]:translate-x-[40px]
  "
>
  {ecosystemCards.map((card, index) => (
    <motion.div
      key={index}
      animate={card.animation}
      transition={{
        duration: 4 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      className={`
        absolute z-30 flex flex-col
        justify-center rounded-[80px]
        border border-red-600 bg-black
        px-10 py-6 text-left
        backdrop-blur-sm

        w-[350px] h-[170px]

        ${card.className}
      `}
    >
      <h3
        className="
          mb-2 font-montserrat text-[20px] text-white
        "
      >
        {card.title}
      </h3>

      {card.points ? (
        <ul className="text-[15px] leading-5 text-gray-400">
          {card.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-[15px] leading-5 text-gray-400">
          {card.description}
        </p>
      )}
    </motion.div>
  ))}
</div>
        
       {/* TABLET + MOBILE RESPONSIVE CARDS */}
<div
  className="
    hidden w-full

    xl:hidden

    max-[768px]:flex
    max-[768px]:flex-col

    min-[769px]:grid
    min-[769px]:grid-cols-2

    gap-5

    max-[992px]:gap-4
  "
>
  {ecosystemCards.map((card, index) => (
    <motion.div
      key={index}
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
  flex flex-col justify-start
  rounded-[34px]
  border border-red-600
  bg-black
  backdrop-blur-sm

  text-left

  px-8 py-5

  min-h-[150px]

  max-[1100px]:px-6
  max-[1100px]:py-4
  max-[1100px]:min-h-[135px]

  max-[992px]:px-5
  max-[992px]:py-4
  max-[992px]:min-h-[125px]

  max-[768px]:text-center
  max-[768px]:min-h-auto
  max-[768px]:px-6
  max-[768px]:py-6
"
    >
      <h3
        className="
  mb-3 font-montserrat
  text-[22px] leading-[1.2] text-white

  max-[1100px]:text-[19px]

  max-[992px]:text-[16px]
"
      >
        {card.title}
      </h3>

      {card.points ? (
        <ul
          className="
            space-y-1.5 text-gray-400

            text-[15px] leading-6

            max-[992px]:text-[12px]
            max-[992px]:leading-5
          "
        >
          {card.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : (
        <p
          className="
            text-gray-400

            text-[15px] leading-6

max-[1100px]:text-[13px]
max-[1100px]:leading-5

max-[992px]:text-[11px]
max-[992px]:leading-4
          "
        >
          {card.description}
        </p>
      )}
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Ecosystem;