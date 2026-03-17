import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 2D SVG Icons
const LocationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeWidth="2"/>
  </svg>
)

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const About = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.about-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      // Content animation
      gsap.from('.about-content', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      // Image animation
      gsap.from('.about-image', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      // Quick info cards
      gsap.from('.quick-info', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.quick-info',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // CTA section
      gsap.from('.about-cta', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-cta',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about-us" ref={sectionRef} className="section-padding bg-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Tentang Kami
          </motion.span>
          <h2 className="about-title text-3xl md:text-5xl font-extrabold text-secondary">
            Sunday <span className="text-primary">Sportainment</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Event Sport Organizer profesional yang berdedikasi untuk menciptakan pengalaman olahraga yang tak terlupakan
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image Grid */}
          <motion.div
            className="about-image relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                style={{ y }}
              >
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=500&fit=crop"
                  alt="Futsal Event"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=400&h=300&fit=crop"
                  alt="Event Moment"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop"
                  alt="Football Event"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=400&h=500&fit=crop"
                  alt="Trophy Ceremony"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl shadow-2xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              <div className="text-center">
                <div className="text-4xl font-black">5+</div>
                <div className="text-sm opacity-90">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Menghadirkan Semangat Olahraga Sejak 2019
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-primary">Sunday Sportainment</strong> telah menjadi pionir dalam industri event olahraga di Kalimantan Selatan. 
                Berbasis di <strong className="text-primary">Banjarbaru</strong>, kami telah berhasil menyelenggarakan berbagai turnamen 
                futsal dan sepakbola dengan tingkat keberhasilan yang tinggi.
              </p>
              <p>
                Tidak hanya di Banjarbaru, kami juga sering mengadakan event di luar kota seperti 
                Banjarmasin, Palangkaraya, dan kota-kota lainnya di Kalimantan. 
                Komitmen kami adalah memberikan pengalaman terbaik bagi setiap peserta dan sponsor.
              </p>
              <p>
                Dengan tim yang berpengalaman dan dedikasi tinggi, kami siap mewujudkan event olahraga 
                impian Anda dengan standar profesional dan konsep yang inovatif.
              </p>
            </div>

            {/* Quick Info */}
            <div className="quick-info grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(221, 3, 3, 0.1)' }}
              >
                <span className="text-primary"><LocationIcon /></span>
                <div>
                  <div className="font-semibold text-secondary">Base Office</div>
                  <div className="text-sm text-gray-600">Banjarbaru, Kalsel</div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(221, 3, 3, 0.1)' }}
              >
                <span className="text-primary"><TargetIcon /></span>
                <div>
                  <div className="font-semibold text-secondary">Spesialisasi</div>
                  <div className="text-sm text-gray-600">Futsal & Sepakbola</div>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="#events"
              className="inline-block mt-8 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Event Kami →
            </motion.a>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="about-cta relative mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Siap Mengadakan Event Olahraga?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Konsultasikan kebutuhan event olahraga Anda dengan tim profesional kami. 
              Kami siap membantu mewujudkan event impian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-white text-secondary font-bold px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Kami
              </motion.a>
              <motion.a
                href="#events"
                className="bg-transparent text-white font-bold px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-secondary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Event
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
