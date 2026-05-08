import React from "react";
import girl from "../assets/homepage/robots/girl.png";

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
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-black overflow-hidden">
      {/* RED GRADIENT SIDE */}
      {/* <div className="absolute right-0 top-0 w-[40%] h-full "></div> */}
      <div className="hidden md:block absolute right-0 top-0 w-[200px] h-[150px] bg-red-900/100 blur-[100px]"></div>
      {/* HEADER */}
      <div className="text-center mb-12 relative z-10">
        <p className=" font-mokoto tracking-widest text-gradient-red text-3xl mb-2">
          SERVICES
        </p>
        <h2 className="text-3xl md:text-6xl font-montserrat ">Leadership</h2>
      </div>

      {/* CARDS */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-20">
        {leaders.map((item, i) => (
          <div
            key={i}
            className={`w-full md:w-[360px] font-montserrat min-h-auto md:min-h-[420px] rounded-lg p-6 text-center flex flex-col justify-between
              ${
                item.highlight
                  ? "bg-black border border-red-600 "
                  : "bg-gray-200 text-black"
              }`}
          >
            <h3
              className={`font-montserrat font-semibold text-2xl leading-tight mt-2 mb-1 ${
                item.name === "Charles J. Meyers" ? "text-white" : "text-black"
              }`}
            >
              {item.name} –
            </h3>

            <p className="font-montserrat font-semibold text-2xl leading-tight mb-6">
              {item.role}
            </p>

            {/* IMAGE */}
            <div className="flex justify-center mb-4 ">
              <img
                src={girl}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
              />
            </div>

            {/* DESC */}
            <p
              className={`text-sm ${
                item.highlight ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER TEXT */}
      <p className="text-center text-white font-montserrat italic mt-12 text-3xl relative z-10">
        Driven By Leadership. Powered By Network Growth.
      </p>
    </section>
  );
};

export default Leadership;
