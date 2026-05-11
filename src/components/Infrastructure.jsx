import React from "react";
import box from "../assets/homepage/robots/box1.png";

const cards = [
  "High-performance blockchain node deployment",
  "Ultra-low latency connectivity for trading & DeFi",
  "Secure private interconnection (no reliance on public internet)",
  "Infrastructure support for exchanges, wallets, and Web3 apps",
];

const EquinixBlockchainPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans px-10 text-white">
      {/* BACKGROUND GLOW */}
      <div
        className="
          hidden md:block absolute bottom-0 right-0
          h-[220px] w-[320px]
          rounded-full bg-red-900/30 blur-3xl
        "
      />

      <div
        className="
          relative z-10 mx-auto

          px-10 py-8

          max-[1024px]:px-10
          max-[1024px]:py-12

          max-[768px]:px-6
          max-[768px]:py-10

          max-[550px]:px-4
        "
      >
        {/* HEADER */}
        <div
          className="
            mb-8 md:ml-[-40px]

            max-[1024px]:ml-0
            max-[1024px]:text-center
          "
        >
          <h2
            className="
              text-gradient-red font-['Mokoto'] uppercase tracking-wide
              text-[#ff2b2b]

              text-4xl

              max-[1024px]:text-3xl

              max-[768px]:text-2xl

              max-[550px]:text-xl
            "
          >
            EQUINIX INFRA
          </h2>

          <div
            className="
              mt-6 leading-tight

              max-[768px]:mt-4
            "
          >
            <h1
              className="
                font-montserrat

                text-7xl

                max-[1200px]:text-6xl

                max-[1024px]:text-5xl

                max-[768px]:text-4xl

                max-[550px]:text-[30px]
              "
            >
              Blockchain & Crypto
            </h1>

            <h1
              className="
                mt-2 font-montserrat

                text-7xl

                max-[1200px]:text-6xl

                max-[1024px]:text-5xl

                max-[768px]:text-4xl

                max-[550px]:text-[30px]
              "
            >
              Infrastructure
            </h1>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            relative flex items-center justify-center
            min-h-[520px]

            max-[1024px]:flex-col
            max-[1024px]:items-center
            max-[1024px]:gap-10
            max-[1024px]:min-h-auto
          "
        >
          {/* SUBHEADING */}
          <div
            className="
              absolute right-0 top-[-50px]
              max-w-md
              font-montserrat font-light
              text-[15px] leading-7 text-gray-300

              max-[1024px]:static
              max-[1024px]:order-2
              max-[1024px]:max-w-[700px]
              max-[1024px]:text-center

              max-[768px]:text-[14px]
              max-[768px]:leading-6

              max-[550px]:text-[13px]
            "
          >
            Equinix AI is built on enterprise-grade infrastructure that powers
            modern blockchain ecosystems with speed, security, and scalability.
          </div>

          {/* CENTER IMAGE */}
          <div
            className="
              relative flex items-center justify-center
              min-[1025px]:h-[430px]
              min-[1025px]:w-[1220px]

              max-[1400px]:min-[1025px]:w-[1080px]
              max-[1280px]:min-[1025px]:w-[980px]
              max-[1150px]:min-[1025px]:w-[840px]

              max-[1024px]:order-3
            "
          >
            {/* RED GLOW */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="
                  rounded-full bg-red-600/20 blur-[100px]

                  h-[260px] w-[260px]

                  md:h-[380px]
                  md:w-[380px]

                  max-[768px]:h-[260px]
                  max-[768px]:w-[260px]
                "
              />
            </div>

            {/* IMAGE */}
            <img
              src={box}
              alt="Center Structure"
              className="
                relative z-10 object-contain
                animate-smoothOrbit
                drop-shadow-[0_0_40px_rgba(200,0,0,0.35)]

                w-[500px]

                max-[1400px]:w-[460px]
                max-[1280px]:w-[420px]
                max-[1150px]:w-[350px]

                max-[1024px]:w-[380px]

                max-[768px]:w-[300px]

                max-[550px]:w-[240px]
              "
            />

            {/* DESKTOP FLOATING CARDS */}
            <svg
              viewBox="0 0 1220 430"
              className="
                pointer-events-none absolute inset-0 z-20
                hidden h-full w-full min-[1025px]:block
              "
              fill="none"
            >
              <path d="M360 76H405L450 105H505" stroke="#8a8a8a" />
              <path d="M390 278H430L478 230H520" stroke="#8a8a8a" />
              <path d="M860 112H815L772 84H695" stroke="#8a8a8a" />
              <path d="M860 288H820L780 246H690" stroke="#8a8a8a" />
              {[360, 505, 390, 520, 860, 695, 860, 690].map((cx, index) => {
                const cy = [76, 105, 278, 230, 112, 84, 288, 246][index];

                return (
                  <g key={`${cx}-${cy}`}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r="11"
                      fill="rgba(255,255,255,0.45)"
                      stroke="#d6d6d6"
                    />
                    <circle cx={cx} cy={cy} r="3" fill="#ffffff" />
                  </g>
                );
              })}
            </svg>

            <div
              className="
                absolute left-0 top-11 z-30 hidden
                min-h-[64px] w-[360px]
                items-center justify-center
                border border-gray-500 bg-black/20
                px-9 py-3 text-center font-montserrat
                text-[15px] leading-7 text-gray-100
                backdrop-blur-sm min-[1025px]:flex

                max-[1400px]:w-[320px]
                max-[1400px]:px-7
                max-[1400px]:text-[14px]

                max-[1280px]:w-[290px]
                max-[1280px]:px-5
                max-[1280px]:text-[13px]

                max-[1150px]:w-[245px]
                max-[1150px]:text-[12px]
                max-[1150px]:leading-6
              "
            >
              High-performance blockchain node deployment
            </div>

            <div
              className="
                absolute left-[30px] top-[246px] z-30 hidden
                min-h-[64px] w-[360px]
                items-center justify-center
                border border-gray-500 bg-black/20
                px-9 py-3 text-center font-montserrat
                text-[15px] leading-7 text-gray-100
                backdrop-blur-sm min-[1025px]:flex

                max-[1400px]:w-[320px]
                max-[1400px]:px-7
                max-[1400px]:text-[14px]

                max-[1280px]:w-[290px]
                max-[1280px]:px-5
                max-[1280px]:text-[13px]

                max-[1150px]:w-[245px]
                max-[1150px]:text-[12px]
                max-[1150px]:leading-6
              "
            >
              Ultra-low latency connectivity for trading & DeFi
            </div>

            <div
              className="
                absolute right-0 top-20 z-30 hidden
                min-h-[72px] w-[360px]
                items-center justify-center
                border border-gray-500 bg-black/20
                px-8 py-3 text-center font-montserrat
                text-[15px] leading-7 text-gray-100
                backdrop-blur-sm min-[1025px]:flex

                max-[1400px]:w-[320px]
                max-[1400px]:px-6
                max-[1400px]:text-[14px]

                max-[1280px]:w-[290px]
                max-[1280px]:px-5
                max-[1280px]:text-[13px]

                max-[1150px]:w-[245px]
                max-[1150px]:text-[12px]
                max-[1150px]:leading-6
              "
            >
              Secure private interconnection (no reliance on public internet)
            </div>

            <div
              className="
                absolute right-0 top-[252px] z-30 hidden
                min-h-[72px] w-[360px]
                items-center justify-center
                border border-gray-500 bg-black/20
                px-8 py-3 text-center font-montserrat
                text-[15px] leading-7 text-gray-100
                backdrop-blur-sm min-[1025px]:flex

                max-[1400px]:w-[320px]
                max-[1400px]:px-6
                max-[1400px]:text-[14px]

                max-[1280px]:w-[290px]
                max-[1280px]:px-5
                max-[1280px]:text-[13px]

                max-[1150px]:w-[245px]
                max-[1150px]:text-[12px]
                max-[1150px]:leading-6
              "
            >
              Infrastructure support for exchanges, wallets, and Web3 apps
            </div>
          </div>

          {/* RESPONSIVE STACKED CARDS */}
          {/* RESPONSIVE STACKED CARDS */}
<div
  className="
    hidden

    max-[1024px]:grid
    max-[1024px]:order-4
    max-[1024px]:w-full
    max-[1024px]:max-w-[900px]
    max-[1024px]:grid-cols-2
    max-[1024px]:gap-5

    max-[768px]:grid-cols-1
  "
>
  {cards.map((card, index) => (
    <div
      key={index}
      className="
        rounded-2xl border border-gray-500
        bg-black/20 px-6 py-6
        text-center font-montserrat
        text-sm leading-7 text-gray-100
        backdrop-blur-sm

        max-[768px]:text-[13px]
        max-[768px]:leading-6

        max-[550px]:px-5
        max-[550px]:py-5
      "
    >
      {card}
    </div>
  ))}
</div>

          {/* BOTTOM DESCRIPTION */}
          <div
            className="
              absolute bottom-0 left-[-50px]
              mb-[-40px] w-[700px]
              font-montserrat
              text-[15px] leading-8 text-gray-400

              max-[1024px]:static
              max-[1024px]:order-1
              max-[1024px]:mb-0
              max-[1024px]:w-full
              max-[1024px]:max-w-[850px]
              max-[1024px]:text-center

              max-[768px]:text-[14px]
              max-[768px]:leading-7

              max-[550px]:text-[13px]
              max-[550px]:leading-6
            "
          >
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
