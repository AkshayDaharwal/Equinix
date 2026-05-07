import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
import hand1 from "../assets/homepage/robots/hand_question.png"
import hand4 from "../assets/homepage/robots/robot3.png"
import hand2 from "../assets/homepage/robots/robot1.png"
import hand3 from "../assets/homepage/robots/robot2.png"



const images = [hand1, hand2, hand3, hand4]


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
  
]

const FAQSection = () => {


const [activeImage, setActiveImage] = useState(0)

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveImage((prev) => (prev + 1) % images.length)
  }, 2000)

  return () => clearInterval(interval)
}, [])

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Right Border */}
      <div className="absolute right-4 top-0 h-full w-[1px] bg-gray-800" />

      <div className="max-w-7xl mx-auto px-8 py-14 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-start min-h-[90vh]">
          {/* LEFT SECTION */}
          <div>
            <h3 className="text-gradient-red text-[32px] font-mokoto uppercase  mb-4">
              FAQ
            </h3>

            <h1 className=" text-[55px] leading-[82px] tracking-[-2px] font-montserrat mb-12 uppercase whitespace-nowrap">
              Frequently Asked
              <br />
              Questions
            </h1>

            {/* FAQ CARDS */}
            <div className="flex flex-col gap-6">
              {faqData.map((faq, index) => {
                const isOpen = activeIndex === index

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
                          <div className="px-8 pb-8 max-w-[520px] text-gray-400 text-[14px] leading-8 font-montserrat">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
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

  {/* IMAGE SECTION */}
  <div className="relative flex items-start gap-8">
    
    {/* ANIMATED DOTS */}
    <div className="flex flex-col gap-4 mt-24">
      {[0, 1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          animate={
            activeImage === dot
              ? {
                  scale: [1, 1.5, 1],
                }
              : {}
          }
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className={`w-3 h-3 rounded-full border border-red-500 ${
            activeImage === dot
              ? "bg-red-500 shadow-[0_0_12px_red]"
              : "bg-transparent"
          }`}
        />
      ))}
    </div>

    {/* IMAGE + TEXT */}
    <div>
      <motion.img
        key={activeImage}
        src={images[activeImage]}
        alt="FAQ"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-[450px] h-[300px] object-cover rounded-[8px]"
      />

      <p className="mt-8 text-gray-300 text-[14px] leading-8 max-w-[450px] font-montserrat">
        Equinix powers crypto and Web3 with secure, high-performance
        infrastructure, enabling blockchain deployment, DeFi
        connectivity, and enterprise-grade interconnection trusted
        globally by financial institutions and developers.
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
