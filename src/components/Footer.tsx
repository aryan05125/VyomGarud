"use client";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-16 border-t border-orange-900/20 overflow-hidden">
      
      {/* Soft glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* COLUMN 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <span className="text-orange-500">Vyom</span>Garud
          </h2>
          <p className="mt-3 max-w-xs leading-relaxed">
            Military-grade UAV systems engineered for precision, reliability, and advanced autonomy.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-orange-500 transition">🔗</a>
            <a href="#" className="hover:text-orange-500 transition">🔗</a>
            <a href="#" className="hover:text-orange-500 transition">🔗</a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-3 mt-4 text-sm">
            <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#capabilities" className="hover:text-orange-500 transition">Capabilities</a></li>
            <li><a href="#highlights" className="hover:text-orange-500 transition">Highlights</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg">Legal</h3>
          <ul className="space-y-3 mt-4 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Export Compliance</a></li>
          </ul>
        </div>
      </div>

      <p className="relative z-10 text-center text-gray-500 mt-14 text-xs tracking-wide">
        © 2025 VyomGarud — Engineered with precision in India.
      </p>
    </footer>
  );
}
