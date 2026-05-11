import React from "react";
import girl from "../assets/homepage/robots/girl.png";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Adaire Fox-Martin",
    role: "CEO & President",
    desc: "Leads global strategy and ecosystem growth, driving the vision of a scalable AI-powered Web3 network focused on mass adoption and long-term sustainability.",
    highlight: false,
  },
  {
    name: "Charles J. Meyers",
    role: "Executive Chairman",
    desc: "Provides strategic direction and governance, ensuring secure, transparent, and sustainable network expansion across global markets.",
    highlight: true,
  },
  {
    name: "Yee May Leong",
    role: "Managing Director",
    desc: "Oversees regional growth and community expansion, strengthening the network-driven ecosystem across Asia-Pacific.",
    highlight: false,
  },
];

const Leadership = () => {
  return (
    <section
      className="
        relative overflow-hidden bg-black

        py-20 px-6

        max-[1024px]:px-10
        max-[1024px]:py-16

        max-[768px]:px-6
        max-[768px]:py-14

        max-[550px]:px-4
        max-[550px]:py-12
      "
    >
      {/* RED GLOW */}
      <div
        className="
          hidden md:block absolute right-0 top-0
          w-[200px] h-[150px]
          bg-red-900/100 blur-[100px]
        "
      />

      {/* HEADER */}
      <div
        className="
          relative z-10 mb-12 text-center

          max-[768px]:mb-10

          max-[550px]:mb-8
        "
      >
        <p
          className="
            font-['Mokoto'] tracking-widest
            text-gradient-red mb-2

            text-3xl

            max-[1024px]:text-2xl

            max-[768px]:text-xl

            max-[550px]:text-lg
          "
        >
          SERVICES
        </p>

        <h2
          className="
            font-montserrat text-white

            text-6xl

            max-[1024px]:text-5xl

            max-[768px]:text-4xl

            max-[550px]:text-3xl
          "
        >
          Leadership
        </h2>
      </div>

      {/* CARDS */}
      <div
        className="
          relative z-10
          flex flex-col items-center justify-center

          gap-6

          max-[1024px]:gap-5

          min-[769px]:flex-row
          min-[769px]:items-stretch
        "
      >
        {leaders.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className={`
              group relative overflow-hidden
              transform-gpu
              [transform-style:preserve-3d]

              flex flex-col justify-between
              text-center font-montserrat
              backdrop-blur-xl

              rounded-2xl

              w-full
              max-w-[380px]

              min-h-[420px]

              p-6

              max-[1024px]:max-w-[320px]
              max-[1024px]:min-h-[390px]
              max-[1024px]:p-5

              max-[768px]:max-w-[520px]
              max-[768px]:min-h-[360px]

              max-[550px]:min-h-[330px]
              max-[550px]:p-4

              ${
                item.highlight
                  ? "border border-red-600 bg-black text-white"
                  : "bg-gray-200 text-black"
              }

              shadow-[0_0_30px_rgba(255,0,0,0.08)]
              hover:shadow-[0_0_60px_rgba(255,0,0,0.30)]
              duration-500
            `}
          >
            {/* AI SHINE EFFECT */}
            <motion.div
              initial={{ x: "-120%" }}
              whileHover={{ x: "250%" }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="
                absolute left-0 top-0 z-20
                h-full w-[35%]
                skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />

            {/* CYBER GRID */}
            <div
              className="
                absolute inset-0 opacity-10
                bg-[linear-gradient(rgba(255,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.3)_1px,transparent_1px)]
                bg-[size:30px_30px]
              "
            />

            {/* TOP GLOW */}
            <div className="absolute left-0 top-0 h-24 w-24 bg-red-500/20 blur-[60px]" />

            {/* BOTTOM GLOW */}
            <div className="absolute bottom-0 right-0 h-24 w-24 bg-red-500/20 blur-[60px]" />

            {/* ANIMATED GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -right-10 -top-10
                h-40 w-40
                rounded-full
                bg-red-500/20
                blur-[80px]
              "
            />

            {/* NAME */}
            <h3
              className={`
                mt-2 mb-1
                font-montserrat font-semibold
                leading-tight

                text-2xl

                max-[1024px]:text-[22px]

                max-[768px]:text-[20px]

                max-[550px]:text-[18px]

                ${
                  item.name === "Charles J. Meyers"
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              {item.name} –
            </h3>

            {/* ROLE */}
            <p
              className="
                mb-6
                font-montserrat font-semibold
                leading-tight

                text-2xl

                max-[1024px]:text-[22px]

                max-[768px]:text-[20px]

                max-[550px]:mb-5
                max-[550px]:text-[18px]
              "
            >
              {item.role}
            </p>

            {/* IMAGE */}
            <motion.img
              src={girl}
              alt={item.name}
              className="
                mx-auto rounded-full object-cover
                border border-red-500/30
                shadow-[0_0_30px_rgba(255,0,0,0.25)]

                w-28 h-28

                max-[1024px]:w-24
                max-[1024px]:h-24

                max-[550px]:w-20
                max-[550px]:h-20
              "
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -12,
                rotateX: 6,
                rotateY: -6,
                scale: 1.03,
              }}
            />

            {/* DESCRIPTION */}
            <p
              className={`
                mt-6 leading-relaxed

                text-sm

                max-[1024px]:text-[13px]

                max-[768px]:text-[14px]

                max-[550px]:mt-5
                max-[550px]:text-[12px]
                max-[550px]:leading-6

                ${
                  item.highlight ? "text-gray-400" : "text-gray-700"
                }
              `}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FOOTER */}
      <p
        className="
          relative z-10
          mt-12 text-center
          font-montserrat italic text-white

          text-3xl

          max-[1024px]:text-[26px]

          max-[768px]:mt-10
          max-[768px]:text-[22px]

          max-[550px]:mt-8
          max-[550px]:text-[18px]
          max-[550px]:leading-8
        "
      >
        Driven By Leadership. Powered By Network Growth.
      </p>
    </section>
  );
};

export default Leadership;