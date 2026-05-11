
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
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* RIGHT BORDER */}
      <div className="absolute right-4 top-0 hidden h-full w-[1px] bg-gray-800 md:block" />

      <div
        className="
          relative z-10 mx-auto max-w-7xl

          px-6 py-10

          max-[1024px]:px-8
          max-[1024px]:py-12

          max-[768px]:px-6
          max-[768px]:py-10

          max-[550px]:px-4
          max-[550px]:py-8
        "
      >
        <div
          className="
            grid min-h-[90vh] items-start

            grid-cols-2 gap-16

            max-[1200px]:gap-10

            max-[996px]:grid-cols-2
            max-[996px]:gap-6

            max-[768px]:grid-cols-1
            max-[768px]:gap-12
          "
        >
          {/* LEFT SECTION */}
          <div className="max-[768px]:text-center">
            <h3
              className="
                text-gradient-red font-['Mokoto'] uppercase

                mb-4 text-[32px]

                max-[1024px]:text-[28px]

                max-[768px]:text-[24px]

                max-[550px]:mb-3
                max-[550px]:text-[20px]
              "
            >
              FAQ
            </h3>

            <h1
              className="
                font-['Montserrat'] uppercase tracking-[-2px]

                mb-12 text-[55px] leading-[82px]

                max-[1200px]:text-[48px]
                max-[1200px]:leading-[70px]

                max-[1024px]:text-[42px]
                max-[1024px]:leading-[60px]

                max-[996px]:text-[34px]
                max-[996px]:leading-[48px]

                max-[768px]:mb-10
                max-[768px]:text-[36px]
                max-[768px]:leading-[52px]

                max-[550px]:mb-8
                max-[550px]:text-[28px]
                max-[550px]:leading-[40px]
              "
            >
              Frequently Asked
              <br />
              Questions
            </h1>

            <div
              className="
                flex flex-col gap-6

                max-[768px]:gap-5

                max-[550px]:gap-4
              "
            >
              {faqData.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    layout
                    transition={{ duration: 0.4 }}
                    className="
                      overflow-hidden
                      rounded-[24px]
                      border border-[#141414]
                      bg-[#0e0e0e]
                    "
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="
                        flex w-full items-center justify-between
                        text-left

                        px-8 py-7

                        max-[996px]:px-6
                        max-[996px]:py-6

                        max-[768px]:px-5
                        max-[768px]:py-5

                        max-[550px]:px-4
                        max-[550px]:py-4
                      "
                    >
                      <span
                        className="
                          font-['Montserrat'] text-gray-200

                          text-[18px]

                          max-[1024px]:text-[16px]

                          max-[996px]:text-[14px]

                          max-[768px]:text-[15px]

                          max-[550px]:text-[13px]
                        "
                      >
                        {faq.question}
                      </span>

                      {isOpen ? (
                        <ChevronUp
                          className="
                            text-white

                            h-5 w-5

                            max-[550px]:h-4
                            max-[550px]:w-4
                          "
                        />
                      ) : (
                        <ChevronDown
                          className="
                            text-white

                            h-5 w-5

                            max-[550px]:h-4
                            max-[550px]:w-4
                          "
                        />
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
                          <div
                            className="
                              max-w-[520px]
                              font-['Montserrat'] text-gray-400

                              px-8 pb-8
                              text-[14px] leading-8

                              max-[996px]:px-6
                              max-[996px]:pb-6
                              max-[996px]:text-[13px]
                              max-[996px]:leading-7

                              max-[768px]:px-5
                              max-[768px]:text-center

                              max-[550px]:px-4
                              max-[550px]:pb-4
                              max-[550px]:text-[12px]
                              max-[550px]:leading-6
                            "
                          >
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
          <div
            className="
              relative pt-12

              max-[996px]:pt-6

              max-[768px]:pt-0
              max-[768px]:flex
              max-[768px]:flex-col
              max-[768px]:items-center
              max-[768px]:text-center
            "
          >
            <p
              className="
                max-w-[520px]
                font-['Montserrat'] text-gray-300

                mb-10 text-[15px] leading-8

                max-[996px]:text-[13px]
                max-[996px]:leading-6

                max-[768px]:mb-8
                max-[768px]:max-w-full
                max-[768px]:text-center

                max-[550px]:text-[12px]
                max-[550px]:leading-6
              "
            >
              Equinix enables secure crypto, Web3, and DeFi operations with
              high-performance infrastructure, low latency, connectivity,
              enterprise security, and global interconnection trusted by
              financial institutions worldwide.
            </p>

            <div
              className="
                flex items-start gap-8

                max-[996px]:justify-center
                max-[996px]:gap-4

                max-[768px]:w-full
                max-[768px]:flex-col
                max-[768px]:items-center
                max-[768px]:gap-5
              "
            >
              {/* DOTS */}
              <div
                className="
                  mt-52 mr-6 flex flex-col justify-center gap-4

                  max-[1200px]:mt-44

                  max-[996px]:hidden
                "
              >
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
                      className={`
                        rounded-full border transition-all duration-300

                        w-3 h-3

                        ${
                          isActive
                            ? "bg-gradient-to-b from-[#FF0404] via-[#FF7878] to-[#CF0000] border-[#FF0404]"
                            : "bg-transparent border-red-500"
                        }
                      `}
                    />
                  );
                })}
              </div>

              {/* IMAGE + TEXT */}
              <div
                className="
                  flex flex-col

                  max-[768px]:items-center
                  max-[768px]:w-full
                "
              >
                <div
                  className="
                    relative overflow-hidden rounded-[30px]

                    mt-14
                    h-[300px] w-[450px]

                    max-[1200px]:w-[380px]
                    max-[1200px]:h-[270px]

                    max-[996px]:mt-6
                    max-[996px]:h-[220px]
                    max-[996px]:w-full
                    max-[996px]:max-w-[320px]

                    max-[768px]:mt-0
                    max-[768px]:h-[240px]
                    max-[768px]:w-full
                    max-[768px]:max-w-[320px]

                    max-[550px]:h-[200px]
                    max-[550px]:max-w-[240px]
                  "
                >
                  <motion.img
                    src={hand1}
                    alt="FAQ"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p
                  className="
                    mt-6 max-w-[450px]
                    font-['Montserrat'] text-gray-300

                    text-[14px] leading-8

                    max-[996px]:max-w-[320px]
                    max-[996px]:text-[12px]
                    max-[996px]:leading-6

                    max-[768px]:mt-5
                    max-[768px]:max-w-full
                    max-[768px]:text-center

                    max-[550px]:text-[12px]
                    max-[550px]:leading-6
                  "
                >
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