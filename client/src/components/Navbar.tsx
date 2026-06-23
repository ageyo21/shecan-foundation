import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <div>
            <p className="font-bold text-dark text-sm leading-tight">She Can Foundation</p>
            <p className="text-xs text-primary">Together We Can Change The World</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-dark hover:text-primary font-medium transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="text-dark hover:text-primary font-medium transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors duration-200">
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a href="#home" onClick={() => setMenuOpen(false)}
            className="text-dark hover:text-primary font-medium transition-colors duration-200">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}
            className="text-dark hover:text-primary font-medium transition-colors duration-200">
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="bg-primary text-white px-5 py-2 rounded-full font-medium text-center hover:bg-primary-dark transition-colors duration-200">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  )
}