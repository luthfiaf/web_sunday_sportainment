import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

// 2D SVG Icons
const FutsalIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2c1.5 0 2.5.5 3.5 1.5L12 12l-3.5-6.5C9.5 4.5 10.5 4 12 4zm-5 3.5L10.5 12 7 18.5C5.5 17 4.5 15 4.5 12c0-2.5.5-4.5 2.5-6.5zm5 13c-1.5 0-2.5-.5-3.5-1.5L12 12l3.5 6.5c-1 1-2 1.5-3.5 1.5zm5-3.5L13.5 12 17 5.5c1.5 1.5 2.5 3.5 2.5 6.5 0 2.5-.5 4.5-2.5 6.5z" fill="currentColor"/>
  </svg>
)

const FootballIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
)

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeWidth="2"/>
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
  </svg>
)

const TrophyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l-3 6h6l-3-6z" fill="currentColor"/>
    <circle cx="12" cy="14" r="3" strokeWidth="2" fill="none"/>
    <path d="M12 17v5M8 22h8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 8c0 2-1 4-3 4V8h3zM19 8c0 2 1 4 3 4V8h-3z" fill="currentColor"/>
  </svg>
)

const PhotoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
    <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Events = () => {
  const sectionRef = useRef(null)
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.events-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.events-title',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.filter-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.filter-buttons',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.utils.toArray('.event-card').forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const events = [
    {
      id: 1,
      eventId: 'banjarbaru-futsal',
      title: 'Banjarbaru Futsal Championship 2024',
      category: 'futsal',
      location: 'GOR Banjarbaru',
      city: 'Banjarbaru',
      province: 'Kalimantan Selatan',
      scope: 'kota',
      registrationDate: '1 - 25 Maret 2024',
      eventDate: '30 Maret - 5 April 2024',
      participants: '32 Tim',
      prize: 'Rp 10.000.000',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      description: 'Turnamen futsal terbesar di Banjarbaru dengan hadiah total 10 juta rupiah.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
    },
    {
      id: 2,
      eventId: 'kalimantan-football',
      title: 'Kalimantan Football Cup 2024',
      category: 'football',
      location: 'Stadion Demang Lehman',
      city: 'Banjarbaru',
      province: 'Kalimantan Selatan',
      scope: 'provinsi',
      registrationDate: '1 - 20 Februari 2024',
      eventDate: '25 Februari - 5 Maret 2024',
      participants: '16 Tim',
      prize: 'Rp 25.000.000',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Selatan.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
    },
    {
      id: 3,
      eventId: 'sunday-league',
      title: 'Sunday Futsal League Season 6',
      category: 'futsal',
      location: 'Futsal Center Banjarbaru',
      city: 'Banjarbaru',
      province: 'Kalimantan Selatan',
      scope: 'kota',
      registrationDate: '1 - 15 Januari 2024',
      eventDate: '20 Januari - 30 Maret 2024',
      participants: '24 Tim',
      prize: 'Rp 15.000.000',
      image: 'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=600&h=400&fit=crop',
      description: 'Liga futsal reguler dengan sistem kompetisi penuh.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
    },
    {
      id: 4,
      eventId: 'indonesia-futsal',
      title: 'Indonesia Futsal Championship',
      category: 'futsal',
      location: 'GOR Pangeran Antasari',
      city: 'Banjarmasin',
      province: 'Kalimantan Selatan',
      scope: 'nasional',
      registrationDate: '1 - 30 April 2024',
      eventDate: '5 - 15 Mei 2024',
      participants: '64 Tim',
      prize: 'Rp 50.000.000',
      image: 'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=600&h=400&fit=crop',
      description: 'Turnamen futsal tingkat nasional dengan peserta dari seluruh Indonesia.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
    },
    {
      id: 5,
      eventId: 'palangkaraya-football',
      title: 'Palangkaraya Football Tournament',
      category: 'football',
      location: 'Stadion Tuah Pahoe',
      city: 'Palangkaraya',
      province: 'Kalimantan Tengah',
      scope: 'provinsi',
      registrationDate: '1 - 25 November 2024',
      eventDate: '1 - 10 Desember 2024',
      participants: '20 Tim',
      prize: 'Rp 20.000.000',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=400&fit=crop',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Tengah.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
    },
    {
      id: 6,
      eventId: 'youth-futsal',
      title: 'Youth Futsal Championship',
      category: 'futsal',
      location: 'GOR Banjarbaru',
      city: 'Banjarbaru',
      province: 'Kalimantan Selatan',
      scope: 'kota',
      registrationDate: '1 - 20 Oktober 2024',
      eventDate: '25 Oktober - 5 November 2024',
      participants: '40 Tim',
      prize: 'Rp 8.000.000',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      description: 'Turnamen futsal khusus usia dini (U-17).',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
    },
  ]

  const filters = [
    { id: 'all', label: 'Semua Event' },
    { id: 'futsal', label: 'Futsal' },
    { id: 'football', label: 'Sepakbola' },
  ]

  const scopeBadges = {
    kota: { label: 'Kota', color: 'bg-blue-500' },
    provinsi: { label: 'Provinsi', color: 'bg-purple-500'},
    nasional: { label: 'Nasional', color: 'bg-red-500' },
  }

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter)

  const handleCardClick = (event) => {
    navigate(`/event/${event.eventId}`)
  }

  return (
    <section id="events" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="events-title text-3xl md:text-5xl font-extrabold text-secondary">
            Event <span className="text-primary">Kami</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih event yang sesuai dan daftarkan tim Anda sekarang!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCardClick(event)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`${scopeBadges[event.scope].color} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                    {scopeBadges[event.scope].icon} {scopeBadges[event.scope].label}
                  </span>
                  <span className="bg-white/90 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                    {event.category === 'futsal' ? '' : ''} {event.category === 'futsal' ? 'Futsal' : 'Sepakbola'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary"><LocationIcon /></span>
                    <span>{event.location}, {event.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary"><CalendarIcon /></span>
                    <span>Daftar: {event.registrationDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary"><CalendarIcon /></span>
                    <span>Event: {event.eventDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary"><TrophyIcon /></span>
                    <span className="font-semibold text-green-600">Hadiah: {event.prize}</span>
                  </div>
                </div>

                {/* View Detail Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <PhotoIcon /> Lihat Detail Lengkap
                  </span>
                  <motion.span
                    className="text-primary font-semibold text-sm flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    Lihat Detail <ArrowRightIcon />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
