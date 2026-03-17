import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
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
      {count}{suffix}
    </span>
  )
}

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
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
)

const FestivalIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L9 9H2l5.5 4.5L5 21l7-7 7 7-2.5-7.5L22 9h-7L12 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
  </svg>
)

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeWidth="2"/>
  </svg>
)

const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeWidth="2"/>
  </svg>
)

const TrophyIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l-3 6h6l-3-6z" fill="currentColor"/>
    <circle cx="12" cy="14" r="3" strokeWidth="2" fill="none"/>
    <path d="M12 17v5M8 22h8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 8c0 2-1 4-3 4V8h3zM19 8c0 2 1 4 3 4V8h-3z" fill="currentColor"/>
  </svg>
)

const StarIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PhotoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
    <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MedalIcon = ({ rank }) => {
  const colors = {
    1: 'text-yellow-400',
    2: 'text-gray-300',
    3: 'text-amber-600',
  }
  return (
    <svg className={`w-10 h-10 ${colors[rank]}`} fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M15.5 13L17 20l-5-2.5L7 20l1.5-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="12" y="10" fontSize="6" textAnchor="middle" fill="currentColor" fontWeight="bold">{rank}</text>
    </svg>
  )
}

const GalleryDetail = () => {
  const { galleryId } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleries = {
    'banjarbaru-futsal-2023': {
      id: 1,
      title: 'Banjarbaru Futsal Championship 2023',
      date: 'Maret 2023',
      location: 'GOR Banjarbaru',
      category: 'futsal',
      description: 'Turnamen futsal terbesar di Banjarbaru berhasil diselenggarakan dengan meriah. Sebanyak 32 tim dari berbagai daerah di Kalimantan Selatan berpartisipasi dalam event ini. Event ini menjadi ajang pencarian bakat-bakat baru di dunia futsal Kalimantan Selatan.',
      highlights: [
        'Peserta: 32 tim futsal dari seluruh Kalimantan Selatan',
        'Total pertandingan: 62 laga selama 7 hari',
        'Durasi: 7 hari kompetisi (25-31 Maret 2023)',
        'Hadiah total: Rp 10.000.000',
        'Penonton: 2000+ selama event berlangsung',
        'Pemain terbaik: Ahmad Rizki (FC Bintang Timur)',
        'Top scorer: Budi Santoso (25 gol)',
      ],
      winner: 'FC Bintang Timur Banjarbaru',
      runnerUp: 'Galatama FC Banjarbaru',
      thirdPlace: 'Banjarmasin United',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519766304800-c9e676b7e3b6?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1574541709558-2643cafaf5f6?w=1200&h=800&fit=crop',
      ],
    },
    'kalimantan-football-2023': {
      id: 2,
      title: 'Kalimantan Football Cup 2023',
      date: 'Februari 2023',
      location: 'Stadion Demang Lehman',
      category: 'football',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Selatan ini menghadirkan 16 tim terbaik. Event ini menjadi ajang pencarian bakat pemain muda berbakat dari daerah untuk kemudian direkrut oleh klub-klub profesional.',
      highlights: [
        'Peserta: 16 tim sepakbola profesional',
        'Total pertandingan: 31 laga',
        'Durasi: 10 hari kompetisi',
        'Hadiah total: Rp 25.000.000',
        'Penonton: 5000+ selama event',
        'Stadion: Stadion Demang Lehman (kapasitas 10.000)',
      ],
      winner: 'Persiban Banjarbaru',
      runnerUp: 'PSGM Martapura',
      thirdPlace: 'Banjarmasin FC',
      images: [
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop',
      ],
    },
    'sunday-league-s5': {
      id: 3,
      title: 'Sunday Futsal League Season 5',
      date: 'Januari - Maret 2023',
      location: 'Futsal Center Banjarbaru',
      category: 'futsal',
      description: 'Liga futsal reguler dengan sistem kompetisi penuh selama 3 bulan. Event ini menjadi wadah bagi tim-tim futsal untuk terus berkompetisi dan meningkatkan skill permainan mereka.',
      highlights: [
        'Peserta: 24 tim futsal',
        'Total pertandingan: 132 laga',
        'Durasi: 3 bulan kompetisi',
        'Hadiah total: Rp 15.000.000',
        'Penonton: 3000+ selama event',
      ],
      winner: 'Galatama FC',
      runnerUp: 'FC Nusantara',
      thirdPlace: 'Banjarbaru United',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=1200&h=800&fit=crop',
      ],
    },
    'youth-futsal-2023': {
      id: 4,
      title: 'Youth Futsal Championship U-17',
      date: 'Oktober 2023',
      location: 'GOR Banjarbaru',
      category: 'futsal',
      description: 'Turnamen futsal khusus usia dini (U-17) untuk mencari bakat-bakat muda berbakat. Event ini mendapat respon positif dari berbagai sekolah dan klub futsal muda di Kalimantan Selatan.',
      highlights: [
        'Peserta: 40 tim U-17',
        'Total pertandingan: 78 laga',
        'Durasi: 12 hari kompetisi',
        'Hadiah total: Rp 8.000.000',
        'Penonton: 1500+ selama event',
      ],
      winner: 'Bintang Muda FC',
      runnerUp: 'Pelajar Banjarbaru',
      thirdPlace: 'Remaja Banjarmasin',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=1200&h=800&fit=crop',
      ],
    },
    'palangkaraya-2023': {
      id: 5,
      title: 'Palangkaraya Football Tournament',
      date: 'Desember 2023',
      location: 'Stadion Tuah Pahoe',
      category: 'football',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Tengah yang berhasil menyatukan tim-tim dari berbagai kota. Event ini menjadi ajang silaturahmi dan kompetisi sehat antar daerah.',
      highlights: [
        'Peserta: 20 tim sepakbola',
        'Total pertandingan: 38 laga',
        'Durasi: 10 hari kompetisi',
        'Hadiah total: Rp 20.000.000',
        'Penonton: 4000+ selama event',
      ],
      winner: 'Persikap Kapuas',
      runnerUp: 'Palangkaraya FC',
      thirdPlace: 'Kalteng United',
      images: [
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=1200&h=800&fit=crop',
      ],
    },
    'banjarmasin-festival-2023': {
      id: 6,
      title: 'Banjarmasin Sports Festival 2023',
      date: 'November 2023',
      location: 'Banjarmasin',
      category: 'festival',
      description: 'Festival olahraga multi-cabang dengan berbagai aktivitas menarik. Event ini tidak hanya menampilkan kompetisi, tetapi juga hiburan dan bazaar kuliner yang menarik pengunjung dari berbagai daerah.',
      highlights: [
        'Peserta: 500+ atlet',
        'Cabang: Futsal, Sepakbola, Basket, Voli',
        'Durasi: 5 hari festival',
        'Hadiah total: Rp 30.000.000',
        'Pengunjung: 10000+ selama event',
      ],
      winner: 'Berbagai kategori',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=1200&h=800&fit=crop',
      ],
    },
  }

  const galleryData = galleries[galleryId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [galleryId])

  if (!galleryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Galeri Tidak Ditemukan</h1>
          <button
            onClick={() => navigate('/#gallery')}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            Kembali ke Galeri
          </button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryData.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryData.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <motion.div
        className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-secondary to-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img
          src={galleryData.images[0]}
          alt={galleryData.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-primary text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 inline-flex items-center gap-1.5">
                {galleryData.category === 'futsal' ? <FutsalIcon /> : galleryData.category === 'football' ? <FootballIcon /> : <FestivalIcon />}
                <span className="capitalize">{galleryData.category}</span>
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">{galleryData.title}</h1>
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-lg">
                <span className="flex items-center gap-2">
                  <CalendarIcon /> {galleryData.date}
                </span>
                <span className="flex items-center gap-2">
                  <LocationIcon /> {galleryData.location}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/#gallery')}
          className="mb-6 flex items-center gap-2 text-secondary hover:text-primary transition-colors font-semibold"
          whileHover={{ x: -5 }}
        >
          <ArrowLeftIcon />
          Kembali ke Galeri
        </motion.button>

        {/* Main Image Slider */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] bg-gray-900">
            <img
              src={galleryData.images[currentImageIndex]}
              alt={`${galleryData.title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            {galleryData.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRightIcon />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full text-sm md:text-base">
              {currentImageIndex + 1} / {galleryData.images.length}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="p-4 bg-gray-50">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {galleryData.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-primary ring-2 ring-primary/50' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
            <BookIcon /> Tentang Event
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{galleryData.description}</p>
        </motion.div>

        {/* Results */}
        <motion.div
          className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg p-6 md:p-8 mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <TrophyIcon className="text-white w-8 h-8" /> Hasil Pertandingan
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex justify-center mb-2"><MedalIcon rank={1} /></div>
              <div className="font-bold text-sm mb-1">Juara 1</div>
              <div className="text-lg font-black">{galleryData.winner}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex justify-center mb-2"><MedalIcon rank={2} /></div>
              <div className="font-bold text-sm mb-1">Juara 2</div>
              <div className="text-lg font-black">{galleryData.runnerUp}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex justify-center mb-2"><MedalIcon rank={3} /></div>
              <div className="font-bold text-sm mb-1">Juara 3</div>
              <div className="text-lg font-black">{galleryData.thirdPlace}</div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            <StarIcon /> Highlight Event
          </h2>
          <ul className="space-y-3">
            {galleryData.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="text-primary mt-1"><CheckIcon /></span>
                <span className="text-sm md:text-base">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Photo Stats */}
        <motion.div
          className="bg-gray-100 rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex justify-center mb-2 text-primary"><PhotoIcon /></div>
          <div className="text-2xl font-bold text-secondary mb-2">
            <AnimatedCounter end={galleryData.images.length} suffix=" Foto" />
          </div>
          <div className="text-gray-600 text-sm">
            Klik thumbnail di bawah slider untuk melihat foto lainnya
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GalleryDetail
