import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TempleHighlights from './components/TempleHighlights';
import VirtualTour from './components/VirtualTour';
import History from './components/History';
import UpcomingEvents from './components/UpcomingEvents';
import DonationSection from './components/DonationSection';
import VisitorInfo from './components/VisitorInfo';
import PhotoGallery from './components/PhotoGallery';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = "श्री राम मंदिर अयोध्या - आधिकारिक वेबसाइट";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TempleHighlights />
      <VirtualTour />
      <History />
      <UpcomingEvents />
      <PhotoGallery />
      <VisitorInfo />
      <DonationSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;