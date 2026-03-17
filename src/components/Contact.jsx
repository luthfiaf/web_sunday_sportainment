import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.contact-info', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })
      gsap.from('.contact-form', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', event: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Alamat',
      content: 'Banjarbaru, Kalimantan Selatan, Indonesia',
    },
    {
      icon: '📞',
      title: 'Telepon / WhatsApp',
      content: '+62 812-3456-7890',
      link: 'https://wa.me/628123456789',
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'info@sundaysportainment.com',
      link: 'mailto:info@sundaysportainment.com',
    },
    {
      icon: '🕐',
      title: 'Jam Operasional',
      content: 'Senin - Minggu: 08:00 - 20:00 WITA',
    },
  ]

  const socialMedia = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gradient-to-br from-secondary via-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title text-3xl md:text-5xl font-extrabold text-white">
            Hubungi <span className="text-green-400">Kami</span>
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Siap untuk mengadakan event olahraga yang tak terlupakan? Hubungi kami sekarang!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="contact-info space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-4 mb-6 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-200 hover:text-green-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-200">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-green-500 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Lokasi</h3>
              <div className="bg-white/20 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-sm">Banjarbaru, Kalimantan Selatan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-secondary mb-6">Kirim Pesan</h3>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl"
                >
                  ✓ Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Event
                  </label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Pilih jenis event</option>
                    <option value="futsal">Turnamen Futsal</option>
                    <option value="football">Turnamen Sepakbola</option>
                    <option value="festival">Sports Festival</option>
                    <option value="league">Liga Olahraga</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan tentang event yang ingin Anda adakan..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </span>
                  ) : (
                    'Kirim Pesan'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
