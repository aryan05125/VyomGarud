"use client";

import { motion } from "framer-motion";

export default function Solutions() {
  return (
    <section
      id="capabilities"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Subtle orange background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-snug"
        >
          Mission-Ready <span className="text-orange-500">Solutions</span>
        </motion.h2>

        <p className="text-gray-400 mt-4 max-w-3xl text-lg leading-relaxed">
          Engineered systems designed to excel in the most demanding operational environments.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] border border-gray-800 p-7 rounded-2xl hover:border-orange-600/40 hover:shadow-orange-500/10 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Tactical Surveillance
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Real-time intelligence gathering with advanced sensors and secure data transmission.
            </p>
            <ul className="mt-4 text-gray-500 text-sm space-y-2">
              <li>• Multi-spectrum imaging</li>
              <li>• Deep-threat area scans</li>
              <li>• Low detectability</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0f0f0f] border border-gray-800 p-7 rounded-2xl hover:border-orange-600/40 hover:shadow-orange-500/10 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Rapid Deployment
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Quick-launch systems designed for immediate response scenarios.
            </p>
            <ul className="mt-4 text-gray-500 text-sm space-y-2">
              <li>• &lt; 5-min deployment</li>
              <li>• Autonomous flight</li>
              <li>• Weather resilient</li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0f0f0f] border border-gray-800 p-7 rounded-2xl hover:border-orange-600/40 hover:shadow-orange-500/10 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Long-Range Operations
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Extended endurance platforms covering vast operational areas.
            </p>
            <ul className="mt-4 text-gray-500 text-sm space-y-2">
              <li>• 50+ km range</li>
              <li>• 8+ hr flight time</li>
              <li>• Auto-return safety</li>
            </ul>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-[#0f0f0f] border border-gray-800 p-7 rounded-2xl hover:border-orange-600/40 hover:shadow-orange-500/10 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-orange-500">
              Precision Payloads
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Modular payload systems supporting diverse mission profiles.
            </p>
            <ul className="mt-4 text-gray-500 text-sm space-y-2">
              <li>• High-res modules</li>
              <li>• Multi-role capable</li>
              <li>• Custom integration</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
