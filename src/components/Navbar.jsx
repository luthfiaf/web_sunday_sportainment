import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Event', href: '#events' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'About', href: '#about-us' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:400%_400%] animate-gradient-fast py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="public/images/logo_sunday.png"
              alt="Sunday Sportainment"
              className="h-10 w-auto object-contain"
            />
            {/* <span className={`font-bold text-xl hidden md:block transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              Sunday Sportainment
            </span> */}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-white hover:text-green-400' : 'text-white hover:text-primary'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#about-us"
              className="bg-transparent text-white font-bold px-4 sm:px-4 py-1 sm:py-1 rounded-full border-2 border-white hover:bg-white hover:text-secondary transition-all duration-300 shadow-xl text-xs[10px] sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white rounded-lg mt-2 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>

      {/* Custom CSS for animated gradient */}
      <style>{`
        @keyframes gradient-fast {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-fast {
          animation: gradient-fast 3s ease infinite;
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
