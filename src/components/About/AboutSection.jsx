import robot from "../../assets/homepage/robots/robot4.png";
import AboutCard from "./AboutCard";
import StrengthCard from "./Strength";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-black text-white px-16 py-20">
      <div className="flex gap-10">
        {/* LEFT IMAGE */}
        {/* LEFT IMAGE */}
        <div className="w-1/2 relative flex justify-center items-center">
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
            className="absolute w-[420px] h-[420px]
    rounded-full bg-red-600/20 blur-[120px]"
          />

          {/* ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[460px] h-[460px]
    rounded-full border border-red-500/30
    border-dashed"
          />

          {/* ROBOT IMAGE */}
          <motion.img
            src={robot}
            alt="robot"
            className="w-[420px] object-contain relative z-10
    drop-shadow-[0_0_40px_rgba(255,0,0,0.35)]"
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
        <div className="w-1/2 flex flex-col gap-6">
          {/* TOP TEXT */}
          <div>
            <p className="text-transparent font-mokoto bg-clip-text text-gradient-red text-4xl tracking-[4px] uppercase">
              ABOUT US
            </p>

            <h2 className="text-6xl font-montserrat mt-2 leading-tight">
              WHO WE ARE
            </h2>
          </div>

          {/* CARD + TEXT */}
          <div className="flex items-start gap-6">
            <AboutCard />

            <p className="text-gray-400 font-montserrat text-sm leading-relaxed max-w-[400px]">
              “Equinix, founded in 1998 and headquartered in Redwood City, is a
              global leader in digital infrastructure, enabling secure,
              scalable, and high-performance interconnection for businesses
              worldwide.”
            </p>
          </div>

          {/* ECOSYSTEM */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold font-montserrat">
              EQUINIX SINGAPORE ECOSYSTEM
            </h3>

            <p className="text-gray-400 font-montserrat text-sm">
              Singapore is home to one of the world’s top internet peering
              exchanges, connecting Asia-Pacific networks globally.
            </p>
          </div>

          {/* KEY HIGHLIGHTS */}
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold text-gray-200">
              Key Highlights:
            </h4>

            <ul className="text-gray-400 font-montserrat text-sm space-y-2">
              <li>
                • Dense ecosystem of financial services, cloud, healthcare & IT
                companies
              </li>
              <li>
                • Strategic hub for crypto exchanges and blockchain networks
              </li>
              <li>
                • High-speed interconnection for global trading and DeFi
                platforms
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COMPANY STRENGTH (INSIDE RIGHT COLUMN) */}
      <div className="flex flex-col gap-6 mt-12 ">
        {/* TOP ROW */}
        <div className="relative flex items-start gap-10">
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold tracking-wide">
              COMPANY STRENGTH
            </h3>

            <p className="text-gray-300 font-montserrat text-sm mt-2">
              Equinix Global Scale, Reach & Infrastructure Leadership
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex-1 pl-6 ">
            <p className="text-gray-400 font-montserrat text-sm leading-relaxed">
              Delivering unmatched global infrastructure with extensive data
              centers, diverse customers, and scalable presence, driving secure
              connectivity and sustained digital growth worldwide.
            </p>
          </div>
          <div className="relative w-[200px] h-[150px] bg-red-900/100 blur-[100px]"></div>
        </div>

        {/* CARDS */}
        <div className="flex gap-40 flex-wrap">
          <StrengthCard text="260+ Data Centers (IBX)" />
          <StrengthCard text="10,500+ Global Customers" />
          <StrengthCard text="33 Countries Presence" />
          <StrengthCard text="REIT Structure (Since 2015)" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
