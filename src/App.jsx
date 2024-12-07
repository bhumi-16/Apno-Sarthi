import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Overview from './components/Overview';
import InfoSection from './components/InfoSection';
import Features from './components/Features';
import JodhpurGallery from './components/JodhpurGallery';
import Footer from './components/Footer';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import TestimonialSlider from './components/TestimonialSlider';
import ReviewForm from './components/ReviewForm';
import AboutUs from './components/AboutUs'; // Import the AboutUs component

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get the current route path

  // Check if the current path is the home route or about page
  const isHomeOrAbout = location.pathname === '/' || location.pathname === '/about';

  return (
    <div className="bg-[#edeecb] min-h-screen overflow-x-hidden">
      {/* Conditionally render Header and Footer on home and about routes */}
      {isHomeOrAbout && <Header />}

      {/* Define Routes */}
      <Routes>
        {/* Home Page (default route) */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Overview />
              <InfoSection />
              <Features />
              <JodhpurGallery />
              <TestimonialSlider />
            </>
          }
        />

        {/* About Us Page Route */}
        <Route path="/about" element={<AboutUs />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Contact Us Page Route */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Review Form Route */}
        <Route path="/review" element={<ReviewForm />} />
      </Routes>

      {/* Conditionally render Footer on home and about routes */}
      {isHomeOrAbout && <Footer />}
    </div>
  );
}

export default App;
