import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: '⚽',
      title: 'Turnamen Sepakbola',
      description: 'Penyelenggaraan turnamen sepakbola amateur hingga profesional dengan sistem kompetisi yang fair dan profesional.',
      features: ['Sistem liga/knockout', 'Wasit bersertifikat', 'Trophy & medali', 'Dokumentasi lengkap'],
    },
    {
      icon: '🏟️',
      title: 'Turnamen Futsal',
      description: 'Event futsal dengan berbagai kategori usia dan level keterampilan, dari pemula hingga advanced.',
      features: ['Lapangan standar', 'Wasit profesional', 'Hadiah menarik', 'Live scoring'],
    },
    {
      icon: '📋',
      title: 'Event Management',
      description: 'Pengelolaan event olahraga secara menyeluruh dari perencanaan hingga eksekusi.',
      features: ['Perencanaan konsep', 'Logistik lengkap', 'Tim medis', 'Security'],
    },
    {
      icon: '🤝',
      title: 'Sponsorship',
      description: 'Kesempatan sponsorship untuk brand yang ingin menjangkau audiens olahraga.',
      features: ['Brand exposure', 'Booth exhibition', 'Logo di merchandise', 'Social media promotion'],
    },
    {
      icon: '🎪',
      title: 'Sports Festival',
      description: 'Festival olahraga multi-cabang dengan berbagai aktivitas menarik untuk semua usia.',
      features: ['Multiple sports', 'Food bazaar', 'Entertainment', 'Family friendly'],
    },
    {
      icon: '📊',
      title: 'Liga Olahraga',
      description: 'Penyelenggaraan liga olahraga berkala dengan sistem yang profesional.',
      features: ['Season-based', 'Standings & stats', 'Player registration', 'Award ceremony'],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-title text-3xl md:text-5xl font-extrabold text-secondary">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan event olahraga profesional untuk memenuhi kebutuhan Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 text-3xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Mengadakan Event Olahraga?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan event olahraga Anda dengan tim profesional kami. 
              Kami siap membantu mewujudkan event impian Anda.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-white text-secondary font-semibold px-8 py-4 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami Sekarang
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
