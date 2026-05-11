import React from "react";
import robot from "../assets/homepage/robots/robot3.png";
import { motion } from "framer-motion";

const roadmapItems = [
  "Scaling to 100 million users by 2027",
  "Launching a high-utility token ecosystem in 2028",
  "Expanding AI-driven financial automation",
  "Creating a fully interconnected global Web3 network",
];

const FutureVision = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Top Left Glow */}
      <div
        className="
          hidden md:block absolute
          top-[-120px] left-[-120px]
          h-[320px] w-[320px]
          rounded-full bg-red-900/40 blur-3xl
        "
      />

      <div
        className="
          relative z-10 mx-auto max-w-7xl

          px-6 py-10

          max-[1024px]:px-8
          max-[1024px]:py-14

          max-[768px]:px-6
          max-[768px]:py-12

          max-[550px]:px-4
          max-[550px]:py-10
        "
      >
        <div
          className="
            grid min-h-[90vh] items-center

            grid-cols-2 gap-20

            max-[1200px]:gap-14

            max-[1024px]:gap-10

            max-[768px]:grid-cols-1
            max-[768px]:gap-16
          "
        >
          {/* LEFT IMAGE SECTION */}
          <div
            className="
              relative flex items-center justify-center
              group perspective-[2000px]

              max-[768px]:order-1
            "
          >
            {/* Animated Background Glow */}
            <div
              className="
                absolute inset-0
                scale-110 rounded-[40px]
                bg-red-500/10 blur-[80px]
                opacity-60 transition-all duration-700 ease-out
                group-hover:opacity-100
              "
            />

            {/* Rotating Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="
                absolute rounded-full border border-red-500/20

                h-[650px] w-[650px]

                max-[1200px]:h-[560px]
                max-[1200px]:w-[560px]

                max-[1024px]:h-[460px]
                max-[1024px]:w-[460px]

                max-[768px]:h-[380px]
                max-[768px]:w-[380px]

                max-[550px]:h-[280px]
                max-[550px]:w-[280px]
              "
            />

            {/* Rotating Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="
                absolute rounded-full border border-red-400/10

                h-[500px] w-[500px]

                max-[1200px]:h-[420px]
                max-[1200px]:w-[420px]

                max-[1024px]:h-[360px]
                max-[1024px]:w-[360px]

                max-[768px]:h-[300px]
                max-[768px]:w-[300px]

                max-[550px]:h-[220px]
                max-[550px]:w-[220px]
              "
            />

            {/* Floating Particles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="
                absolute top-16 left-10
                rounded-full bg-red-500 blur-[2px]

                h-3 w-3

                max-[550px]:left-4
                max-[550px]:top-8
              "
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="
                absolute bottom-24 right-10
                rounded-full bg-white blur-[2px]

                h-4 w-4

                max-[550px]:bottom-10
                max-[550px]:right-4
              "
            />

            {/* Main 3D Card */}
            <motion.div
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 1.2,
              }}
              className="
                relative preserve-3d
                transition-all duration-500 ease-out
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glass Reflection */}
              <div
                className="
                  pointer-events-none absolute inset-0 z-20
                  rounded-[32px]
                  bg-gradient-to-tr
                  from-white/10 via-transparent to-transparent
                "
              />

              {/* Border Glow */}
              <div
                className="
                  absolute inset-0 rounded-[32px]
                  border border-red-500/30
                  shadow-[0_0_40px_rgba(255,0,0,0.35)]
                  opacity-0 transition-all duration-700 ease-out
                  group-hover:opacity-100
                "
              />

              {/* Robot Image */}
              <motion.img
                src={robot}
                alt="Robot Vision"
                className="
                  relative z-10 object-cover
                  rounded-[30px]
                  shadow-[0_0_80px_rgba(255,0,0,0.25)]
                  transition-all duration-700 ease-out

                  w-[500px] h-[620px]

                  max-[1200px]:w-[420px]
                  max-[1200px]:h-[540px]

                  max-[1024px]:w-[360px]
                  max-[1024px]:h-[460px]

                  max-[768px]:w-[320px]
                  max-[768px]:h-[420px]

                  max-[550px]:w-[240px]
                  max-[550px]:h-[320px]
                "
                style={{
                  transform: "translateZ(60px)",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative

              max-[768px]:order-2
              max-[768px]:text-center
            "
          >
            <h3
              className="
                text-gradient-red font-['Mokoto'] uppercase tracking-wide

                mb-4 text-[36px]

                max-[1200px]:text-[30px]

                max-[1024px]:text-[26px]

                max-[768px]:text-[22px]

                max-[550px]:text-[18px]
              "
            >
              Vision
            </h3>

            <h1
              className="
                font-montserrat tracking-[-2px]

                mb-8 text-[72px] leading-[82px]

                max-[1200px]:text-[60px]
                max-[1200px]:leading-[70px]

                max-[1024px]:text-[50px]
                max-[1024px]:leading-[60px]

                max-[768px]:mb-6
                max-[768px]:text-[42px]
                max-[768px]:leading-[52px]

                max-[550px]:text-[32px]
                max-[550px]:leading-[40px]
              "
            >
              Future Vision
            </h1>

            <p
              className="
                font-montserrat text-gray-300

                mb-6 max-w-[500px]
                text-[15px] leading-8

                max-[1024px]:text-[14px]
                max-[1024px]:leading-7

                max-[768px]:mx-auto
                max-[768px]:max-w-full

                max-[550px]:text-[13px]
                max-[550px]:leading-6
              "
            >
              Equinix AI is building a global decentralized financial ecosystem
              designed for mass adoption.
            </p>

            <p
              className="
                font-montserrat text-gray-400

                mb-14 text-[15px] leading-8

                max-[1024px]:mb-10
                max-[1024px]:text-[14px]
                max-[1024px]:leading-7

                max-[550px]:mb-8
                max-[550px]:text-[13px]
                max-[550px]:leading-6
              "
            >
              Our future roadmap includes:
            </p>

            {/* ROADMAP */}
            <div
              className="
                relative ml-2

                max-[768px]:ml-0
              "
            >
              {/* Vertical Line */}
              <div
                className="
    absolute left-[10px] top-3 bottom-3
    w-[2px] bg-gradient-to-b from-[#000000] via-[#CF0000] to-[#000000]
  "
              />
              <div
                className="
                  flex flex-col gap-14

                  max-[1024px]:gap-10

                  max-[550px]:gap-8
                "
              >
                {roadmapItems.map((item, index) => (
                  <div
                    key={index}
                    className="
    relative flex items-center gap-6

    max-[1024px]:gap-5

    max-[550px]:gap-4
  "
                  >
                    {/* Dot */}
                    <div
                      className="
                        relative z-10
                        flex items-center justify-center
                        rounded-full border border-red-500 bg-black

                        h-6 w-6
                      "
                    >
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#FF0404] via-[#FF7878] to-[#CF0000]" />
                    </div>

                    {/* Text */}
                    <p
                      className="
    font-montserrat text-gray-400

    text-[20px] leading-8

    max-[1200px]:text-[18px]

    max-[1024px]:text-[16px]
    max-[1024px]:leading-7

    max-[550px]:text-[14px]
    max-[550px]:leading-6
  "
                    >
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
  );
};

export default FutureVision;
