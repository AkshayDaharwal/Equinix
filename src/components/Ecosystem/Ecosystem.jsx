import React from "react";
// import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ecosystemCards = [
  {
    title: "Network Rewards System",

    points: [
      "Direct referral rewards",
      "Team growth incentives",
      "Level-based earning system",
    ],
    className: `
      top-[130px] right-[10px]
2xl:right-[30px]

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
      top-[210px] left-[0px]
2xl:left-[-80px]

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
      top-[300px] right-[0px]
2xl:right-[30px]

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
      bottom-[10px] left-[0px]
2xl:left-[-80px]

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
          items-center gap-16 xl:grid-cols-2 px-4 sm:px-8 md:px-10 lg:px-16
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            w-full max-w-[620px]

           2xl:ml-[-100px]
           xl:ml-[-40px]

            max-[1024px]:ml-0
            max-[768px]:max-w-full
            max-[768px]:text-center
          "
        >
          {/* LABEL */}
          <p
            className="
              mb-6 font-['Mokoto'] uppercase tracking-[4px]
              text-gradient-red

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
              mb-8 font-['Montserrat'] text-white

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
                 flex flex-col gap-5

    sm:flex-row
    sm:items-center

    max-[768px]:items-center
              "
            >
              Earn rewards through referrals, staking, and liquidity, while
              leveraging AI infrastructure and seamless global connectivity for
              scalable blockchain operations and decentralized financial growth
              worldwide.
            </p>

             <div className="flex items-center gap-4">
   
 <button
              className="
   relative
mt-6
xl:mt-14

max-[768px]:top-0
max-[768px]:left-0
    max-[768px]:mt-0 

    flex h-[56px] min-w-[56px]
    items-center justify-center
    rounded-full

    bg-[linear-gradient(90deg,#FF0404,#FF7878,#CF0000)]
    p-[1px]
  "
            >
              <div
                className="
      flex h-full w-full
      items-center justify-center
      rounded-full bg-black
    "
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="arrowGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF0404" />
                      <stop offset="50%" stopColor="#FF7878" />
                      <stop offset="100%" stopColor="#CF0000" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M7 17L17 7"
                    stroke="url(#arrowGradient2)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M9 7H17V15"
                    stroke="url(#arrowGradient2)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            {/* <button
  className="
    flex h-[56px] min-w-[56px]
    items-center justify-center rounded-full
    border border-red-500 text-red-500 
    transition hover:bg-red-500  hover:text-white
     relative right-20 -top-5 
  "
>
  <ArrowRight size={38} strokeWidth={1.2} className="rotate-[25deg]" />
</button> */}
            <button
              className="
   relative

xl:right-20
xl:-top-5

max-[768px]:right-0
max-[768px]:top-0

    flex h-[56px] min-w-[56px]
    items-center justify-center
    rounded-full

    bg-[linear-gradient(90deg,#FF0404,#FF7878,#CF0000)]
    p-[1px]
  "
            >
              <div
                className="
      flex h-full w-full
      items-center justify-center
      rounded-full bg-black
    "
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-[70deg]"
                >
                  <defs>
                    <linearGradient
                      id="arrowGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF0404" />
                      <stop offset="50%" stopColor="#FF7878" />
                      <stop offset="100%" stopColor="#CF0000" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M7 17L17 7"
                    stroke="url(#arrowGradient)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M9 7H17V15"
                    stroke="url(#arrowGradient)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

  </div>

           
          </div>
        </div>

        {/* DESKTOP FLOATING CARDS */}
        <div
          className="
    relative hidden w-full xl:block

    h-[560px]

xl:translate-x-[20px]
2xl:translate-x-[80px]
  "
        >
          <div className="absolute inset-0 z-0">
            {/* slow glowing fire layers */}
            <div className="absolute top-[20%] left-[10%] h-[300px] w-[300px] bg-red-600/20 blur-[120px] animate-pulse" />

            <div className="absolute top-[60%] right-[10%] h-[250px] w-[250px] bg-orange-500/20 blur-[140px] animate-pulse" />

            <div className="absolute bottom-[10%] left-[40%] h-[220px] w-[220px] bg-red-700/20 blur-[130px] animate-pulse" />
          </div>

          {ecosystemCards.map((card, index) => (
            <div
              key={index}
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

  w-[320px]
2xl:w-[350px]

h-[170px]

  ${card.className}
    shadow-[0_0_30px_rgba(255,0,0,0.15)]

       
      `}
            >
              <h3
                className="
          mb-2 font-['Montserrat'] text-[20px] text-white
        "
              >
                {card.title}
              </h3>

              {card.points ? (
                <ul className="text-[15px] leading-5 text-gray-400 justify-items-center">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[15px] leading-5 text-gray-400">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* TABLET + MOBILE RESPONSIVE CARDS */}
       <div
  className="
    xl:hidden
    w-full

    grid
    grid-cols-1
    md:grid-cols-2

    gap-6
    md:gap-5

    mt-10
  "
>
          {ecosystemCards.map((card, index) => (
            <div
              key={index}
              className={`

 relative overflow-hidden

    z-10

    w-full

    flex flex-col justify-start

    rounded-[34px]
    border border-red-600
    bg-black
    backdrop-blur-sm

    px-6 py-6

    min-h-[180px]

    text-center md:text-left

    shadow-[0_0_40px_rgba(255,0,0,0.18)]

    before:content-['']
    before:absolute
    before:inset-0
    before:rounded-[34px]
    before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.18),transparent_60%)]
    before:opacity-70
    
  `}
            >
              <h3
                className="
                relative z-10
  mb-3 font-['Montserrat']
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
                relative z-10
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
