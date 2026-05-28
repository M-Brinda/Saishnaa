import React, { useState, useEffect } from 'react';
import { Layers, Sparkles, Filter, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectList = [
    {
      id: 1,
      title: "Retail AI Analytics",
      category: "AI & ML",
      description: "An intelligent retail forecasting system using custom machine learning algorithms for high-accuracy consumer demand prediction and automated inventory stock optimization.",
      tags: ["AI/ML", "Data Analytics", "Retail"],
      image: "/img/retails.jpg"
    },
    {
      id: 2,
      title: "Smart Healthcare App",
      category: "E-commerce & IoT",
      description: "A secure cross-platform mobile app enabling continuous remote patient monitoring, IoT medical sensor syncs, and seamless telemedicine doctor-patient scheduling.",
      tags: ["Mobile", "Healthcare", "IoT"],
      image: "/img/he1.jpg"
    },
    {
      id: 3,
      title: "Finance Cloud Migration",
      category: "Cloud & Security",
      description: "Successfully architected and transitioned a leading wealth firm's legacy databases to a secure, decentralized hybrid cloud with zero business downtime and automated SOC2 audits.",
      tags: ["Cloud", "Security", "Finance"],
      image: "/img/CloudMigration.jpg"
    },
    {
      id: 4,
      title: "Enterprise E-commerce",
      category: "E-commerce & IoT",
      description: "Built a high-performance commerce portal designed to support 10,000+ concurrent customers, powered by a customized AI recommend system and express checkout pipelines.",
      tags: ["E-commerce", "Scalability", "AI Search"],
      image: "/img/e1.png"
    },
    {
      id: 5,
      title: "Smart City IoT Dashboard",
      category: "E-commerce & IoT",
      description: "An interactive, web-based city monitoring system aggregating real-time air quality, grid status, and emergency response telemetry from thousands of hardware sensors.",
      tags: ["IoT", "Data Visualization", "Smart Cities"],
      image: "/img/Data1.png"
    },
    {
      id: 6,
      title: "Blockchain Supply Chain",
      category: "Cloud & Security",
      description: "Developed a distributed ledger supply chain protocol enabling end-to-end trace logs for high-value logistics, safeguarding products and eliminating counterfeiting risks.",
      tags: ["Blockchain", "Logistics", "Security"],
      image: "/img/cy1.jpg"
    }
  ];

  const categories = ['All', 'AI & ML', 'Cloud & Security', 'E-commerce & IoT'];

  const filteredProjects = activeTab === 'All' 
    ? projectList 
    : projectList.filter(proj => proj.category === activeTab);

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(152, 241, 182, 0.8) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Projects</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            Showcasing innovation, software craftsmanship, and impactful digital transformations.
          </p>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#f9fafc' }}>
        <div className="container py-4">
          
          
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Work</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '550px' }}>
              Explore how we help global brands and regional leaders launch secure, scalable digital architectures.
            </p>
          </div>

          
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="btn px-4 py-2 fw-semibold"
                style={{
                  borderRadius: '30px',
                  backgroundColor: activeTab === cat ? 'var(--main-color)' : 'white',
                  color: activeTab === cat ? 'white' : 'var(--main-color)',
                  border: activeTab === cat ? 'none' : '1px solid rgba(77, 30, 163, 0.2)',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === cat ? '0 4px 15px rgba(77, 30, 163, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          
          <div className="row g-4 justify-content-center">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="col-lg-4 col-md-6" 
                style={{ 
                  animation: 'pageFadeIn 0.5s ease both',
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className="interactive-card h-100 d-flex flex-column text-start" style={{ position: 'relative' }}>
                  
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '5px',
                    background: 'linear-gradient(90deg, var(--accent-light), var(--secondary-color))'
                  }}></div>

                  
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    
                    <span className="badge bg-secondary position-absolute bottom-3 end-3 shadow-sm py-2 px-3 text-white" style={{
                      backgroundColor: 'rgba(77, 30, 163, 0.85)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '30px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      bottom: '15px',
                      right: '15px',
                      zIndex: 2,
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      {project.category}
                    </span>
                  </div>

                  
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <h5 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                      {project.title}
                    </h5>
                    <p className="card-text text-muted mb-4 flex-grow-1" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                      {project.description}
                    </p>

                    
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((t, tIdx) => (
                        <span key={tIdx} className="badge" style={{
                          backgroundColor: 'rgba(118, 69, 252, 0.08)',
                          color: 'var(--secondary-color)',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          padding: '6px 12px',
                          border: '1px solid rgba(118, 69, 252, 0.15)'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-12 py-5 text-center text-muted">
                <p className="fs-5">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      
      <section className="py-5 text-white" style={{
        background: 'linear-gradient(135deg, var(--main-color), var(--secondary-color))',
        position: 'relative'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Have an Idea for a Custom Digital Solution?</h2>
          <p className="fs-5 max-w-700 opacity-90 mx-auto mb-4" style={{ maxWidth: '600px' }}>
            Our engineering team is ready to analyze your challenges and build custom systems that accelerate your growth.
          </p>
          <Link to="/contact" className="btn btn-warning btn-lg text-dark fw-bold px-4 py-2" style={{ borderRadius: '50px' }}>
            Book Consultation Call
          </Link>
        </div>
      </section>
    </div>
  );
}
