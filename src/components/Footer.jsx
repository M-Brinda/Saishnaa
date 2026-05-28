import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState({ show: false, success: true, message: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubStatus({
        show: true,
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      });
      setEmail('');
      setTimeout(() => setSubStatus({ show: false, success: true, message: '' }), 5000);
    } else {
      setSubStatus({
        show: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
    }
  };

  return (
    <footer className="footer" style={{
      background: 'linear-gradient(135deg, var(--main-color) 0%, var(--secondary-color) 100%)',
      color: 'white',
      padding: '70px 0 30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '6px',
        background: 'linear-gradient(90deg, var(--accent-color), var(--success-color), var(--accent-color))'
      }}></div>

      <div className="container">
        <div className="row g-4">
          
          <div className="col-lg-4 mb-4 mb-lg-0 text-start">
            <h4 className="fw-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Saishnaa IT Solutions</h4>
            <p className="opacity-75" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Innovative technology solutions tailored to your business needs. Let's build the future together.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61577296040956" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center text-white" style={{
                width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', transition: 'all 0.3s'
              }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/saishnaa83696" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center text-white" style={{
                width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', transition: 'all 0.3s'
              }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/saishnaa-software-solutions-erode-978b08342/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center text-white" style={{
                width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', transition: 'all 0.3s'
              }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/saishnaa_software/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center text-white" style={{
                width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', transition: 'all 0.3s'
              }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="fw-bold mb-4 position-relative pb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'var(--warning-color)', borderRadius: '2px' }}></span>
            </h5>
            <ul className="list-unstyled opacity-75 d-flex flex-column gap-2" style={{ fontSize: '0.95rem' }}>
              <li><Link to="/" className="text-white nav-link-hover">About Us</Link></li>
              <li><Link to="/services" className="text-white nav-link-hover">Services</Link></li>
              <li><Link to="/projects" className="text-white nav-link-hover">Projects</Link></li>
              <li><Link to="/journals" className="text-white nav-link-hover">Academic Journals</Link></li>
              <li><Link to="/pricing" className="text-white nav-link-hover">Pricing</Link></li>
              <li><Link to="/team" className="text-white nav-link-hover">Our Team</Link></li>
              <li><Link to="/careers" className="text-white nav-link-hover">Careers</Link></li>
              <li><Link to="/blog" className="text-white nav-link-hover">Blog</Link></li>
            </ul>
          </div>

          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="fw-bold mb-4 position-relative pb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Us
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'var(--warning-color)', borderRadius: '2px' }}></span>
            </h5>
            <ul className="list-unstyled opacity-75 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
              <li className="d-flex align-items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1 text-warning"></i>
                <span>Sakthi nagar, Thindal, Erode-638012</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="fas fa-phone text-warning"></i>
                <span>+91 9363643763</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="fas fa-envelope text-warning"></i>
                <span>saishnaa@gmail.com</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <i className="fas fa-clock mt-1 text-warning"></i>
                <span>Mon-Sat: 9:30AM - 5:30PM</span>
              </li>
            </ul>
          </div>

          
          <div className="col-lg-3 text-start">
            <h5 className="fw-bold mb-4 position-relative pb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Newsletter
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'var(--warning-color)', borderRadius: '2px' }}></span>
            </h5>
            <p className="opacity-75 mb-3" style={{ fontSize: '0.95rem' }}>
              Subscribe to our newsletter for the latest tech updates and career opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="mt-3">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', outline: 'none' }}
                  required 
                />
                <button className="btn btn-warning fw-bold text-dark px-3" type="submit" style={{ borderTopRightRadius: '25px', borderBottomRightRadius: '25px' }}>
                  Subscribe
                </button>
              </div>
              {subStatus.show && (
                <small className={`mt-2 d-block fw-bold ${subStatus.success ? 'text-success' : 'text-danger'}`} style={{ animation: 'pageFadeIn 0.3s ease' }}>
                  {subStatus.message}
                </small>
              )}
            </form>
          </div>
        </div>

        <hr className="my-5 bg-white opacity-25" />

        <div className="row align-items-center" style={{ fontSize: '0.9rem' }}>
          <div className="col-md-6 text-center text-md-start opacity-75 mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Saishnaa IT Solutions. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end d-flex justify-content-center justify-content-md-end gap-3">
            <Link to="/privacy" className="text-white opacity-75 nav-link-hover">Privacy Policy</Link>
            <span className="opacity-25">|</span>
            <Link to="/terms" className="text-white opacity-75 nav-link-hover">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
