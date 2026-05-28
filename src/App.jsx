import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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

// High-performance SEO, AIO, and SIO Page-Specific Configuration
const SEO_CONFIG = {
  '/': {
    title: 'Saishnaa Software Solutions | Innovative Software & AI Development Erode',
    description: 'Saishnaa Software Solutions in Thindal, Erode offers custom web/mobile app development, AI/ML integrations, cloud migration, and cybersecurity consulting.',
    keywords: 'Saishnaa, Saishnaa Software, IT Solutions Erode, Software Development Erode, AI Machine Learning Thindal'
  },
  '/services': {
    title: 'State-of-the-Art IT & AI Services | Saishnaa Software Solutions',
    description: 'Explore Saishnaa\'s premium custom software development, mobile apps, artificial intelligence engineering, cloud migrations, and cybersecurity auditing.',
    keywords: 'software services Erode, AI development, cloud migration services, cybersecurity audit Erode'
  },
  '/projects': {
    title: 'Our Portfolio & Innovation Showcases | Saishnaa Software Solutions',
    description: 'Discover high-performance web systems, enterprise portals, AI automations, and custom mobile apps developed by Saishnaa Software Solutions.',
    keywords: 'Saishnaa portfolio, software projects, React cases, custom apps portfolio'
  },
  '/journals': {
    title: 'Tech Journals, Whitepapers & Research | Saishnaa Software Solutions',
    description: 'Read our technical research, software engineering blogs, and scholarly publications on AI, cloud scalability, and advanced web technologies.',
    keywords: 'IT journals, technology research, software whitepapers, AI journals Erode'
  },
  '/pricing': {
    title: 'Transparent & Cost-Effective Pricing Plans | Saishnaa Software Solutions',
    description: 'Choose from Starter, Professional, and Premium bespoke software development pricing tiers. High-performance, secure, and scalable solutions for every business.',
    keywords: 'software pricing Erode, app development cost, IT consulting packages'
  },
  '/team': {
    title: 'Meet Our Expert Engineers & Strategists | Saishnaa Software Solutions',
    description: 'Get to know the highly skilled engineering leaders, UX designers, and technical consultants behind Saishnaa\'s digital success stories.',
    keywords: 'Saishnaa team, software engineers Erode, technology leaders Thindal'
  },
  '/careers': {
    title: 'Join Our Dynamic Engineering Team | Careers at Saishnaa',
    description: 'Build the future of technology with us. Explore remote and on-site job openings for React developers, Python engineers, and cloud specialists.',
    keywords: 'IT jobs Erode, software developer vacancies, hire React developers Erode'
  },
  '/blog': {
    title: 'Latest Tech Insights, News & Digital Trends | Saishnaa Blog',
    description: 'Stay ahead with articles on AI innovation, web development best practices, cybersecurity trends, and digital transformation tips from Saishnaa engineers.',
    keywords: 'software blog, IT news Erode, React tutorials, technology trends'
  },
  '/contact': {
    title: 'Contact Us for Free Consultation | Saishnaa Software Solutions',
    description: 'Get in touch with our expert consultants in Erode for custom web, mobile, or AI projects. Schedule your free 1-on-1 technical consultation today!',
    keywords: 'contact Saishnaa, software developers Thindal, IT consultation Erode'
  },
  '/privacy': {
    title: 'Privacy Policy | Saishnaa Software Solutions',
    description: 'Learn how we protect your personal information and collect log data on the Saishnaa Software Solutions platform.',
    keywords: 'privacy policy, Saishnaa'
  },
  '/terms': {
    title: 'Terms of Service | Saishnaa Software Solutions',
    description: 'Review the terms, conditions, and intellectual property rights associated with using the Saishnaa Software Solutions website.',
    keywords: 'terms of service, Saishnaa'
  }
};

// Scroll to Top on route change & dynamically inject AIO / SEO / SIO tags
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fallback if path is not matched
    const currentSEO = SEO_CONFIG[pathname] || SEO_CONFIG['/'];
    
    // 1. Update document title
    document.title = currentSEO.title;
    
    // 2. Update description meta tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentSEO.description);

    // 3. Update keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', currentSEO.keywords);

    // 4. Update canonical link to prevent duplicate content indexing
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://saishnaa.com${pathname === '/' ? '' : pathname}`);
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
