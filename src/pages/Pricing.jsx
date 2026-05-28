import React, { useEffect } from 'react';
import { Check, Star, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      id: 1,
      name: "Starter Plan",
      price: "₹ 5,000",
      tagline: "Ideal for basic business showcases",
      features: [
        "100% Responsive Website",
        "Live Chat Integration",
        "Social Media Integration",
        "Interactive Inquiry Form",
        "Basic E-commerce Setup",
        "1 Year Free Technical Support",
        "Annual Hosting Renewal: ₹4,000"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professional Plan",
      price: "₹ 10,000",
      tagline: "Great for growing online brands",
      features: [
        "Everything in Starter Plan",
        "Custom Email Configurations",
        "Product Variations & Options",
        "Auto-Invoice Bill Generator",
        "Digital Wallet System Features",
        "Secure OTP Verification",
        "1 Year Free Technical Support",
        "Annual Hosting Renewal: ₹4,000"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "₹ 15,000",
      tagline: "Ultimate scale & enterprise tools",
      features: [
        "Everything in Professional Plan",
        "Multi-Level E-commerce Portals",
        "Advanced Analytics Dashboard",
        "Instant Order Notifications",
        "Payment Gateway Integration",
        "Priority 24/7 Tech Maintenance",
        "Custom Features on Request",
        "Annual Hosting Renewal: ₹4,000"
      ],
      popular: false
    }
  ];

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(156, 107, 255, 0.85) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Pricing Plans</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            Flexible subscription tiers designed to match the scale and needs of your corporate projects.
          </p>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="section-title">Select Your Plan</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '550px' }}>
              Transparent development packages with standard 1-year complimentary technical support.
            </p>
          </div>

          <div className="row g-4 justify-content-center align-items-stretch">
            {plans.map((plan) => (
              <div key={plan.id} className="col-lg-4 col-md-6 d-flex">
                <div 
                  className={`interactive-card p-4 d-flex flex-column w-100 text-center ${plan.popular ? 'border-primary' : ''}`}
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(to bottom, #4d1ea3, #7645fc)' 
                      : 'linear-gradient(to bottom, #ffffff, #f7fafc)',
                    color: plan.popular ? 'white' : 'var(--text-dark)',
                    border: plan.popular ? 'none' : '1px solid rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  
                  {plan.popular && (
                    <span className="badge bg-warning text-dark position-absolute py-2 px-3 fw-bold d-flex align-items-center gap-1 shadow-sm" style={{
                      top: '15px', right: '15px', borderRadius: '30px', fontSize: '0.75rem'
                    }}>
                      <Star size={12} fill="currentColor" /> MOST POPULAR
                    </span>
                  )}

                  
                  <div className="my-3">
                    <h3 className="fw-bold mb-2" style={{ 
                      color: plan.popular ? 'white' : 'var(--main-color)', 
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.65rem'
                    }}>
                      {plan.name}
                    </h3>
                    <p className={`small mb-4 ${plan.popular ? 'text-white-50' : 'text-muted'}`}>
                      {plan.tagline}
                    </p>
                    <hr className={plan.popular ? 'bg-white opacity-25' : 'bg-dark opacity-10'} />
                    <div className="d-flex align-items-center justify-content-center gap-1 my-4">
                      <span className="fs-1 fw-bold">{plan.price}</span>
                      <span className={`small ${plan.popular ? 'text-white-50' : 'text-muted'}`}>/ One-time Setup</span>
                    </div>
                  </div>

                  
                  <ul className="list-unstyled text-start mb-5 flex-grow-1" style={{ fontSize: '0.92rem' }}>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="d-flex align-items-start gap-2 py-2" style={{
                        borderBottom: plan.popular ? '1px dashed rgba(255,255,255,0.1)' : '1px dashed rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s',
                        cursor: 'default'
                      }}>
                        <Check size={16} className={plan.popular ? 'text-warning' : 'text-success'} style={{ marginTop: '3px' }} />
                        <span className={plan.popular ? 'text-white-90' : 'text-secondary'}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  
                  <div className="mt-auto">
                    {plan.popular ? (
                      <a href="tel:+919363643763" className="btn btn-warning text-dark fw-bold w-100 py-3 rounded-pill shadow-sm" style={{
                        transition: 'all 0.3s'
                      }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Call Sales Team <i className="fas fa-phone ms-1"></i>
                      </a>
                    ) : (
                      <Link to="/contact" className="btn btn-outline-purple w-100 py-3 rounded-pill" style={{
                        color: 'var(--main-color)',
                        border: '2px solid var(--main-color)',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--main-color)';
                        e.currentTarget.style.color = 'white';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--main-color)';
                      }}>
                        Book Consultation
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#f5f7ff' }}>
        <div className="container py-4">
          <div className="row g-4 align-items-center justify-content-center text-start">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                All Plans Include Security-First Standards
              </h3>
              <p className="text-muted mb-0" style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
                Every single custom website and mobile application built by Saishnaa complies with end-to-end encryption protocols, automatic input-sanitization frameworks, standard SSL certifications, responsive layouts optimized for mobile displays, and high SEO performance standards.
              </p>
            </div>
            <div className="col-lg-3 text-center">
              <div className="interactive-card p-4 d-flex align-items-center gap-3">
                <ShieldAlert size={48} className="text-warning flex-shrink-0" />
                <div className="text-start">
                  <h6 className="fw-bold mb-1" style={{ color: 'var(--main-color)' }}>Safe & Compliant</h6>
                  <small className="text-muted">SOC2 & GDPR ready infrastructures</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
