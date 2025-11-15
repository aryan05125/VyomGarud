"use client";

import { motion } from "framer-motion";

export default function Excellence() {
  return (
    <section
      id="highlights"
      className="relative bg-black text-white py-32 border-t border-orange-900/20 overflow-hidden"
    >
      {/* Soft orange background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Unmatched <span className="text-orange-500">Excellence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-400 text-center mt-4 max-w-3xl mx-auto leading-relaxed"
        >
          What sets our UAV systems apart in critical operations.
        </motion.p>

        {/* 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] p-7 rounded-2xl border border-gray-800 
                       hover:border-orange-600/40 hover:shadow-orange-500/10 
                       hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              End-to-End Manufacturing
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              In-house production ensures uncompromising quality control and rapid 
              iteration cycles for mission-critical systems.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0f0f0f] p-7 rounded-2xl border border-gray-800 
                       hover:border-orange-600/40 hover:shadow-orange-500/10 
                       hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              AI-Powered Flight Systems
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Advanced ML algorithms enable autonomous decision-making, 
              obstacle avoidance, and adaptive mission execution.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0f0f0f] p-7 rounded-2xl border border-gray-800 
                       hover:border-orange-600/40 hover:shadow-orange-500/10 
                       hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Military-Grade Certification
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Rigorous testing ensures readiness in the most demanding 
              operational and environmental scenarios.
            </p>
          </motion.div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 text-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-4xl font-bold text-orange-500">50+</p>
            <p className="text-gray-400 text-sm mt-2">Successful Deployments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-4xl font-bold text-orange-500">15+</p>
            <p className="text-gray-400 text-sm mt-2">Countries Served</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-4xl font-bold text-orange-500">100%</p>
            <p className="text-gray-400 text-sm mt-2">Mission Success Rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-4xl font-bold text-orange-500">10K+</p>
            <p className="text-gray-400 text-sm mt-2">Flight Hours</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
