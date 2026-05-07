import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 12,
      }}
      className="relative overflow-hidden bg-[#0f0f0f] border border-red-600 rounded-xl px-6 py-6 text-center
  min-w-[120px] cursor-pointer group shadow-[0_0_20px_rgba(255,0,0,0.08)] hover:shadow-[0_0_40px_rgba(255,0,0,0.35)] duration-500"
    >
      {/* Animated Glow */}
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "220%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0
  w-[40%] h-full
  bg-gradient-to-r
  from-transparent
  via-red-500/30
  to-transparent
  skew-x-12"
      />
      <p className="text-white text-xs font-inter">Founded in</p>
      <h2 className="text-gradient-red font-oxanium text-2xl mt-1">1998</h2>
    </motion.div>
  );
};

export default AboutCard;
