import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import About from './components/About'
import Gallery from './components/Gallery'
import GalleryDetail from './components/GalleryDetail'
import EventDetail from './components/EventDetail'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <main>
                <Hero />
                <Events />
                <About />
                <Gallery />
              </main>
              <Footer />
            </>
          } />
          <Route path="/event/:eventId" element={
            <EventDetail />
          } />
          <Route path="/gallery/:galleryId" element={
            <>
              <GalleryDetail />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
