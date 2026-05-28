import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Send, CheckCircle, FileText, UploadCloud, X, Users, Award, Shield, Check } from 'lucide-react';

export default function Journals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewScopeJournal, setViewScopeJournal] = useState(null);
  const [submitPaperJournal, setSubmitPaperJournal] = useState(null);
  
  // Submission Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [formError, setFormError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: '',
    authorInstitution: '',
    paperTitle: '',
    paperAbstract: '',
    journalCode: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journalsList = [
    {
      id: 1,
      code: "IJ CSE",
      title: "International Journal of Computer Science and Engineering",
      category: "Computer Science & IT",
      issn: "2348-8387",
      frequency: "Bi-Monthly",
      editorInChief: "Dr. Anand Kumar, Ph.D. (IIT Madras)",
      impactFactor: "4.82",
      description: "IJ CSE is a premier international venue dedicated to publishing state-of-the-art research articles, reviews, and surveys in the broader domain of Computer Science, Software Engineering, and AI systems.",
      indexing: ["Scopus Indexed", "Google Scholar", "CrossRef (DOI)", "DBLP", "Index Copernicus", "EBSCO"],
      scope: [
        "High-performance computing and distributed network models",
        "Machine Learning, Deep Learning, and custom AI systems",
        "Blockchain architectures, cryptography, and smart contracts",
        "Cloud-native platforms, serverless database engineering, and IoT ecosystems",
        "Computer graphics, Virtual/Augmented Reality frameworks, and Human-Computer Interactions"
      ],
      editorialBoard: [
        { name: "Dr. Anand Kumar", role: "Editor-in-Chief", institution: "IIT Madras, India" },
        { name: "Dr. Melissa Vance", role: "Associate Editor", institution: "Stanford University, USA" },
        { name: "Dr. Kenji Tanaka", role: "Technical Reviewer", institution: "Tokyo Institute of Technology, Japan" },
        { name: "Dr. Sarah Jenkins", role: "Board Member", institution: "University of Oxford, UK" }
      ]
    },
    {
      id: 2,
      code: "IJ IT",
      title: "International Journal of Information Technology",
      category: "Computer Science & IT",
      issn: "2394-2231",
      frequency: "Quarterly",
      editorInChief: "Dr. Priya Sharma, Ph.D. (IISc Bangalore)",
      impactFactor: "4.15",
      description: "IJ IT focuses on advanced information systems, network architectures, security frameworks, and custom digital transformation policies tailored for modern enterprise applications.",
      indexing: ["Scopus Indexed", "Google Scholar", "CrossRef (DOI)", "ProQuest", "EBSCO", "DOAJ"],
      scope: [
        "Information retrieval, web scraping, and semantic web designs",
        "Cybersecurity, risk threat audits, and secure encryption layers",
        "Data science pipelines, big data systems, and advanced visualization dashboards",
        "Mobile computing, cloud computing migrations, and API architectures",
        "Digital transformation methodologies and corporate systems optimization"
      ],
      editorialBoard: [
        { name: "Dr. Priya Sharma", role: "Editor-in-Chief", institution: "IISc Bangalore, India" },
        { name: "Dr. David Miller", role: "Associate Editor", institution: "Carnegie Mellon University, USA" },
        { name: "Dr. Ahmed Al-Farsi", role: "Technical Reviewer", institution: "King Saud University, Saudi Arabia" },
        { name: "Dr. Elena Rostova", role: "Board Member", institution: "Moscow State University, Russia" }
      ]
    },
    {
      id: 3,
      code: "IJ EEE",
      title: "International Journal of Electrical and Electronics Engineering",
      category: "Electrical & Mechanical",
      issn: "2348-8379",
      frequency: "Bi-Monthly",
      editorInChief: "Dr. Rajesh Varma, Ph.D. (NIT Trichy)",
      impactFactor: "4.56",
      description: "IJ EEE covers standard breakthroughs in electronic circuit integrations, power grid architectures, renewable green energy systems, and microelectronics fabrication.",
      indexing: ["Scopus Indexed", "Google Scholar", "Inspec", "CrossRef (DOI)", "DOAJ", "Ulrich's Periodical Directory"],
      scope: [
        "Microelectronics design, VLSI circuitry, and nanomaterial physics",
        "Power grid optimization, transmission layouts, and high voltage devices",
        "Smart grid networks, renewable energy grids, and green power grids",
        "Digital signal processing, embedded systems, and telecommunication protocols",
        "Automated robotics controllers and industrial feedback systems"
      ],
      editorialBoard: [
        { name: "Dr. Rajesh Varma", role: "Editor-in-Chief", institution: "NIT Trichy, India" },
        { name: "Dr. Hans Schmidt", role: "Associate Editor", institution: "Technical University of Munich, Germany" },
        { name: "Dr. Arthur Pendelton", role: "Technical Reviewer", institution: "MIT, USA" },
        { name: "Dr. Chi-Wei Lin", role: "Board Member", institution: "National Taiwan University, Taiwan" }
      ]
    },
    {
      id: 4,
      code: "IJ ME",
      title: "International Journal of Mechanical Engineering",
      category: "Electrical & Mechanical",
      issn: "2348-8360",
      frequency: "Quarterly",
      editorInChief: "Dr. Sanjay Mehta, Ph.D. (BITS Pilani)",
      impactFactor: "3.98",
      description: "IJ ME publishes high-quality peer-reviewed articles focusing on fluid dynamics, thermodynamic layouts, robotics automation, material science, and mechanical structural configurations.",
      indexing: ["Scopus Indexed", "Google Scholar", "Ei Compendex", "CrossRef (DOI)", "EBSCO"],
      scope: [
        "Thermodynamics, heat transfer models, and green energy conservation",
        "Fluid mechanics, aerodynamics, and advanced CFD simulations",
        "CAD/CAM, smart industrial manufacturing, and additive fabrication paths",
        "Advanced structural materials, composite mechanics, and metallurgy",
        "Automotive systems engineering, robotics automation, and kinetic machinery"
      ],
      editorialBoard: [
        { name: "Dr. Sanjay Mehta", role: "Editor-in-Chief", institution: "BITS Pilani, India" },
        { name: "Dr. Robert Chen", role: "Associate Editor", institution: "California Institute of Technology, USA" },
        { name: "Dr. Giulia Rossi", role: "Technical Reviewer", institution: "Politecnico di Milano, Italy" },
        { name: "Dr. Alistair Cook", role: "Board Member", institution: "University of Cambridge, UK" }
      ]
    }
  ];

  const filteredJournals = journalsList.filter(journal => {
    const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          journal.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          journal.scope.some(sc => sc.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          journal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || journal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenSubmitModal = (journal) => {
    setSubmitPaperJournal(journal);
    setFormSubmitted(false);
    setFormError('');
    setSelectedFile(null);
    setFormData({
      authorName: '',
      authorEmail: '',
      authorInstitution: '',
      paperTitle: '',
      paperAbstract: '',
      journalCode: journal.code
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        setFormError('Only PDF documents are allowed for peer-review submissions.');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setFormError('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const { authorName, authorEmail, authorInstitution, paperTitle, paperAbstract, journalCode } = formData;

    if (!authorName.trim() || !authorEmail.trim() || !authorInstitution.trim() || !paperTitle.trim() || !paperAbstract.trim()) {
      setFormError('All input fields are mandatory.');
      return;
    }

    if (paperAbstract.trim().length < 100) {
      setFormError(`Abstract is too short (${paperAbstract.trim().length} chars). It must be at least 100 characters to fulfill peer-review metadata standards.`);
      return;
    }

    if (!selectedFile) {
      setFormError('Please select a PDF document containing the full manuscript.');
      return;
    }

    // Generate unique registration ref ID
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const uniqueRef = `SAI-J-2026-${randomSuffix}`;

    const submissionData = {
      refId: uniqueRef,
      journalCode,
      authorName,
      authorEmail,
      authorInstitution,
      paperTitle,
      paperAbstract,
      fileName: selectedFile.name,
      date: new Date().toLocaleString()
    };

    // Save lead in localStorage
    const currentSubmissions = JSON.parse(localStorage.getItem('saishnaa_papers') || '[]');
    currentSubmissions.push(submissionData);
    localStorage.setItem('saishnaa_papers', JSON.stringify(currentSubmissions));

    setRefId(uniqueRef);
    setFormSubmitted(true);

    // Auto close modal after standard time
    setTimeout(() => {
      setSubmitPaperJournal(null);
      setFormSubmitted(false);
      setSelectedFile(null);
    }, 4500);
  };

  return (
    <div className="page-fade-in">
      {/* Hero Section */}
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(118, 69, 252, 0.85) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
      }}>
        <div className="particles">
          <div className="particle" style={{ width: '6px', height: '6px', top: '30%', left: '10%', animation: 'float 8s infinite' }}></div>
          <div className="particle" style={{ width: '8px', height: '8px', top: '65%', left: '85%', animation: 'float 11s infinite' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Academic Journals Portal
          </h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.6' }}>
            Saishnaa Publishing House partners with researchers and global tech experts. 
            We host high-impact peer-reviewed engineering journals indexed in top global networks.
          </p>
        </div>
      </section>

      {/* Main Journals Content */}
      <section className="py-5" style={{ backgroundColor: '#f4f5f8' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-title mb-2">Our Publications</h2>
            <p className="text-muted small">Explore scopes, editorial structures, and indexed databases, or submit your manuscript online.</p>
          </div>

          {/* Filtering and Search Controls */}
          <div className="row g-3 justify-content-between mb-5 align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="input-group glass-panel shadow-sm" style={{ borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span className="input-group-text bg-white border-0 ps-3 text-muted"><Search size={18} /></span>
                <input 
                  type="text" 
                  className="form-control border-0 py-3 ps-2" 
                  placeholder="Search journals by title, topics..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center flex-wrap gap-2 mt-3 mt-md-0">
              {['All', 'Computer Science & IT', 'Electrical & Mechanical'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="btn px-4 py-2.5 fw-semibold btn-sm transition-all"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: selectedCategory === category ? 'var(--main-color)' : 'white',
                    color: selectedCategory === category ? 'white' : 'var(--main-color)',
                    border: selectedCategory === category ? 'none' : '1px solid rgba(77, 30, 163, 0.15)',
                    boxShadow: selectedCategory === category ? '0 4px 12px rgba(77, 30, 163, 0.2)' : 'none'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Journals Catalog Grid */}
          <div className="row g-4 justify-content-stretch">
            {filteredJournals.map((journal) => (
              <div key={journal.id} className="col-lg-6 col-md-12 d-flex">
                <div className="interactive-card p-4 d-flex flex-column text-start w-100" style={{
                  position: 'relative',
                  borderTop: '5px solid var(--main-color)'
                }}>
                  {/* Category and ISSN Info */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-purple" style={{
                      backgroundColor: 'rgba(77, 30, 163, 0.1)', 
                      color: 'var(--main-color)',
                      borderRadius: '20px', 
                      fontSize: '0.72rem', 
                      padding: '6px 12px',
                      border: '1px solid rgba(77,30,163,0.15)'
                    }}>
                      {journal.category}
                    </span>
                    <span className="text-secondary small fw-medium">
                      ISSN: <strong style={{ color: 'var(--main-color)' }}>{journal.issn}</strong>
                    </span>
                  </div>

                  {/* Journal Title & Codes */}
                  <div className="mb-3">
                    <h5 className="fw-bold mb-1" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                      {journal.code}
                    </h5>
                    <h6 className="text-muted fw-semibold" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                      {journal.title}
                    </h6>
                  </div>

                  <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.7' }}>
                    {journal.description}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="row g-2 mb-4 p-3 bg-light rounded-3 text-center">
                    <div className="col-6 border-end">
                      <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Frequency</small>
                      <strong className="text-dark small">{journal.frequency}</strong>
                    </div>
                    <div className="col-6">
                      <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Impact Factor</small>
                      <strong className="text-dark small text-success">{journal.impactFactor}</strong>
                    </div>
                  </div>

                  {/* Indexing Badges */}
                  <div className="mb-4">
                    <h6 className="fw-semibold text-muted small mb-2"><Award size={14} className="me-1 text-warning" /> Key Indexing Details:</h6>
                    <div className="d-flex flex-wrap gap-1.5">
                      {journal.indexing.slice(0, 3).map((ind, iIdx) => (
                        <span key={iIdx} className="badge bg-white text-secondary border border-secondary-subtle" style={{
                          fontSize: '0.7rem',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}>
                          {ind}
                        </span>
                      ))}
                      {journal.indexing.length > 3 && (
                        <span className="badge bg-white text-secondary border border-secondary-subtle" style={{
                          fontSize: '0.7rem',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}>
                          +{journal.indexing.length - 3} More
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="d-flex gap-2 mt-auto pt-3 border-top">
                    <button 
                      onClick={() => setViewScopeJournal(journal)}
                      className="btn btn-outline-purple flex-grow-1 py-2 rounded-pill"
                      style={{ 
                        fontSize: '0.82rem', 
                        borderColor: 'var(--main-color)', 
                        color: 'var(--main-color)', 
                        borderWidth: '1.5px',
                        fontWeight: '600',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--main-color)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--main-color)';
                      }}
                    >
                      Scope & Board <BookOpen size={13} className="ms-1" />
                    </button>
                    
                    <button 
                      onClick={() => handleOpenSubmitModal(journal)}
                      className="btn btn-purple flex-grow-1 py-2 rounded-pill"
                      style={{ fontSize: '0.82rem' }}
                    >
                      Submit Paper <Send size={13} className="ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredJournals.length === 0 && (
              <div className="col-12 py-5 text-center text-muted glass-panel rounded-4">
                <p className="fs-5 mb-0">No academic publications matched your filters or search keywords.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Scope Details Modal Overlay */}
      {viewScopeJournal && (
        <div className="modal d-flex align-items-center justify-content-center" style={{
          backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1200,
          animation: 'pageFadeIn 0.3s ease'
        }} onClick={() => setViewScopeJournal(null)}>

          <div className="modal-dialog modal-dialog-centered modal-lg p-3" style={{
            maxWidth: '750px', width: '95%', borderRadius: '20px', backgroundColor: 'white', border: 'none',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)', animation: 'chatbotOpen 0.4s var(--cubic-bezier)',
            maxHeight: '90vh', overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>

            <div className="modal-content border-0 bg-transparent text-start">
              
              <div className="d-flex justify-content-between align-items-start mb-4 pb-3 border-bottom">
                <div>
                  <h4 className="fw-bold mb-1" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                    {viewScopeJournal.code}
                  </h4>
                  <p className="text-secondary fw-medium mb-0 small">{viewScopeJournal.title}</p>
                </div>
                <button type="button" className="btn-close" style={{ outline: 'none', boxShadow: 'none' }} onClick={() => setViewScopeJournal(null)}></button>
              </div>

              {/* Scope Content Details */}
              <div className="modal-body p-0">
                <div className="row g-4">
                  {/* Scope list & Description */}
                  <div className="col-md-7 text-start">
                    <h6 className="fw-bold text-dark mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Journal Scope & Research Fields:</h6>
                    <p className="text-muted small mb-3">{viewScopeJournal.description}</p>
                    
                    <ul className="list-unstyled d-flex flex-column gap-2 text-muted" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                      {viewScopeJournal.scope.map((scp, sIdx) => (
                        <li key={sIdx} className="d-flex align-items-start gap-2">
                          <Check size={14} className="text-success mt-1 flex-shrink-0" />
                          <span>{scp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indexing List & Board Info */}
                  <div className="col-md-5 text-start">
                    <div className="p-3 rounded-4 mb-3" style={{ backgroundColor: 'rgba(77,30,163,0.04)', border: '1px solid rgba(77,30,163,0.08)' }}>
                      <h6 className="fw-bold mb-2 small text-dark d-flex align-items-center gap-1">
                        <Shield size={14} className="text-primary" /> Global Databases Indexing:
                      </h6>
                      <div className="d-flex flex-wrap gap-1.5">
                        {viewScopeJournal.indexing.map((ind, iIdx) => (
                          <span key={iIdx} className="badge bg-white text-dark border border-secondary-subtle" style={{ fontSize: '0.68rem', padding: '4px 8px' }}>
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-4" style={{ backgroundColor: 'rgba(255,107,107,0.04)', border: '1px solid rgba(255,107,107,0.08)' }}>
                      <h6 className="fw-bold mb-2 small text-dark d-flex align-items-center gap-1">
                        <Users size={14} className="text-accent" style={{ color: 'var(--accent-color)' }} /> Editorial Board Team:
                      </h6>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '0.78rem' }}>
                        {viewScopeJournal.editorialBoard.map((ed, eIdx) => (
                          <li key={eIdx} className="border-bottom pb-1 mb-1 last-border-none">
                            <span className="fw-semibold text-dark d-block">{ed.name}</span>
                            <span className="text-muted d-flex justify-content-between">
                              <span>{ed.role}</span>
                              <span className="text-end fw-medium" style={{ fontSize: '0.72rem' }}>{ed.institution}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close controls */}
              <div className="mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                <button 
                  onClick={() => setViewScopeJournal(null)}
                  className="btn btn-secondary px-4 rounded-pill btn-sm"
                  style={{ backgroundColor: '#6c757d', border: 'none' }}
                >
                  Close Scope details
                </button>
                <button 
                  onClick={() => {
                    setViewScopeJournal(null);
                    handleOpenSubmitModal(viewScopeJournal);
                  }}
                  className="btn btn-purple px-4 rounded-pill btn-sm"
                >
                  Submit Paper to {viewScopeJournal.code}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Submit Paper Form Modal Overlay */}
      {submitPaperJournal && (
        <div className="modal d-flex align-items-center justify-content-center" style={{
          backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1200,
          animation: 'pageFadeIn 0.3s ease'
        }} onClick={() => setSubmitPaperJournal(null)}>

          <div className="modal-dialog modal-dialog-centered glass-panel p-4" style={{
            maxWidth: '580px', width: '92%', borderRadius: '20px', backgroundColor: 'white', border: 'none',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)', animation: 'chatbotOpen 0.4s var(--cubic-bezier)',
            maxHeight: '90vh', overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>

            <div className="modal-content border-0 bg-transparent text-start">
              
              {formSubmitted ? (
                <div className="text-center py-5 d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeIn">
                  <CheckCircle size={72} className="text-success mb-3" style={{ animation: 'pulse 1.5s infinite' }} />
                  <h4 className="fw-bold mb-2" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                    Paper Submitted Successfully!
                  </h4>
                  <p className="text-muted px-4 small mb-3">
                    Thank you. Your manuscript has been logged into Saishnaa Publishing peer-review database. 
                    An editorial assistant will send the review timeline details to your author email within 3 business days.
                  </p>
                  <div className="p-3 bg-light rounded-3 mb-4 w-100 border text-center">
                    <span className="text-secondary small d-block">Validation Reference Registration ID:</span>
                    <strong className="text-primary fs-5" style={{ color: 'var(--main-color)' }}>{refId}</strong>
                  </div>
                  <small className="text-muted">Modal closing automatically...</small>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h4 className="fw-bold mb-1" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                        Submit Paper Manuscript
                      </h4>
                      <small className="text-secondary fw-semibold">Peer-Review Submission to **{submitPaperJournal.code}**</small>
                    </div>
                    <button type="button" className="btn-close" style={{ outline: 'none', boxShadow: 'none' }} onClick={() => setSubmitPaperJournal(null)}></button>
                  </div>

                  {formError && (
                    <div className="alert alert-danger py-2.5 px-3 small border-0 rounded-3 mb-3 d-flex align-items-center gap-2">
                      <span className="fw-bold">⚠️ Error:</span> <span>{formError}</span>
                    </div>
                  )}

                  {/* Target Journal Selection (Auto selected) */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">Target Publication Journal</label>
                    <select 
                      className="form-select text-dark"
                      value={formData.journalCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, journalCode: e.target.value }))}
                      required
                    >
                      {journalsList.map(j => (
                        <option key={j.id} value={j.code}>{j.code} - {j.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="row g-3 mb-3">
                    {/* Primary Author Name */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-muted">Primary Author Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Dr. Jane Doe" 
                        required 
                        value={formData.authorName}
                        onChange={(e) => setFormData(prev => ({ ...prev, authorName: e.target.value }))}
                      />
                    </div>

                    {/* Contact Email */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-muted">Author Contact Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="jane.doe@university.edu" 
                        required 
                        value={formData.authorEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, authorEmail: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">Affiliation & Institution</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Department of CS, Massachusetts Institute of Technology" 
                      required 
                      value={formData.authorInstitution}
                      onChange={(e) => setFormData(prev => ({ ...prev, authorInstitution: e.target.value }))}
                    />
                  </div>

                  {/* Paper Title */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">Manuscript Title</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="An Optimized Deep Learning Framework for Edge-Cloud Database Systems" 
                      required 
                      value={formData.paperTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, paperTitle: e.target.value }))}
                    />
                  </div>

                  {/* Paper Abstract (character limits validation) */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label small fw-semibold text-muted mb-0">Manuscript Abstract</label>
                      <span className={`small fw-semibold ${formData.paperAbstract.trim().length < 100 ? 'text-danger' : 'text-success'}`} style={{ fontSize: '0.72rem' }}>
                        {formData.paperAbstract.trim().length} / 2000 Chars {formData.paperAbstract.trim().length < 100 && '(Min 100 Required)'}
                      </span>
                    </div>
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      maxLength="2000"
                      placeholder="Enter the comprehensive abstract of your research paper. The abstract must describe the core methodology, experimental findings, and contribution metrics..."
                      required
                      value={formData.paperAbstract}
                      onChange={(e) => setFormData(prev => ({ ...prev, paperAbstract: e.target.value }))}
                    ></textarea>
                  </div>

                  {/* Manuscript File Upload Tracker */}
                  <div className="mb-4">
                    <label className="form-label small fw-semibold text-muted">Upload Manuscript Document (PDF Only)</label>
                    <div className="p-3 rounded-3 text-center position-relative d-flex flex-column align-items-center justify-content-center" 
                      style={{ 
                        border: selectedFile ? '1px dashed var(--success-color)' : '1px dashed rgba(77, 30, 163, 0.3)',
                        backgroundColor: selectedFile ? 'rgba(0,204,136,0.02)' : 'rgba(77, 30, 163, 0.01)'
                      }}>
                      <input 
                        type="file" 
                        accept=".pdf" 
                        className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                        style={{ cursor: 'pointer' }}
                        onChange={handleFileChange}
                      />
                      {selectedFile ? (
                        <>
                          <FileText size={32} className="text-success mb-2" />
                          <h6 className="mb-1 small fw-bold text-success">Selected PDF: {selectedFile.name}</h6>
                          <small className="text-muted" style={{ fontSize: '0.7rem' }}>({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB) - Click to replace</small>
                        </>
                      ) : (
                        <>
                          <UploadCloud size={32} className="text-secondary mb-2" style={{ color: 'var(--main-color)' }} />
                          <h6 className="mb-1 small fw-bold text-muted">Click or drag PDF manuscript here</h6>
                          <small className="text-muted" style={{ fontSize: '0.72rem' }}>Only standard .pdf documents under 15 MB accepted</small>
                        </>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-purple w-100 py-3 rounded-pill">
                    Submit Manuscript Online <Send size={14} className="ms-1" />
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
