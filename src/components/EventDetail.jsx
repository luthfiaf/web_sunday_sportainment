import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

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

// 2D SVG Icons
const FutsalIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2c1.5 0 2.5.5 3.5 1.5L12 12l-3.5-6.5C9.5 4.5 10.5 4 12 4zm-5 3.5L10.5 12 7 18.5C5.5 17 4.5 15 4.5 12c0-2.5.5-4.5 2.5-6.5zm5 13c-1.5 0-2.5-.5-3.5-1.5L12 12l3.5 6.5c-1 1-2 1.5-3.5 1.5zm5-3.5L13.5 12 17 5.5c1.5 1.5 2.5 3.5 2.5 6.5 0 2.5-.5 4.5-2.5 6.5z" fill="currentColor"/>
  </svg>
)

const FootballIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
)

const CalendarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
  </svg>
)

const LocationIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeWidth="2"/>
  </svg>
)

const TrophyIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l-3 6h6l-3-6z" fill="currentColor"/>
    <circle cx="12" cy="14" r="3" strokeWidth="2" fill="none"/>
    <path d="M12 17v5M8 22h8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 8c0 2-1 4-3 4V8h3zM19 8c0 2 1 4 3 4V8h-3z" fill="currentColor"/>
  </svg>
)

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" strokeWidth="2"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeWidth="2"/>
  </svg>
)

const ClipboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" strokeWidth="2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" strokeWidth="2"/>
  </svg>
)

const TargetIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const AwardIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="6" strokeWidth="2"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MedalIcon = ({ rank }) => {
  const colors = {
    1: 'text-yellow-400',
    2: 'text-gray-300',
    3: 'text-amber-600',
  }
  return (
    <svg className={`w-8 h-8 md:w-10 md:h-10 ${colors[rank]}`} fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M15.5 13L17 20l-5-2.5L7 20l1.5-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="12" y="10" fontSize="6" textAnchor="middle" fill="currentColor" fontWeight="bold">{rank}</text>
    </svg>
  )
}

const HandshakeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" strokeWidth="2"/>
    <path d="M12 12V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" strokeWidth="2"/>
    <path d="M12 12v6a2 2 0 002 2h4a2 2 0 002-2v-6" strokeWidth="2"/>
    <path d="M16 12V6a2 2 0 012-2h0a2 2 0 012 2v6" strokeWidth="2"/>
  </svg>
)

const RocketIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" strokeWidth="2"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" strokeWidth="2"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" strokeWidth="2"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth="2"/>
  </svg>
)

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Sponsor Logo Component
const SponsorLogo = ({ type }) => {
  const logos = {
    beverage: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" strokeWidth="2"/>
        <line x1="6" y1="4" x2="6" y2="8" strokeWidth="2"/>
        <line x1="10" y1="4" x2="10" y2="8" strokeWidth="2"/>
        <line x1="14" y1="4" x2="14" y2="8" strokeWidth="2"/>
      </svg>
    ),
    shoe: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 16l4-9 5-3 6 2 1 5-3 6H8l-4-1z" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l3 2" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    drop: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeWidth="2"/>
      </svg>
    ),
    ball: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M12 2a10 10 0 010 20 10 10 0 010-20z" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
      </svg>
    ),
    jersey: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47A1 1 0 003.86 10H5a1 1 0 011 1v9a1 1 0 001 1h10a1 1 0 001-1v-9a1 1 0 011-1h1.14a1 1 0 00.98-.84l.58-3.47a2 2 0 00-1.34-2.23z" strokeWidth="2"/>
      </svg>
    ),
    store: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3z" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" strokeWidth="2"/>
      </svg>
    ),
    building: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 10a2 2 0 11-4 0 2 2 0 014 0zM9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" strokeWidth="2"/>
      </svg>
    ),
    trophy: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l-3 6h6l-3-6z" fill="currentColor"/>
        <circle cx="12" cy="14" r="3" strokeWidth="2"/>
        <path d="M12 17v5M8 22h8" strokeWidth="2"/>
      </svg>
    ),
  }
  return logos[type] || null
}

const EventDetail = () => {
  const { eventId } = useParams()
  const navigate = useNavigate()

  // Helper to extract participant number from string like "32 Tim"
  const getParticipantCount = (participantString) => {
    const match = participantString.match(/(\d+)/)
    return match ? parseInt(match[0], 10) : 0
  }

  // Data Events
  const events = {
    'banjarbaru-futsal': {
      title: 'Banjarbaru Futsal Championship 2024',
      date: '30 Maret - 5 April 2024',
      location: 'GOR Banjarbaru',
      prize: 'Rp 10.000.000',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      description: 'Turnamen futsal terbesar di Banjarbaru dengan hadiah total 10 juta rupiah.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
      registrationDate: '1 - 25 Maret 2024',
      participants: '32 Tim',
      category: 'futsal',
    },
    'kalimantan-football': {
      title: 'Kalimantan Football Cup 2024',
      date: '25 Februari - 5 Maret 2024',
      location: 'Stadion Demang Lehman',
      prize: 'Rp 25.000.000',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Selatan.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
      registrationDate: '1 - 20 Februari 2024',
      participants: '16 Tim',
      category: 'football',
    },
    'sunday-league': {
      title: 'Sunday Futsal League Season 6',
      date: '20 Januari - 30 Maret 2024',
      location: 'Futsal Center Banjarbaru',
      prize: 'Rp 15.000.000',
      image: 'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=800&h=600&fit=crop',
      description: 'Liga futsal reguler dengan sistem kompetisi penuh.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
      registrationDate: '1 - 15 Januari 2024',
      participants: '24 Tim',
      category: 'futsal',
    },
    'indonesia-futsal': {
      title: 'Indonesia Futsal Championship',
      date: '5 - 15 Mei 2024',
      location: 'GOR Pangeran Antasari',
      prize: 'Rp 50.000.000',
      image: 'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=800&h=600&fit=crop',
      description: 'Turnamen futsal tingkat nasional dengan peserta dari seluruh Indonesia.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
      registrationDate: '1 - 30 April 2024',
      participants: '64 Tim',
      category: 'futsal',
    },
    'palangkaraya-football': {
      title: 'Palangkaraya Football Tournament',
      date: '1 - 10 Desember 2024',
      location: 'Stadion Tuah Pahoe',
      prize: 'Rp 20.000.000',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=600&fit=crop',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Tengah.',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
      registrationDate: '1 - 25 November 2024',
      participants: '20 Tim',
      category: 'football',
    },
    'youth-futsal': {
      title: 'Youth Futsal Championship',
      date: '25 Oktober - 5 November 2024',
      location: 'GOR Banjarbaru',
      prize: 'Rp 8.000.000',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      description: 'Turnamen futsal khusus usia dini (U-17).',
      googleForm: 'https://forms.gle/ks9UuYuNRWfzn7gX8',
      registrationDate: '1 - 20 Oktober 2024',
      participants: '40 Tim',
      category: 'futsal',
    },
  }

  const sponsors = [
    { name: 'Pepsi', logo: 'beverage', tier: 'Gold Partner' },
    { name: 'Nike', logo: 'shoe', tier: 'Gold Partner' },
    { name: 'Gatorade', logo: 'drop', tier: 'Silver Partner' },
    { name: 'Specs', logo: 'ball', tier: 'Silver Partner' },
    { name: 'Mills', logo: 'jersey', tier: 'Official Partner' },
    { name: 'Decathlon', logo: 'store', tier: 'Official Partner' },
    { name: 'Kemenpora', logo: 'building', tier: 'Government Partner' },
    { name: 'PSSI', logo: 'trophy', tier: 'Association Partner' },
  ]

  const eventData = events[eventId]

  if (!eventData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Event Tidak Ditemukan</h1>
          <button
            onClick={() => navigate('/#events')}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            Kembali ke Event
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <motion.div
        className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-secondary to-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={eventData.image}
          alt={eventData.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-primary text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 inline-flex items-center gap-1.5">
                {eventData.category === 'futsal' ? <FutsalIcon /> : <FootballIcon />}
                <span>{eventData.category === 'futsal' ? 'Futsal' : 'Sepakbola'}</span>
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">{eventData.title}</h1>
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-lg">
                <span className="flex items-center gap-2">
                  <CalendarIcon /> {eventData.date}
                </span>
                <span className="flex items-center gap-2">
                  <LocationIcon /> {eventData.location}
                </span>
                <span className="flex items-center gap-2">
                  <TrophyIcon /> {eventData.prize}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 text-primary"><CalendarIcon className="w-8 h-8 md:w-10 md:h-10" /></div>
            <div className="font-bold text-secondary text-sm md:text-base mb-1">Tanggal Event</div>
            <div className="text-gray-600 text-xs md:text-sm">{eventData.date}</div>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 text-primary"><ClipboardIcon /></div>
            <div className="font-bold text-secondary text-sm md:text-base mb-1">Pendaftaran</div>
            <div className="text-gray-600 text-xs md:text-sm">{eventData.registrationDate}</div>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 text-primary"><LocationIcon className="w-8 h-8 md:w-10 md:h-10" /></div>
            <div className="font-bold text-secondary text-sm md:text-base mb-1">Lokasi</div>
            <div className="text-gray-600 text-xs md:text-sm">{eventData.location}</div>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 text-primary"><UsersIcon /></div>
            <div className="font-bold text-secondary text-sm md:text-base mb-1">Peserta</div>
            <div className="text-gray-600 text-xs md:text-sm">
              <AnimatedCounter end={getParticipantCount(eventData.participants)} suffix=" Tim" />
            </div>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4 md:mb-6 flex items-center gap-2">
            <BookIcon /> Tentang Event
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 md:mb-6">{eventData.description}</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Event ini merupakan salah satu turnamen terbesar yang diselenggarakan oleh Sunday Sportainment.
            Dengan hadiah total {eventData.prize}, turnamen ini diharapkan dapat menjadi wadah bagi atlet-atlet
            berbakat untuk menunjukkan kemampuan mereka dan berkompetisi secara sehat.
          </p>
        </motion.div>

        {/* Schedule */}
        <motion.div
          className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4 md:mb-6 flex items-center gap-2">
            <ClipboardIcon /> Jadwal Kegiatan
          </h2>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0 text-primary">
                <ClipboardIcon />
              </div>
              <div>
                <div className="font-bold text-secondary text-sm md:text-base">Pendaftaran</div>
                <div className="text-gray-600 text-xs md:text-sm">{eventData.registrationDate}</div>
                <div className="text-xs text-gray-500 mt-1">Pendaftaran tim dan pembayaran biaya pendaftaran</div>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0 text-primary">
                <TargetIcon />
              </div>
              <div>
                <div className="font-bold text-secondary text-sm md:text-base">Technical Meeting</div>
                <div className="text-gray-600 text-xs md:text-sm">H-3 Event</div>
                <div className="text-xs text-gray-500 mt-1">Penjelasan peraturan dan undian grup</div>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0 text-primary">
                <FutsalIcon />
              </div>
              <div>
                <div className="font-bold text-secondary text-sm md:text-base">Pelaksanaan Event</div>
                <div className="text-gray-600 text-xs md:text-sm">{eventData.date}</div>
                <div className="text-xs text-gray-500 mt-1">Pertandingan babak grup hingga final</div>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0 text-primary">
                <TrophyIcon />
              </div>
              <div>
                <div className="font-bold text-secondary text-sm md:text-base">Awarding</div>
                <div className="text-gray-600 text-xs md:text-sm">Hari Terakhir Event</div>
                <div className="text-xs text-gray-500 mt-1">Penyerahan hadiah dan penghargaan</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prizes */}
        <motion.div
          className="bg-gradient-to-br from-primary to-secondary rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg mb-6 md:mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <TrophyIcon className="text-white w-8 h-8 md:w-10 md:h-10" /> Total Hadiah
          </h2>
          <div className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">{eventData.prize}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
              <div className="flex justify-center mb-2"><MedalIcon rank={1} /></div>
              <div className="font-bold text-sm md:text-base">Juara 1</div>
              <div className="text-xs opacity-80">Trophy + Uang</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
              <div className="flex justify-center mb-2"><MedalIcon rank={2} /></div>
              <div className="font-bold text-sm md:text-base">Juara 2</div>
              <div className="text-xs opacity-80">Trophy + Uang</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
              <div className="flex justify-center mb-2"><MedalIcon rank={3} /></div>
              <div className="font-bold text-sm md:text-base">Juara 3</div>
              <div className="text-xs opacity-80">Trophy + Uang</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
              <div className="flex justify-center mb-2 text-white"><TargetIcon /></div>
              <div className="font-bold text-sm md:text-base">Pemain Terbaik</div>
              <div className="text-xs opacity-80">Trophy + Merchandise</div>
            </div>
          </div>
        </motion.div>

        {/* Sponsors */}
        <motion.div
          className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6 md:mb-8 text-center">Sponsor & Partner</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                className="bg-gray-50 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">{sponsor.logo}</div>
                <div className="font-bold text-secondary text-center text-sm md:text-base mb-2">{sponsor.name}</div>
                <div className={`text-xs px-2 md:px-3 py-1 rounded-full ${
                  sponsor.tier.includes('Gold') ? 'bg-yellow-100 text-yellow-700' :
                  sponsor.tier.includes('Silver') ? 'bg-gray-200 text-gray-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {sponsor.tier}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration CTA */}
        <motion.div
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg text-center text-white mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Daftar Sekarang!</h2>
          <p className="text-green-100 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Jangan lewatkan kesempatan untuk berpartisipasi dalam event bergengsi ini. 
            Kuota terbatas, segera daftarkan tim Anda!
          </p>
          <motion.a
            href={eventData.googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 font-bold px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-green-100 transition-all duration-300 shadow-xl text-sm md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          Buka Form Pendaftaran
          </motion.a>
        </motion.div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/#events')}
            className="text-secondary hover:text-primary font-semibold flex items-center gap-2 mx-auto transition-colors text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Event
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
