"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-orange-900/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-white hover:text-orange-500 transition"
        >
          <span className="text-orange-500">Vyom</span>Garud
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition">About</button>
          <button onClick={() => scrollToSection("capabilities")} className="hover:text-orange-500 transition">Capabilities</button>
          <button onClick={() => scrollToSection("highlights")} className="hover:text-orange-500 transition">Highlights</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-orange-500 transition">Contact</button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-orange-600 hover:bg-orange-500 text-black font-semibold px-5 py-2 rounded-lg transition shadow-sm hover:shadow-orange-500/30"
          >
            Get In Touch
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-orange-900/20 px-6 py-5 space-y-4 text-gray-300"
          >
            <button onClick={() => scrollToSection("about")} className="block w-full text-left">About</button>
            <button onClick={() => scrollToSection("capabilities")} className="block w-full text-left">Capabilities</button>
            <button onClick={() => scrollToSection("highlights")} className="block w-full text-left">Highlights</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left">Contact</button>

            <button
              onClick={() => scrollToSection("contact")}
              className="block bg-orange-600 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg w-full text-center transition"
            >
              Get In Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
