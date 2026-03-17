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

const FestivalIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L9 9H2l5.5 4.5L5 21l7-7 7 7-2.5-7.5L22 9h-7L12 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
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

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeWidth="2"/>
  </svg>
)

const PhotoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
    <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" strokeWidth="2"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Gallery = () => {
  const sectionRef = useRef(null)
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-title',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.gallery-filter', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-filter',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.utils.toArray('.gallery-card').forEach((card, index) => {
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

  const galleries = [
    {
      id: 1,
      galleryId: 'banjarbaru-futsal-2023',
      title: 'Banjarbaru Futsal Championship 2023',
      date: 'Maret 2023',
      location: 'GOR Banjarbaru',
      category: 'futsal',
      description: 'Turnamen futsal terbesar di Banjarbaru berhasil diselenggarakan dengan meriah. Sebanyak 32 tim dari berbagai daerah di Kalimantan Selatan berpartisipasi dalam event ini.',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 2,
      galleryId: 'kalimantan-football-2023',
      title: 'Kalimantan Football Cup 2023',
      date: 'Februari 2023',
      location: 'Stadion Demang Lehman',
      category: 'football',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Selatan ini menghadirkan 16 tim terbaik.',
      images: [
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 3,
      galleryId: 'sunday-league-s5',
      title: 'Sunday Futsal League Season 5',
      date: 'Januari - Maret 2023',
      location: 'Futsal Center Banjarbaru',
      category: 'futsal',
      description: 'Liga futsal reguler dengan sistem kompetisi penuh selama 3 bulan.',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 4,
      galleryId: 'youth-futsal-2023',
      title: 'Youth Futsal Championship U-17',
      date: 'Oktober 2023',
      location: 'GOR Banjarbaru',
      category: 'futsal',
      description: 'Turnamen futsal khusus usia dini (U-17) untuk mencari bakat-bakat muda berbakat.',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 5,
      galleryId: 'palangkaraya-2023',
      title: 'Palangkaraya Football Tournament',
      date: 'Desember 2023',
      location: 'Stadion Tuah Pahoe',
      category: 'football',
      description: 'Turnamen sepakbola tingkat provinsi Kalimantan Tengah yang berhasil menyatukan tim-tim dari berbagai kota.',
      images: [
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 6,
      galleryId: 'banjarmasin-festival-2023',
      title: 'Banjarmasin Sports Festival 2023',
      date: 'November 2023',
      location: 'Banjarmasin',
      category: 'festival',
      description: 'Festival olahraga multi-cabang dengan berbagai aktivitas menarik.',
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551958219-acbc607c6a3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518605348417-871c67f3e9c9?w=800&h=600&fit=crop',
      ],
    },
  ]

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'futsal', label: 'Futsal' },
    { id: 'football', label: 'Sepakbola'},
    { id: 'festival', label: 'Festival' },
  ]

  const filteredGalleries = activeCategory === 'all'
    ? galleries
    : galleries.filter(g => g.category === activeCategory)

  const handleViewClick = (gallery) => {
    navigate(`/gallery/${gallery.galleryId}`)
  }

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gallery-title text-3xl md:text-5xl font-extrabold text-secondary">
            Galeri <span className="text-primary">Event</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dokumentasi event-event yang telah kami selenggarakan dengan sukses.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="gallery-filter flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleries.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              className="gallery-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => handleViewClick(gallery)}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={gallery.images[0]}
                  alt={gallery.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-secondary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    {gallery.category === 'futsal' ? <FutsalIcon /> : gallery.category === 'football' ? <FootballIcon /> : <FestivalIcon />}
                    <span className="capitalize">{gallery.category}</span>
                  </span>
                </div>

                {/* View Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="bg-white text-secondary font-bold px-8 py-3 rounded-full shadow-lg flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EyeIcon /> Lihat Galeri
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
                  {gallery.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <CalendarIcon /> {gallery.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <LocationIcon /> {gallery.location}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {gallery.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <PhotoIcon /> {gallery.images.length} Foto
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

export default Gallery
