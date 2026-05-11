import React from "react";
import robot from "../assets/homepage/robots/robot1.png";

const features = [
  "Ecosystem Participation",
  "Referral-Based Growth",
  "DeFi Staking & Utilities",
  "Node & Infrastructure Support",
];

const floatingTags = [
  {
    text: "Global Community Builders",
    className: `
      top-[-16%] left-[-28%] lg:left-[-95%] rotate-[-25deg]
      max-[1024px]:left-[-92%] max-[1024px]:top-[-18%]
    `,
  },
  {
    text: "Web3 Marketers",
    className: `
      top-[2%] left-[-30%]
      max-[1024px]:left-[-40%] max-[1024px]:top-[0%]
    `,
  },
  {
    text: "Blockchain Developer",
    className: `
      top-[-16%] right-[-22%] lg:right-[-58%] rotate-[25deg]
      max-[1024px]:right-[-58%] max-[1024px]:top-[-18%]
    `,
  },
  {
    text: "AI Engineers",
    className: `
      top-[8%] right-[-16%]
      max-[1024px]:right-[-28%] max-[1024px]:top-[4%]
    `,
  },
];

const commonContentClasses = `
    hero-content
  lg:w-[29%]
`;

const commonHeadingClasses = `
    hero-heading
  leading-[1.02]
`;

const commonParagraphClasses = `
    hero-paragraph
  mx-auto max-w-[480px]
`;

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* BACKGROUND TEXT */}
        <h1
          className="
            absolute left-1/2 top-[20px] z-0 -translate-x-1/2
            scale-x-[1.2] whitespace-nowrap bg-[linear-gradient(90deg,#ff1d1d_0%,#ff4040_25%,#8b0000_50%,#ff4040_75%,#ff1d1d_100%)]
    bg-[length:250%_100%]
    animate-textSweep
            bg-clip-text font-mokoto leading-none tracking-[0.04em]
            text-transparent pointer-events-none select-none
            text-[42vw] sm:text-[20vw] md:text-[20vw]
            lg:text-[18vw] xl:text-[18vw]
          [filter:drop-shadow(0_15px_4px_rgba(100,30,20,0.55))]
            max-[1024px]:top-[10px]
            max-[1024px]:text-[22vw]

            max-[996px]:top-[20px]
            max-[996px]:text-[24vw]

            max-[768px]:top-[20px]
            max-[768px]:text-[25vw]

            max-[640px]:top-[50px]
            max-[640px]:text-[20vw]
          "
        >
          EQUINIX
        </h1>

        {/* HERO LAYOUT */}
        <div
          className="
            relative flex min-h-[760px] items-start justify-between gap-8 xl:gap-0

            max-[1024px]:min-h-[680px]
            max-[996px]:min-h-[680px]
            max-[996px]:gap-4

            max-[768px]:min-h-auto
            max-[768px]:flex-col
            max-[768px]:items-center
            max-[768px]:justify-start
            max-[768px]:gap-14
            max-[768px]:pt-[180px]
            max-[768px]:pb-14
            max-[768px]:text-center
          "
        >
          {/* LEFT CONTENT */}
          <div
            className={`
              ${commonContentClasses}
              lg:w-[29%]

              mt-[120px] left-[6%] lg:mt-[250px] lg:pr-2

              max-[1024px]:mt-[210px]
              max-[1024px]:left-[2%]
              max-[1024px]:w-[24%]

              max-[996px]:mt-[250px]
              max-[996px]:w-[28%]
              max-[996px]:left-0

              max-[768px]:order-1
              max-[768px]:mt-0
              max-[768px]:w-full
            `}
          >
            <h2
              className={`
                ${commonHeadingClasses}
                leading-[1.02]
                text-[36px]

                max-[1024px]:text-[30px]
                max-[996px]:text-[22px]
                max-[768px]:text-[40px]
                max-[480px]:text-[28px]
              `}
            >
              Future-Ready <br />
              <span className="text-[#ff1d1d]">Crypto</span>
              <br />
              Infrastructure
            </h2>

            <p
              className={`
                ${commonParagraphClasses}
                mx-auto max-w-[480px] text-sm sm:text-base lg:mx-0

                max-[996px]:text-[13px]
                max-[996px]:leading-[1.7]

                max-[768px]:mx-auto
                max-[768px]:text-[16px]
                max-[768px]:leading-[1.8]
              `}
            >
              Connect, scale, and deploy Web3, blockchain, and AI on a
              world-class infrastructure trusted by enterprises.
            </p>

            <button
              className="
                mt-8 border border-red-600 px-9 py-3 text-sm font-medium
                transition hover:bg-red-600/10

                max-[1024px]:px-7
                max-[1024px]:py-2.5

                max-[996px]:px-5
                max-[996px]:py-2
                max-[996px]:text-[12px]

                max-[480px]:px-6
              "
            >
              JOIN NOW
            </button>
          </div>

          {/* CENTER IMAGE */}
          <div
            className="
              relative z-20 mt-10 flex w-full items-center justify-center
              lg:mt-[150px] lg:w-[30%]

              max-[1024px]:mt-[130px]
              max-[1024px]:w-[28%]

              max-[996px]:mt-[170px]
              max-[996px]:w-[34%]

              max-[768px]:order-2
              max-[768px]:mt-0
              max-[768px]:w-full
            "
          >
            <div className="relative flex items-center justify-center ">
              <img
                src={robot}
                alt="robot"
                className="
                  relative z-20 max-w-full object-contain
                  w-[260px] sm:w-[340px] md:w-[430px]
                  lg:w-[500px] xl:w-[580px] 2xl:w-[650px]

                  -translate-y-6 sm:-translate-y-10
                  md:-translate-y-14 xl:-translate-y-24

                  max-[1024px]:w-[360px]

                  max-[996px]:w-[290px]
                  max-[996px]:translate-y-0

                  max-[768px]:w-[300px]

                  max-[480px]:w-[250px]
                "
              />
              {/* RED SCANNER */}
<div
  className="
    absolute z-30
    h-[20px] w-full

    bg-gradient-to-b
    from-transparent
    via-red-700
    to-transparent

    blur-[2px]
    animate-scanner shadow-[0_0_9px_rgba(255,0,0,0.4)]
    pointer-events-none
  "
></div>

              {/* FLOATING TAGS */}
              {floatingTags.map((tag, index) => (
                <div
                  key={index}
                  className={`
                    floating-tag
  max-[1024px]:scale-[0.82]
  max-[996px]:hidden
  ${tag.className}
                  `}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`
              ${commonContentClasses}
              lg:w-[27%]

              mt-10 lg:mt-[250px]

              max-[1024px]:mt-[210px]
              max-[1024px]:w-[24%]

              max-[996px]:mt-[250px]
              max-[996px]:w-[28%]

              max-[768px]:order-3
              max-[768px]:mt-0
              max-[768px]:flex
              max-[768px]:w-full
              max-[768px]:max-w-[560px]
              max-[768px]:flex-col
              max-[768px]:items-center
              max-[768px]:mx-auto
            `}
          >
            <h2
              className={`
                ${commonHeadingClasses}
                max-w-[520px]
                leading-[1.05]
                text-[36px]

                max-[1024px]:text-[30px]
                max-[996px]:text-[22px]
                max-[768px]:text-[34px]
                max-[480px]:text-[28px]
              `}
            >
              A <span className="text-[#ff1d1d]">Smarter</span> Way to
              <br />
              Earn in Web3
            </h2>

            <p
              className={`
                ${commonParagraphClasses}
                mx-auto max-w-[500px] text-sm sm:text-base lg:mx-0

                max-[996px]:text-[13px]
                max-[996px]:leading-[1.7]

                max-[768px]:mx-auto
                max-[768px]:text-[16px]
                max-[768px]:leading-[1.8]
              `}
            >
              Equinix AI introduces a Network Rewards Model where users earn
              through:
            </p>

            {/* FEATURES */}
            <div
              className="
                mt-6 flex flex-col gap-3
                items-center lg:items-start
                max-[768px]:items-center
              "
            >
              {features.map((item) => (
                <div
                  key={item}
                  className="
                    feature-item
  max-[1024px]:px-3
  max-[1024px]:py-2
  max-[996px]:py-1.5

                   
                  "
                >
                  <span
                    className="
                     feature-dot
                    "
                  />

                  <span className="text-[16px] text-gray-200 sm:text-sm max-[996px]:text-[12px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
