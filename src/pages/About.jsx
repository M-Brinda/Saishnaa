import React, { useEffect } from 'react';
import { ArrowRight, Code, Shield, Users, Layers, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  // Page animation scroll effect reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { id: 1, label: "Projects Completed", value: "150+", icon: <Layers size={24} /> },
    { id: 2, label: "Active Clients", value: "80+", icon: <Users size={24} /> },
    { id: 3, label: "Expert Technologists", value: "40+", icon: <Cpu size={24} /> },
    { id: 4, label: "Client Retention Rate", value: "98%", icon: <TrendingUp size={24} /> }
  ];

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(118, 171, 212, 0.8) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="floating-shapes">
          <div className="shape" style={{ width: '40px', height: '40px', top: '15%', left: '10%', borderRadius: '50%', animationDelay: '0s' }}></div>
          <div className="shape" style={{ width: '60px', height: '60px', top: '65%', left: '85%', borderRadius: '20% 50%', animationDelay: '1s' }}></div>
          <div className="shape" style={{ width: '50px', height: '50px', top: '35%', left: '50%', borderRadius: '50%', animationDelay: '2s' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-3 fw-extrabold mb-3 animate__animated animate__fadeInDown" style={{ fontFamily: 'Outfit, sans-serif', textShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
            Saishnaa Software Solutions
          </h1>
          <p className="fs-4 max-w-700 mb-5 animate__animated animate__fadeInUp animate__delay-1s opacity-90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)', maxWidth: '750px', margin: '0 auto 40px' }}>
            Empowering Digital Futures with State-of-the-Art Software and AI Integration
          </p>
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <Link to="/services" className="btn-purple fs-5 py-3 px-5">
              Explore Our Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-5" style={{
        background: 'linear-gradient(rgba(225, 231, 168, 0.4), rgba(152, 216, 241, 0.3))',
        padding: '100px 0 !important'
      }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-title">About Us</h2>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-10">
              <div className="glass-panel p-5 rounded-4 text-start shadow-sm mb-5" style={{ border: '1px solid rgba(77, 30, 163, 0.1)' }}>
                <p className="lead mb-4 fw-normal text-justify" style={{ lineHeight: '1.9', color: '#b30000', fontSize: '1.15rem' }}>
                  Saishnaa is a forward-thinking technology company committed to delivering state-of-the-art digital solutions that facilitate the transformation, optimization, and advancement of businesses across diverse industries. Our organization is built upon a foundation of innovation, agility, and client-centricity, bringing together a multidisciplinary team of highly skilled technologists, strategic consultants, and creative thinkers.
                </p>
                <p className="lead mb-4 fw-normal text-justify" style={{ lineHeight: '1.9', color: '#b30000', fontSize: '1.15rem' }}>
                  At the heart of Saishnaa’s core offerings lies our expertise in full-cycle application development. We build custom mobile and web applications that seamlessly integrate with client workflows, enhance operational efficiency, and offer rich, intuitive user experiences. Our development process emphasizes performance, scalability, and security, ensuring that every solution is built to deliver long-term value.
                </p>
                <p className="lead fw-normal text-justify mb-0" style={{ lineHeight: '1.9', color: '#b30000', fontSize: '1.15rem' }}>
                  We are also pioneers in artificial intelligence and machine learning integration. By leveraging cutting-edge AI algorithms, we develop intelligent systems that automate complex business processes, generate actionable insights from data, and empower organizations to make predictive, data-driven decisions.
                </p>
              </div>

              
              <div className="row g-4 text-center mt-2">
                {stats.map(stat => (
                  <div key={stat.id} className="col-md-3 col-sm-6">
                    <div className="interactive-card p-4 h-100 d-flex flex-column align-items-center justify-content-center">
                      <div className="mb-3 text-white d-flex align-items-center justify-content-center" style={{
                        width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--main-color), var(--secondary-color))'
                      }}>
                        {stat.icon}
                      </div>
                      <h2 className="fw-bold mb-1" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>{stat.value}</h2>
                      <p className="text-muted small mb-0 fw-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="interactive-card p-5 h-100 text-start d-flex flex-column" style={{ borderLeft: '6px solid var(--main-color)' }}>
                <h3 className="fw-bold mb-4" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Our Mission</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                  To bridge the gap between businesses and cutting-edge technology. We deliver high-value IT services, bespoke software applications, and intelligent systems that optimize operations, increase profitability, and ensure our clients stay ahead of the digital curve.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="interactive-card p-5 h-100 text-start d-flex flex-column" style={{ borderLeft: '6px solid var(--secondary-color)' }}>
                <h3 className="fw-bold mb-4" style={{ color: 'var(--secondary-color)', fontFamily: 'Outfit, sans-serif' }}>Our Vision</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                  To be recognized globally as a benchmark of technological excellence, driving meaningful digital transformation. We envision a future where business ecosystems are seamlessly automated, secure, and powered by intelligent analytics, contributing to sustainable global growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5 text-white" style={{
        background: 'linear-gradient(135deg, var(--main-color), #3a0ca3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container py-4 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem' }}>Ready to Accelerate Your Digital Transformation?</h2>
          <p className="fs-5 max-w-700 opacity-90 mb-4" style={{ maxWidth: '650px', margin: '0 auto 30px' }}>
            Let's build intelligent products, scale your workflows, and create secure digital platforms that drive results.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-light btn-lg text-dark fw-bold px-4 py-2" style={{ borderRadius: '50px' }}>
              Book Free Consultation
            </Link>
            <Link to="/services" className="btn btn-outline-light btn-lg px-4 py-2" style={{ borderRadius: '50px' }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
