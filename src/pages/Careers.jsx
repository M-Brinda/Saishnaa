import React, { useState, useEffect } from 'react';
import { Search, Briefcase, MapPin, Code, Send, CheckCircle, FileText } from 'lucide-react';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [appliedJob, setAppliedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', cover: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Senior Software Developer",
      dept: "Engineering",
      location: "Remote / On-site Erode",
      skills: "React, Node.js, Python, PostgreSQL",
      desc: "Develop and maintain robust web and mobile applications, collaborate with cross-functional product teams, and implement coding best practices."
    },
    {
      id: 2,
      title: "UI/UX Experience Designer",
      dept: "Design",
      location: "On-site Thindal",
      skills: "Figma, Adobe XD, Responsive Layouts",
      desc: "Design stunning user interfaces for client web and mobile apps, establishing comprehensive design systems and conducting UX testing."
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      dept: "Marketing",
      location: "Remote / Hybrid",
      skills: "SEO, Performance Ads, Google Analytics",
      desc: "Oversee digital marketing campaigns, social media outreach, SEO growth paths, and brand awareness programs to drive business leads."
    },
    {
      id: 4,
      title: "Senior Data Scientist",
      dept: "Engineering",
      location: "Remote",
      skills: "Python, PyTorch, SQL, Recommendation Models",
      desc: "Analyze complex business datasets, develop predictive machine learning frameworks, and build intelligent recommendation systems."
    },
    {
      id: 5,
      title: "Cloud & DevOps Engineer",
      dept: "Engineering",
      location: "Hybrid Erode",
      skills: "AWS, Docker, Kubernetes, CI/CD",
      desc: "Implement continuous integration pipelines, manage hybrid cloud instances, automate server audit checks, and ensure platform uptime."
    },
    {
      id: 6,
      title: "Agile Product Manager",
      dept: "Management",
      location: "On-site Erode",
      skills: "Scrum, Product Strategy, User Research",
      desc: "Define product visions, write clear technical requirements, and coordinate sprint planning between design and development teams."
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.skills.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleApplyClick = (job) => {
    setAppliedJob(job);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', cover: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      // Register applicant
      const applicants = JSON.parse(localStorage.getItem('saishnaa_applicants') || '[]');
      applicants.push({
        jobTitle: appliedJob.title,
        applicant: formData,
        date: new Date().toLocaleString()
      });
      localStorage.setItem('saishnaa_applicants', JSON.stringify(applicants));
      
      setFormSubmitted(true);
      setTimeout(() => {
        setAppliedJob(null);
        setFormSubmitted(false);
      }, 3500);
    }
  };

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(152, 241, 182, 0.85) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Careers</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            Discover exceptional opportunities and build the future of software and AI solutions with us!
          </p>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4 text-center">
          <h2 className="section-title">Join Our Growing Team</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-muted mb-4" style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
                At Saishnaa, we believe in nurturing talent, fostering continuous learning, and offering opportunities for massive professional growth. We provide a highly collaborative and inclusive environment where everyone's voice is valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#f4f5f8' }} id="openings">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title mb-2">Open Positions</h2>
            <p className="text-muted small">Find your perfect technical role and apply in less than 2 minutes.</p>
          </div>

          
          <div className="row g-3 justify-content-center mb-5 align-items-center">
            
            <div className="col-md-5">
              <div className="input-group glass-panel shadow-sm" style={{ borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span className="input-group-text bg-white border-0 ps-3 text-muted"><Search size={18} /></span>
                <input 
                  type="text" 
                  className="form-control border-0 py-3 ps-2" 
                  placeholder="Search by role or skills..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>

            
            <div className="col-md-7 d-flex justify-content-md-end justify-content-center flex-wrap gap-2">
              {['All', 'Engineering', 'Design', 'Marketing', 'Management'].map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className="btn px-3 py-2 fw-semibold btn-sm"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: selectedDept === dept ? 'var(--main-color)' : 'white',
                    color: selectedDept === dept ? 'white' : 'var(--main-color)',
                    border: selectedDept === dept ? 'none' : '1px solid rgba(77, 30, 163, 0.15)',
                    transition: 'all 0.3s'
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          
          <div className="row g-4 justify-content-stretch">
            {filteredJobs.map((job) => (
              <div key={job.id} className="col-lg-4 col-md-6 d-flex">
                <div className="interactive-card p-4 d-flex flex-column text-start w-100" style={{ position: 'relative' }}>
                  <span className="badge bg-purple position-absolute top-3 end-3" style={{
                    backgroundColor: 'rgba(77, 30, 163, 0.1)', color: 'var(--main-color)',
                    borderRadius: '20px', fontSize: '0.72rem', padding: '6px 12px',
                    border: '1px solid rgba(77,30,163,0.15)', top: '15px', right: '15px'
                  }}>
                    {job.dept}
                  </span>

                  <h5 className="fw-bold mb-2 mt-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                    {job.title}
                  </h5>

                  <p className="text-secondary small mb-3 fw-medium">
                    <MapPin size={14} className="me-1 text-warning" /> {job.location}
                  </p>

                  <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {job.desc}
                  </p>

                  <div className="mb-4 pt-3 border-top">
                    <h6 className="fw-semibold text-muted small mb-2"><Code size={14} className="me-1" /> Key Skills Required:</h6>
                    <p className="text-secondary small mb-0 fw-medium">{job.skills}</p>
                  </div>

                  <button 
                    onClick={() => handleApplyClick(job)}
                    className="btn btn-purple py-2.5 w-100 rounded-pill mt-auto"
                    style={{ fontSize: '0.88rem' }}
                  >
                    Apply Now <Send size={14} />
                  </button>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-12 py-5 text-center text-muted glass-panel rounded-4">
                <p className="fs-5 mb-0">No job openings found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      
      {appliedJob && (
        <div className="modal d-flex align-items-center justify-content-center" style={{
          backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1200,
          animation: 'pageFadeIn 0.3s ease'
        }} onClick={() => setAppliedJob(null)}>

          <div className="modal-dialog modal-dialog-centered glass-panel p-4" style={{
            maxWidth: '520px', width: '90%', borderRadius: '20px', backgroundColor: 'white', border: 'none',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)', animation: 'chatbotOpen 0.4s var(--cubic-bezier)'
          }} onClick={(e) => e.stopPropagation()}>

            <div className="modal-content border-0 bg-transparent text-start">
              
              
              {formSubmitted ? (
                <div className="text-center py-5 d-flex flex-column align-items-center justify-content-center" style={{ animation: 'pageFadeIn 0.4s ease' }}>
                  <CheckCircle size={72} className="text-success mb-3 animate__animated animate__bounceIn" />
                  <h4 className="fw-bold mb-2" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                    Application Submitted!
                  </h4>
                  <p className="text-muted px-4">
                    Thank you for applying for the **{appliedJob.title}** role. Our talent acquisition team will review your credentials and reach back within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h4 className="fw-bold mb-1" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                        Apply for Position
                      </h4>
                      <small className="text-secondary fw-semibold">{appliedJob.title} ({appliedJob.dept})</small>
                    </div>
                    <button type="button" className="btn-close" style={{ outline: 'none', boxShadow: 'none' }} onClick={() => setAppliedJob(null)}></button>
                  </div>

                  
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Jane Doe" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="jane@company.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="+91 98765 43210" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-semibold text-muted">Short Cover Message</label>
                    <textarea 
                      className="form-control" 
                      rows="3" 
                      placeholder="Briefly state why you're a great fit for Saishnaa..."
                      value={formData.cover}
                      onChange={(e) => setFormData(prev => ({ ...prev, cover: e.target.value }))}
                    ></textarea>
                  </div>

                  <div className="mb-4 p-3 rounded-3 bg-light d-flex align-items-center gap-2" style={{ border: '1px dashed rgba(77, 30, 163, 0.2)' }}>
                    <FileText size={20} className="text-secondary" />
                    <div className="text-start">
                      <h6 className="mb-0 small fw-bold text-muted">Resume Upload Field</h6>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>Send your PDF resume directly to saishnaateam@gmail.com</small>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-purple w-100 py-3 rounded-pill">
                    Submit Application <Send size={14} className="ms-1" />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
