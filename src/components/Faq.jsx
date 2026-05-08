import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import hand1 from "../assets/homepage/robots/hand_question.png";

const faqData = [
  {
    question: "What is Equinix’s role in crypto?",
    answer:
      "Equinix provides the infrastructure backbone for blockchain networks, crypto exchanges, and DeFi platforms.",
  },
  {
    question: "How does Equinix support Web3?",
    answer:
      "Equinix enables secure decentralized infrastructure with high-speed interconnection for Web3 ecosystems.",
  },
  {
    question: "Is Equinix secure for crypto operations?",
    answer:
      "Yes, Equinix infrastructure is built with enterprise-grade security and global connectivity standards.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute right-4 top-0 h-full w-[1px] bg-gray-800" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start min-h-[90vh]">
          {/* LEFT SECTION */}
          <div>
            <h3 className="text-gradient-red text-[32px] font-mokoto uppercase mb-4">
              FAQ
            </h3>

            <h1 className="text-[55px] leading-[82px] tracking-[-2px] font-montserrat mb-12 uppercase">
              Frequently Asked
              <br />
              Questions
            </h1>

            <div className="flex flex-col gap-6">
              {faqData.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    layout
                    transition={{ duration: 0.4 }}
                    className="bg-[#0e0e0e] rounded-[24px] border border-[#141414] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-7 flex items-center justify-between text-left"
                    >
                      <span className="text-[18px] text-gray-200 font-montserrat">
                        {faq.question}
                      </span>

                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          <div className="px-8 pb-8 text-gray-400 text-[14px] leading-8 font-montserrat max-w-[520px]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="pt-12 relative">
            <p className="text-gray-300 text-[15px] leading-8 max-w-[520px] font-montserrat mb-10">
              Equinix enables secure crypto, Web3, and DeFi operations with
              high-performance infrastructure, low latency, connectivity,
              enterprise security, and global interconnection trusted by
              financial institutions worldwide.
            </p>

            <div className="flex items-start gap-8">
              {/* DOTS (NOW ONLY 3 & CONTROLLED BY FAQ INDEX) */}
              <div className="flex flex-col gap-4 justify-center mt-52 mr-6">
                {[0, 1, 2].map((dot) => {
                  const isActive = activeIndex === dot;

                  return (
                    <motion.div
                      key={dot}
                      animate={{
                        scale: isActive ? [1, 1.4, 1] : 1,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: isActive ? Infinity : 0,
                      }}
                      className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                        isActive
                         ? "bg-gradient-to-b from-[#FF0404] via-[#FF7878] to-[#CF0000] border-[#FF0404] "
                         : "bg-transparent border-red-500"
                      }`}
                    />
                  );
                })}
              </div>

              {/* IMAGE (STATIC ONLY 1 IMAGE) */}
              <div>
                <div className="w-[320px] sm:w-[380px] mt-14 md:w-[450px] h-[300px] relative overflow-hidden rounded-[30px]">
                  <motion.img
                    src={hand1}
                    alt="FAQ"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className=" text-gray-300 text-[14px] mt-6  leading-8 max-w-[450px] font-montserrat">
                  Equinix powers crypto and Web3 with secure, high-performance
                  infrastructure, enabling blockchain deployment, DeFi
                  connectivity, and enterprise-grade interconnection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
