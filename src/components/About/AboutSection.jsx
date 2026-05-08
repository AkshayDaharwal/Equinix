import robot from "../../assets/homepage/robots/robot4.png";
import AboutCard from "./AboutCard";
import StrengthCard from "./Strength";
import { motion } from "framer-motion";

const highlights = [
  "Dense ecosystem of financial services, cloud, healthcare & IT companies",
  "Strategic hub for crypto exchanges and blockchain networks",
  "High-speed interconnection for global trading and DeFi platforms",
];

const strengths = [
  "260+ Data Centers (IBX)",
  "10,500+ Global Customers",
  "33 Countries Presence",
  "REIT Structure (Since 2015)",
];

const AboutSection = () => {
  return (
    <section className="bg-black px-16 py-2 text-white max-[768px]:px-6">
      {/* TOP SECTION */}
      <div
        className="
          flex gap-10

          max-[768px]:flex-col
          max-[768px]:items-center
          max-[768px]:gap-14
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            relative flex w-1/2 items-center justify-center

            max-[768px]:order-1
            max-[768px]:w-full
          "
        >
          {/* OUTER RED GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute h-[420px] w-[420px]
              rounded-full bg-red-600/20 blur-[120px]

              max-[1200px]:h-[360px]
              max-[1200px]:w-[360px]

              max-[992px]:h-[300px]
              max-[992px]:w-[300px]

              max-[768px]:h-[280px]
              max-[768px]:w-[280px]
            "
          />

          {/* ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute h-[460px] w-[460px]
              rounded-full border border-dashed border-red-500/30

              max-[1200px]:h-[400px]
              max-[1200px]:w-[400px]

              max-[992px]:h-[340px]
              max-[992px]:w-[340px]

              max-[768px]:h-[320px]
              max-[768px]:w-[320px]
            "
          />

          {/* ROBOT IMAGE */}
          <motion.img
            src={robot}
            alt="robot"
            className="
              relative z-10 w-[420px] object-contain
              drop-shadow-[0_0_40px_rgba(255,0,0,0.35)]

              max-[1200px]:w-[360px]

              max-[992px]:w-[300px]

              max-[768px]:w-[280px]
            "
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1.5, -1.5, 0],
              scale: [1, 1.02, 1],
            }}
            style={{ transformOrigin: "center center" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex w-1/2 flex-col gap-6

            max-[768px]:order-2
            max-[768px]:w-full
            max-[768px]:items-center
            max-[768px]:text-center
          "
        >
          {/* TOP TEXT */}
          <div>
            <p
              className="
                bg-clip-text uppercase tracking-[4px]
                text-transparent text-gradient-red font-mokoto

                text-4xl

                max-[1200px]:text-3xl
                max-[992px]:text-2xl

                max-[768px]:text-2xl
              "
            >
              ABOUT US
            </p>

            <h2
              className="
                mt-2 font-montserrat leading-tight

                text-6xl

                max-[1200px]:text-5xl
                max-[992px]:text-[42px]

                max-[768px]:text-4xl
                max-[480px]:text-3xl
              "
            >
              WHO WE ARE
            </h2>
          </div>

          {/* CARD + TEXT */}
          <div
            className="
              flex items-start gap-6

              max-[768px]:flex-col
              max-[768px]:items-center
            "
          >
            <AboutCard />

            <p
              className="
                max-w-[400px] font-montserrat
                leading-relaxed text-gray-400

                text-sm

                max-[992px]:text-[13px]

                max-[768px]:text-center
              "
            >
              “Equinix, founded in 1998 and headquartered in Redwood City, is a
              global leader in digital infrastructure, enabling secure,
              scalable, and high-performance interconnection for businesses
              worldwide.”
            </p>
          </div>

          {/* ECOSYSTEM */}
          <div className="flex flex-col gap-3">
            <h3
              className="
                font-montserrat font-semibold

                text-xl

                max-[992px]:text-[18px]
              "
            >
              EQUINIX SINGAPORE ECOSYSTEM
            </h3>

            <p
              className="
                font-montserrat text-gray-400

                text-sm

                max-[992px]:text-[13px]
              "
            >
              Singapore is home to one of the world’s top internet peering
              exchanges, connecting Asia-Pacific networks globally.
            </p>
          </div>

          {/* KEY HIGHLIGHTS */}
          <div className="flex flex-col gap-3">
            <h4
              className="
                font-semibold text-gray-200

                text-lg

                max-[992px]:text-[16px]
              "
            >
              Key Highlights:
            </h4>

            <ul
              className="
                space-y-2 font-montserrat text-gray-400

                text-sm

                max-[992px]:text-[13px]
              "
            >
              {highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* COMPANY STRENGTH */}
      <div className="mt-12 flex flex-col gap-20">
        {/* TOP ROW */}
        <div
          className="
            relative flex items-start gap-10

            max-[768px]:flex-col
            max-[768px]:items-center
            max-[768px]:text-center
          "
        >
          {/* LEFT */}
          <div className="relative w-1/2 flex-1 max-[768px]:w-full">
            <h3
              className="
                font-montserrat font-semibold tracking-wide

                text-[30px]

                max-[992px]:text-[24px]

                max-[768px]:text-[26px]
              "
            >
              COMPANY STRENGTH
            </h3>

            <p
              className="
                mt-2 font-montserrat font-bold text-gray-300

                text-[16px]

                max-[992px]:text-[14px]
              "
            >
              Equinix Global Scale, Reach & Infrastructure Leadership
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div
            className="
              relative w-full w-1/2 flex-1 pl-6

              max-[768px]:w-full
              max-[768px]:pl-0
            "
          >
            <p
              className="
                font-montserrat leading-relaxed text-gray-400

                text-sm

                max-[992px]:text-[13px]
              "
            >
              Delivering unmatched global infrastructure with extensive data
              centers, diverse customers, and scalable presence, driving secure
              connectivity and sustained digital growth worldwide.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            flex flex-wrap gap-40

            max-[1200px]:gap-20
            max-[992px]:gap-14

            max-[768px]:justify-center
            max-[768px]:gap-8
          "
        >
          {strengths.map((item) => (
            <StrengthCard key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;