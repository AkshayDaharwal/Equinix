import robot from "../assets/homepage/robots/robot1.png";


const Hero = () => {
  return (
   <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 pt-32 md:pt-36 lg:pt-40 pb-10 gap-10">


 <h1 className="absolute left-1/2 -translate-x-1/2 
 text-[36vw] md:text-[26vw] lg:text-[20vw] -top-[100px] md:-top-[100px] lg:-top-[50px]
  font-mokoto tracking-widest 
  text-gradient-red whitespace-nowrap 
  pointer-events-none z-0 select-none  ">
  EQUINIX
</h1>



      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/3 z-10 mt-10 lg:mt-[120px] text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Future-Ready <br />
          <span className="text-gradient-red">Crypto</span> <br />
          Infrastructure
        </h2>

        <p className="text-gray-400 text-sm mt-4 font-montserrat leading-relaxed">
          Connect, scale, and deploy Web3, blockchain, and AI
          on a world-class infrastructure trusted by enterprises.
        </p>

        <button className="mt-6 bg-red-600 px-6 py-2 text-sm hover:bg-red-700 transition">
          JOIN NOW
        </button>
      </div>

      {/* CENTER */}
      <div className="w-full lg:w-1/3 relative flex justify-center z-10">
<img src={robot} className="w-[250px] md:w-[320px] lg:w-[420px]  -translate-y-10 md:-translate-y-16 lg:-translate-y-24" />

        {/* FLOAT TAGS */}
        <div className="hidden md:block absolute top-10 left-[-20px] bg-black border border-gray-700 px-3 py-1 text-xs rounded-full">
          Global Community Builders
        </div>

        <div className="hidden md:block  absolute top-20 right-[-30px] bg-black border border-gray-700 px-3 py-1 text-xs rounded-full">
          Blockchain Developer
        </div>

        <div className="hidden md:block  absolute bottom-20 left-[-30px] bg-black border border-gray-700 px-3 py-1 text-xs rounded-full">
          Web3 Marketers
        </div>

        <div className="hidden md:block  absolute bottom-10 right-[-20px] bg-black border border-gray-700 px-3 py-1 text-xs rounded-full">
          AI Engineers
        </div>

      </div>

      {/* RIGHT SIDE */}
    <div className="w-full lg:w-1/4 z-10 mt-10 lg:mt-[210px] text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          A <span className="text-gradient-red">Smarter</span> Way to <br />
          Earn in Web3
        </h2>

        <span className="text-gray-400 font-montserrat text-sm mt-4 leading-relaxed">
        Equinix AI introduces a Network Rewards Model where users earn through:</span>

      <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
  {[
    "Ecosystem Participation",
    "Referral-Based Growth",
    "DeFi Staking & Utilities",
    "Node & Infrastructure Support",
  ].map((item, i) => (
    <div
      key={i}
      className="flex items-center gap-2 bg-[#110101] border font-montserrat border-gray-800 rounded-full px-4 py-2 text-sm hover:border-red-600 transition"
    >
      {/* Gradient Circle */}
      <span className="w-3 h-3 bg-gradient-to-r from-[#FFFFFF] via-[#FF0404] to-[#CF0000] rounded-full"></span>

      {/* Text */}
      <span>{item}</span>
    </div>
  ))}
</div>

      </div>

    </section>
  );
};

export default Hero;