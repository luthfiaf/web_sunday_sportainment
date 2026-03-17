import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        
        // Easing function (ease-out-quart)
        const easeOut = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOut * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      })
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      })
      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1.1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Top Section - Gradient Background (50% viewport height) */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background - Simple CSS Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A31D1D] via-[#DC0000] to-[#A31D1D] bg-[length:400%_400%] animate-gradient-flow"></div>

        {/* Additional Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#DC0000]/60 via-[#A31D1D]/50 to-[#DC0000]/60 bg-[length:300%_300%] animate-gradient-flow-reverse opacity-70"></div>

        {/* Liquid Wave Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-auto">
          {/* Wave Layer 1 - Red */}
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'linear-gradient(45deg, rgba(163, 29, 29, 0.6) 0%, rgba(220, 0, 0, 0.4) 100%)',
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Wave Layer 2 - Red */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(135deg, rgba(220, 0, 0, 0.5) 0%, rgba(163, 29, 29, 0.3) 100%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Wave Layer 3 - Red */}
          <motion.div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'linear-gradient(90deg, rgba(163, 29, 29, 0.5) 0%, rgba(220, 0, 0, 0.3) 100%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 120, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Liquid Orbs - Red */}
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(220, 0, 0, 0.7) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 150, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Liquid Orbs - Red */}
          <motion.div
            className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(163, 29, 29, 0.6) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: [0, -120, 0],
              y: [0, -80, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Liquid Orbs - Red */}
          <motion.div
            className="absolute top-[40%] left-[40%] w-[50vw] h-[50vw] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(220, 0, 0, 0.5) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, 80, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 py-8 text-center w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-3"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto  backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl p-2 ">
              <img
              src="public/images/logo_sunday.png"
              alt="Sunday Sportainment"
              className="h-10 w-auto object-contain"
            />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 px-2 drop-shadow-2xl font-britney"
          >
            SUNDAY
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              SPORTAINMENT
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            className="hero-subtitle text-xs sm:text-sm md:text-base text-gray-200 max-w-lg mx-auto leading-relaxed px-4 drop-shadow-lg"
          >
            Event Sport Organizer profesional berbasis di Banjarbaru, Kalimantan Selatan.
            <br className="hidden md:block" />
            Spesialis turnamen futsal dan sepakbola.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-buttons flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4 justify-center px-4"
          >
            <motion.a
              href="#events"
              className=" bg-transparent text-white font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-xl text-xs sm:text-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Event
            </motion.a>
            <motion.a
              href="#about-us"
              className="bg-transparent text-white font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-white hover:bg-white hover:text-secondary transition-all duration-300 shadow-xl text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tentang Kami
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="bg-white py-8 md:py-12 px-4 relative z-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#DD0303] drop-shadow-lg">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm mt-1 md:mt-2 font-medium">Event Sukses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#DD0303] drop-shadow-lg">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm mt-1 md:mt-2 font-medium">Peserta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#DD0303] drop-shadow-lg">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm mt-1 md:mt-2 font-medium">Tahun</div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero
