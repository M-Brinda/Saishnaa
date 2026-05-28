import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Raj Kumar",
      position: "Chief Executive Officer",
      image: "/img/img9.jpeg",
      shortDesc: "Visionary leader with 15+ years in enterprise transformation and product strategy. Drives company vision and strategic partnerships.",
      fullBio: "Raj is the founding CEO of Saishnaa IT Solutions. Over the past 15 years, he has successfully directed digital transformation campaigns for Fortune 500 companies and regional commercial leaders. His primary focus is building cohesive tech partnerships, engineering premium software product pipelines, and scaling Saishnaa's global footprints.",
      socials: { linkedin: "#", twitter: "#", email: "raj@saishnaa.com" },
      achievement: "15+ Years Leadership"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      image: "/img/girl1.jpg",
      shortDesc: "Heads innovation in AI and cloud with a decade of software architecture experience. Passionate about scalable, cutting-edge solutions.",
      fullBio: "Priya heads the engineering and technology department at Saishnaa. With a robust background in scalable distributed systems and big data analytics, she has spent the last 10 years designing cloud infrastructures and integrating state-of-the-art machine learning pipelines. She is an avid advocate of open-source frameworks.",
      socials: { linkedin: "#", github: "#", email: "priya@saishnaa.com" },
      achievement: "AI Architecture Expert"
    },
    {
      id: 3,
      name: "Riddhi Patel",
      position: "Lead UI/UX Designer",
      image: "/img/gril2.jpg",
      shortDesc: "Specializes in user-first design and cross-platform digital experiences. Creates intuitive interfaces that delight users.",
      fullBio: "Riddhi is a passionate interface designer dedicated to turning complex workflows into clean, intuitive, and visually stunning user journeys. At Saishnaa, she leads a creative team in crafting interactive design prototypes, conducting deep usability research, and establishing cohesive design systems that elevate product branding.",
      socials: { linkedin: "#", github: "#", email: "riddhi@saishnaa.com" },
      achievement: "Delighted 1M+ Users"
    },
    {
      id: 4,
      name: "Ananya Singh",
      position: "Senior Full-Stack Developer",
      image: "/img/grils3.jpg",
      shortDesc: "Builds robust web applications with expertise in React, Node.js, and cloud architecture. Loves solving complex problems.",
      fullBio: "Ananya is a seasoned full-stack engineer who thrives on turning mockups into responsive, hardware-accelerated code. With specialized expertise in React, Node.js, and Serverless computing, she is key in executing Saishnaa's premium web portal projects with high performance, security protocols, and SOC2 compliance.",
      socials: { linkedin: "#", github: "#", email: "ananya@saishnaa.com" },
      achievement: "Full-Stack Specialist"
    },
    {
      id: 5,
      name: "Neha Gupta",
      position: "Digital Marketing Director",
      image: "/img/2.jpg",
      shortDesc: "Strategist driving brand growth through data-driven campaigns and customer engagement initiatives.",
      fullBio: "Neha oversees Saishnaa's brand outreach and search marketing consulting services. She possesses over 8 years of digital marketing experience, focusing on organic search optimization (SEO), performance marketing campaigns, and content branding strategies that have scaled client web traffic by up to 300%.",
      socials: { linkedin: "#", twitter: "#", email: "neha@saishnaa.com" },
      achievement: "300% SEO Traffic Growth"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      position: "HR & Talent Acquisition",
      image: "/img/img1.jpg",
      shortDesc: "Builds our exceptional team culture and finds top talent to drive our mission forward.",
      fullBio: "Arjun manages recruitment, employee happiness, and professional growth programs at Saishnaa. He is dedicated to building an inclusive, creative, and collaborative workspace. Arjun is always on the lookout for talented, passionate developers and consultants who want to shape the future of IT.",
      socials: { linkedin: "#", email: "arjun@saishnaa.com" },
      achievement: "Top Talent Recruiter"
    }
  ];

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(rgba(77, 30, 163, 0.85), rgba(118, 69, 252, 0.75)), url("/img/team.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Meet Our Team</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            The brilliant minds shaping digital transformations and building premium technical platforms at Saishnaa.
          </p>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#f4f5f8' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Expert Team</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '550px' }}>
              A multidisciplinary group of developers, designers, and consultants committed to engineering technological excellence.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, idx) => (
              <div 
                key={member.id} 
                className="col-lg-4 col-md-6"
                style={{ 
                  animation: 'pageFadeIn 0.5s ease both',
                  animationDelay: `${idx * 0.15}s`
                }}
              >
                <div 
                  className="interactive-card p-4 h-100 d-flex flex-column align-items-center text-center"
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={() => setSelectedMember(member)}
                >
                  
                  <span className="badge bg-purple position-absolute shadow-sm" style={{
                    top: '15px', left: '15px', borderRadius: '20px', padding: '6px 12px',
                    backgroundColor: 'rgba(77, 30, 163, 0.15)', color: 'var(--main-color)',
                    fontSize: '0.72rem', border: '1px solid rgba(77,30,163,0.2)', fontWeight: '600'
                  }}>
                    {member.achievement}
                  </span>

                  
                  <div className="my-4" style={{ position: 'relative' }}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-circle border border-4 border-white shadow-sm"
                      style={{ width: '140px', height: '140px', objectFit: 'cover', transition: 'all 0.5s var(--cubic-bezier)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(4deg)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(77,30,163,0.18)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                      }}
                    />
                  </div>

                  
                  <h4 className="fw-bold mb-1" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                    {member.name}
                  </h4>
                  <p className="fw-semibold small mb-3" style={{ color: 'var(--secondary-color)' }}>
                    {member.position}
                  </p>
                  <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {member.shortDesc}
                  </p>

                  <span className="text-decoration-none fw-bold mt-2" style={{ color: 'var(--main-color)', fontSize: '0.85rem' }}>
                    View Detailed Bio &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {selectedMember && (
        <div className="modal d-flex align-items-center justify-content-center" style={{
          backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1200,
          animation: 'pageFadeIn 0.3s ease'
        }} onClick={() => setSelectedMember(null)}>
          
          <div className="modal-dialog modal-dialog-centered glass-panel p-4" style={{
            maxWidth: '550px', width: '90%', borderRadius: '20px', backgroundColor: 'white', border: 'none',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)', animation: 'chatbotOpen 0.4s var(--cubic-bezier)'
          }} onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-content border-0 bg-transparent text-start">
              
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                  Team Member Profile
                </h4>
                <button type="button" className="btn-close" style={{ outline: 'none', boxShadow: 'none' }} onClick={() => setSelectedMember(null)}></button>
              </div>

              
              <div className="row g-4 align-items-center mb-4">
                <div className="col-sm-4 text-center">
                  <img src={selectedMember.image} alt={selectedMember.name} className="img-fluid rounded-circle shadow-sm border border-3 border-light" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                </div>
                <div className="col-sm-8 text-center text-sm-start">
                  <h4 className="fw-bold mb-1" style={{ color: 'var(--main-color)' }}>{selectedMember.name}</h4>
                  <h6 className="fw-medium text-secondary mb-2">{selectedMember.position}</h6>
                  <span className="badge" style={{ backgroundColor: 'rgba(77, 30, 163, 0.1)', color: 'var(--main-color)' }}>
                    {selectedMember.achievement}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold text-muted mb-2"><Briefcase size={16} className="me-1" /> Professional Background</h6>
                <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '0.92rem' }}>
                  {selectedMember.fullBio}
                </p>
              </div>

              
              <div className="d-flex gap-3 pt-3 border-top justify-content-center">
                {selectedMember.socials.linkedin && (
                  <a href={selectedMember.socials.linkedin} className="btn btn-outline-purple rounded-pill d-flex align-items-center gap-1 py-2 px-4" style={{
                    color: 'var(--secondary-color)', border: '1px solid rgba(118, 69, 252, 0.3)', fontSize: '0.85rem', fontWeight: '500'
                  }}>
                    <i className="fab fa-linkedin-in me-1"></i> LinkedIn
                  </a>
                )}
                {selectedMember.socials.github && (
                  <a href={selectedMember.socials.github} className="btn btn-outline-purple rounded-pill d-flex align-items-center gap-1 py-2 px-4" style={{
                    color: 'var(--secondary-color)', border: '1px solid rgba(118, 69, 252, 0.3)', fontSize: '0.85rem', fontWeight: '500'
                  }}>
                    <i className="fab fa-github me-1"></i> GitHub
                  </a>
                )}
                <a href={`mailto:${selectedMember.socials.email}`} className="btn btn-purple rounded-pill d-flex align-items-center gap-1 py-2 px-4 text-white" style={{
                  fontSize: '0.85rem', fontWeight: '500'
                }}>
                  <i className="fas fa-envelope me-1"></i> Contact Email
                </a>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
