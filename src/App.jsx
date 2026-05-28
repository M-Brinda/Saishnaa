import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Reusable Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Import Pages
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Journals from './pages/Journals';

// Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback Privacy Policy page
function Privacy() {
  return (
    <div className="page-fade-in py-5" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <div className="container py-4 text-start">
        <h2 className="fw-bold mb-4" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Privacy Policy</h2>
        <p className="text-muted" style={{ lineHeight: '1.8' }}>
          At Saishnaa Software Solutions, accessible from saishnaa.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Saishnaa and how we use it.
        </p>
        <h5 className="fw-bold mt-4" style={{ color: 'var(--main-color)' }}>Log Files</h5>
        <p className="text-muted" style={{ lineHeight: '1.8' }}>
          Saishnaa follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        </p>
        <h5 className="fw-bold mt-4" style={{ color: 'var(--main-color)' }}>Consent</h5>
        <p className="text-muted" style={{ lineHeight: '1.8' }}>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
}

// Fallback Terms of Service page
function Terms() {
  return (
    <div className="page-fade-in py-5" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <div className="container py-4 text-start">
        <h2 className="fw-bold mb-4" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Terms of Service</h2>
        <p className="text-muted" style={{ lineHeight: '1.8' }}>
          Welcome to Saishnaa Software Solutions! These terms and conditions outline the rules and regulations for the use of Saishnaa's Website, located at saishnaa.com.
        </p>
        <h5 className="fw-bold mt-4" style={{ color: 'var(--main-color)' }}>Intellectual Property Rights</h5>
        <p className="text-muted" style={{ lineHeight: '1.8' }}>
          Other than the content you own, under these Terms, Saishnaa and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
        </p>
        <h5 className="fw-bold mt-4" style={{ color: 'var(--main-color)' }}>Limitation of Liability</h5>
        <p className="text-muted" style={{ lineHeight: '1.8' }}>
          In no event shall Saishnaa, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100" style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}>
        
        <Navbar />

        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
