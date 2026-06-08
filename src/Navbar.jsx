import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="text-xl font-bold text-amber-500 flex items-center gap-2 shrink-0">
          <img src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/logo.svg" alt="logo" className="w-8 h-8" />
          <span>foodwa<span className="text-gray-800">Gon</span></span>
        </div>

        {/* Delivery Location */}
        <span className="hidden lg:block text-sm text-gray-600 shrink-0">
          Deliver to: 📍 <strong>Mirpur 1 Bus Stand, Dhaka</strong>
        </span>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Food..."
          className="hidden sm:block flex-1 max-w-xs px-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 outline-none focus:border-amber-400"
        />

        {/* Login */}
        <button className="hidden sm:block text-sm font-semibold text-amber-500 border border-amber-400 rounded-full px-5 py-2 hover:bg-amber-500 hover:text-white transition-all shrink-0">
          Login
        </button>

        {/* Hamburger */}
        <button
          className="sm:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-3 border-t border-gray-100">
          <span className="text-sm text-gray-600 pt-3">
            Deliver to: 📍 <strong>Mirpur 1 Bus Stand, Dhaka</strong>
          </span>
          <input
            type="text"
            placeholder="Search Food..."
            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 outline-none focus:border-amber-400"
          />
          <button className="w-full text-sm font-semibold text-amber-500 border border-amber-400 rounded-full px-5 py-2 hover:bg-amber-500 hover:text-white transition-all">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;