"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-32 border-t border-orange-900/20 overflow-hidden"
    >
      {/* Soft orange background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Ready to <span className="text-orange-500">Deploy</span> Excellence?
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Contact our team to discuss how VyomGarud systems can meet 
            your operational requirements with unmatched precision.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-10 space-y-7">
            
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-lg font-semibold">contact@vyomgarud.com</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-lg font-semibold">+91 (XXX) XXX-XXXX</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-lg font-semibold">India</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* FULL NAME */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 px-4 py-3 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white 
                         outline-none focus:border-orange-500 focus:shadow-orange-500/20 focus:shadow-md 
                         transition-all duration-300"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full mt-2 px-4 py-3 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white 
                         outline-none focus:border-orange-500 focus:shadow-orange-500/20 focus:shadow-md 
                         transition-all duration-300"
            />
          </div>

          {/* ORGANIZATION */}
          <div>
            <label className="text-sm text-gray-300">Organization</label>
            <input
              type="text"
              placeholder="Your Organization"
              className="w-full mt-2 px-4 py-3 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white 
                         outline-none focus:border-orange-500 focus:shadow-orange-500/20 focus:shadow-md 
                         transition-all duration-300"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              placeholder="Tell us about your requirements..."
              rows={5}
              className="w-full mt-2 px-4 py-3 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white 
                         outline-none focus:border-orange-500 focus:shadow-orange-500/20 focus:shadow-md 
                         transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-orange-600 hover:bg-orange-500 text-black font-semibold py-3 rounded-lg 
                       transition-all duration-300 shadow-md hover:shadow-orange-500/20"
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}
