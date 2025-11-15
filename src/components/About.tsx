"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Orange Glow Line */} 
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-600/40 to-transparent"></div>

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
        >
          Redefining the{" "}
          <span className="text-orange-500">Future of Unmanned Aviation</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-300 leading-relaxed max-w-3xl text-lg"
        >
          VyomGarud stands at the forefront of military-grade UAV technology,
          delivering systems that combine cutting-edge engineering with
          exceptional operational excellence. Our mission is to empower critical
          operations with autonomous systems that never compromise on
          reliability or performance.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] p-7 rounded-xl border border-gray-800 hover:border-orange-600/40 transition-all duration-300 shadow-lg hover:shadow-orange-500/10"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Built for Reliability
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              Military-grade components and rigorous stress testing ensure
              unmatched operational readiness in any environment.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0f0f0f] p-7 rounded-xl border border-gray-800 hover:border-orange-600/40 transition-all duration-300 shadow-lg hover:shadow-orange-500/10"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Advanced Autonomy
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed">
              AI-driven systems that learn, adapt, and execute complex mission
              scenarios with minimal human intervention.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
