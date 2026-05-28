import React, { useEffect } from 'react';
import { Shield, Sparkles, Database, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceList = [
    {
      id: 1,
      title: "Technology & Software Development",
      image: "/img/4.jpg",
      points: [
        "Custom web & mobile application development",
        "Cloud-native software and system integration",
        "AI-driven automation & custom enterprise databases"
      ],
      tag: "Core Tech"
    },
    {
      id: 2,
      title: "Marketing & Branding",
      image: "/img/img5.png",
      points: [
        "Social media management & growth strategies",
        "Digital advertising campaigns & expert SEO optimization",
        "Brand strategy, styling & visual graphic design"
      ],
      tag: "Branding"
    },
    {
      id: 3,
      title: "Consulting & Business Development",
      image: "/img/img3.png",
      points: [
        "Comprehensive market research & competitive analysis",
        "Corporate business strategy and process optimization",
        "Financial planning, valuation & investment advisory"
      ],
      tag: "Consulting"
    },
    {
      id: 4,
      title: "E-Commerce & Retail",
      image: "/img/e1.png",
      points: [
        "Complete online store setup & secure payment integrations",
        "Retail inventory, logistics & supply chain dashboards",
        "Subscription-based business models & CRM setups"
      ],
      tag: "E-commerce"
    },
    {
      id: 5,
      title: "Health & Wellness Solutions",
      image: "/img/he1.jpg",
      points: [
        "Telemedicine portals & health-tech integrations",
        "Wellness coaching platforms & personal trainer programs",
        "Mental health counseling schedulers & therapy services"
      ],
      tag: "Health-Tech"
    },
    {
      id: 6,
      title: "Legal & Compliance",
      image: "/img/legal1.jpg",
      points: [
        "Corporate governance & compliance checks",
        "Contract drafting, reviewing & general legal consulting",
        "Intellectual property filing & software patent law"
      ],
      tag: "Corporate"
    },
    {
      id: 7,
      title: "Cybersecurity Solutions",
      image: "/img/cy1.jpg",
      points: [
        "End-to-end threat protection & active vulnerability scanning",
        "ISO 27001 compliance, penetration testing & risk reports",
        "Corporate security awareness training & phish simulations"
      ],
      tag: "Security"
    },
    {
      id: 8,
      title: "UI/UX Experience Design",
      image: "/img/ui1.jpg",
      points: [
        "Visually engaging interactive mockup design (Figma)",
        "User persona research, journey mappings & usability tests",
        "Consistent component frameworks and responsive layouts"
      ],
      tag: "UX/UI"
    },
    {
      id: 9,
      title: "Data Analytics & BI",
      image: "/img/Data1.png",
      points: [
        "Extract actionable business insights from big data",
        "Interactive dashboard designs (PowerBI, Tableau, Custom)",
        "Advanced predictive analytics & trend modeling"
      ],
      tag: "Analytics"
    },
    {
      id: 10,
      title: "Cloud Migration & DevOps",
      image: "/img/CloudMigration.jpg",
      points: [
        "Seamless cloud transfers (AWS, GCP, Azure) with zero downtime",
        "Continuous integration & deployment (CI/CD) automations",
        "Cost-effective serverless architecture integrations"
      ],
      tag: "Cloud"
    },
    {
      id: 11,
      title: "Digital Transformation",
      image: "/img/digital1.png",
      points: [
        "Modernizing legacy systems & old enterprise database code",
        "Adapting agile work methodologies and remote collab tools",
        "Automating manual administrative document workflows"
      ],
      tag: "Consulting"
    },
    {
      id: 12,
      title: "Artificial Intelligence",
      image: "/img/ai1.jpg",
      points: [
        "Custom Natural Language Processing (NLP) & chatbots",
        "Computer vision frameworks for object & image recognition",
        "Machine Learning model development & predictive analytics"
      ],
      tag: "AI / ML"
    }
  ];

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(129, 106, 199, 0.8) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="particles">
          <div className="particle" style={{ width: '6px', height: '6px', top: '25%', left: '15%', animation: 'float 9s infinite' }}></div>
          <div className="particle" style={{ width: '10px', height: '10px', top: '75%', left: '80%', animation: 'float 12s infinite' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Services</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            Empowering your digital future with state-of-the-art technical excellence and customized solutions.
          </p>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#f4f5f8' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="section-title">What We Offer</h2>
            <p className="text-muted fs-6 mx-auto mt-2" style={{ maxWidth: '600px' }}>
              We deliver premium tech services customized to optimize your operations, secure your data, and scale your brand.
            </p>
          </div>

          <div className="row g-4">
            {serviceList.map((service, idx) => (
              <div key={service.id} className="col-lg-4 col-md-6" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="interactive-card h-100 d-flex flex-column text-start">
                  
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <span className="badge bg-purple position-absolute top-3 start-3 shadow-sm py-2 px-3 text-white" style={{
                      backgroundColor: 'var(--main-color)',
                      borderRadius: '30px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      top: '15px',
                      left: '15px',
                      zIndex: 2
                    }}>
                      {service.tag}
                    </span>
                  </div>

                  
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <h5 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontSize: '1.25rem', fontFamily: 'Outfit, sans-serif' }}>
                      {service.title}
                    </h5>
                    
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-4 flex-grow-1 text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-start gap-2">
                          <span className="text-success fw-bold">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Link to="/contact" className="d-flex align-items-center gap-1 fw-semibold" style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', transition: 'all 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                        Inquire About Service <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 text-start">
              <h2 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Custom Technical Feature Requests?</h2>
              <p className="text-muted fs-6 mb-4" style={{ lineHeight: '1.8' }}>
                Don't see exactly what you are looking for in our standard list? At Saishnaa, we specialize in building bespoke systems custom-designed from scratch to match your specific corporate vision, security frameworks, and legacy databases.
              </p>
              <Link to="/contact" className="btn-purple py-3 px-4">
                Get In Touch With Experts <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="col-lg-6">
              <img src="/img/team.jpg" alt="Dev Team" className="img-fluid rounded-4 shadow-lg" style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
