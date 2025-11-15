"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../public/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-black text-white pt-28 pb-32 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/grid.svg"
          alt="grid pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="px-5 py-1.5 text-sm bg-orange-500/20 text-orange-500 rounded-full">
            Military-Grade UAV Systems
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-6">
            Precision Engineering <br />
            <span className="text-orange-500">Meets Advanced</span> Autonomy
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            VyomGarud delivers high-reliability drone systems engineered for
            critical operations with uncompromising performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <button className="px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-orange-500/20">
              Explore Capabilities
            </button>

            <button className="px-7 py-3.5 border border-gray-500 hover:border-gray-300 text-white rounded-lg transition-all duration-300 hover:bg-gray-800 shadow-md hover:shadow-white/10">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 text-center lg:text-left">
            {[
              { value: "99.9%", label: "Reliability" },
              { value: "24/7", label: "Operations" },
              { value: "AI-Driven", label: "Autonomy" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.5 }}
              >
                <p className="text-3xl font-bold text-orange-500">
                  {item.value}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={hero}
              alt="VyomGarud Drone"
              className="rounded-xl shadow-2xl w-[85%] sm:w-[70%] lg:w-full transition-all"
              priority
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-orange-500/10 blur-2xl opacity-20"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
