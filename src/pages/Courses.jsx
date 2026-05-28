import React, { useState, useEffect } from 'react';
import { Search, GraduationCap, ArrowUpRight, MessageCircle, Mail, BookOpen, Star } from 'lucide-react';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Standard 23 Certificate Courses from the brochure
  const certificateCourses = [
    { id: 1, number: 1, title: "Fundamentals, Windows, Internet", category: "Office Systems", skills: "Operating Systems, Web Browsing, Digital Literacy", duration: "4 Weeks" },
    { id: 2, number: 2, title: "Fundamentals, Windows, Internet, HTML", category: "Programming & Web", skills: "OS Basics, Web Browsing, Web Page Creation", duration: "6 Weeks" },
    { id: 3, number: 3, title: "Basic Programming, FoxPro", category: "Databases & ERP", skills: "Procedural Logic, DB Commands, Legacy Systems", duration: "6 Weeks" },
    { id: 4, number: 4, title: "MS-Word, MS-PowerPoint, MS-Excel", category: "Office Systems", skills: "Docs Drafting, Slide Design, Data Sheets", duration: "6 Weeks" },
    { id: 5, number: 5, title: "MS-Word, MS-PowerPoint, MS-Excel, MS-Access", category: "Office Systems", skills: "Office Suite, Desktop Relational Databases", duration: "8 Weeks" },
    { id: 6, number: 6, title: "C & C++ Programming", category: "Programming & Web", skills: "Pointers, Memory Ops, OOP Paradigms", duration: "8 Weeks" },
    { id: 7, number: 7, title: "Visual Basic", category: "Programming & Web", skills: "GUI App Design, Event Handling, Visual Studio", duration: "6 Weeks" },
    { id: 8, number: 8, title: "Oracle Database", category: "Databases & ERP", skills: "SQL, DBMS Schemas, PL/SQL, Indexes", duration: "8 Weeks" },
    { id: 9, number: 9, title: "Java Programming", category: "Programming & Web", skills: "JDK, Core Java, Multi-threading, OOP Concepts", duration: "8 Weeks" },
    { id: 10, number: 10, title: "PageMaker, CorelDraw", category: "Design & Animation", skills: "Vector Art, Desktop Publishing, Print Layouts", duration: "8 Weeks" },
    { id: 11, number: 11, title: "Photo Shop Mastery", category: "Design & Animation", skills: "Photo Editing, Layers, Retouching, Digital Art", duration: "6 Weeks" },
    { id: 12, number: 12, title: "HTML5 Web Design", category: "Programming & Web", skills: "Semantic HTML5, CSS Styling, Responsive Design", duration: "4 Weeks" },
    { id: 13, number: 13, title: "Macromedia Flash", category: "Design & Animation", skills: "2D Vector Animation, Timelines, ActionScript", duration: "8 Weeks" },
    { id: 14, number: 14, title: "Tally ERP (General)", category: "Databases & ERP", skills: "Financial Ledger Accounting, GST, Inventory", duration: "6 Weeks" },
    { id: 15, number: 15, title: "Tally 9.0 (TCDS Certification)", category: "Databases & ERP", skills: "Advanced Ledger Audits, Taxation, Financials", duration: "8 Weeks" },
    { id: 16, number: 16, title: "Tally 9.0 (Tally Academy)", category: "Databases & ERP", skills: "National Curriculum, Multi-ledger Accounting", duration: "8 Weeks" },
    { id: 17, number: 17, title: "Active Server Page (ASP - Full Set)", category: "Programming & Web", skills: "Dynamic Web Services, Session Cache, SQL Links", duration: "8 Weeks" },
    { id: 18, number: 18, title: "Visual Basic .NET", category: "Programming & Web", skills: "C# Equivalent, .NET Framework, Desktop Apps", duration: "8 Weeks" },
    { id: 19, number: 19, title: "Active Server Page .NET", category: "Programming & Web", skills: "ASP.NET MVC, Web APIs, SQL Server integrations", duration: "8 Weeks" },
    { id: 20, number: 20, title: "Visual Basic Script (VBScript)", category: "Programming & Web", skills: "Windows Script Host, Automations, Server Scripts", duration: "4 Weeks" },
    { id: 21, number: 21, title: "Java Script (ES6+)", category: "Programming & Web", skills: "DOM, Dynamic Operations, Async APIs, AJAX", duration: "6 Weeks" },
    { id: 22, number: 22, title: "Macromedia Director", category: "Design & Animation", skills: "Interactive CD-ROM Publishing, Lingo Scripts", duration: "8 Weeks" },
    { id: 23, number: 23, title: "Maya (3D Animation & Modeling)", category: "Design & Animation", skills: "3D Polygons, Rigging, Textures, Render Engine", duration: "12 Weeks" }
  ];

  const filteredCourses = certificateCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.skills.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scratchWaText = `Hi Saishnaa Team, I want to enroll my child in the Scratch Coding for Kids course. Please send me the class schedule!

==================================================
🎓 COURSE ENROLLMENT - KIDS SCRATCH CODING
==================================================
🏫 Academy: Saishnaa Software & Kids Coding Academy
👶 Course: Scratch Programming for Kids (Ages 6-15)
--------------------------------------------------
👤 PARENT & STUDENT DETAILS:
• Parent Name: [Enter Parent Name]
• Student Name: [Enter Student Name]
• Student Age: [Enter Age, e.g. 10]
• Contact Phone: [Enter Phone]
• Preferred Batch: [ ] Weekend  [ ] Weekday
==================================================
Please guide us through the enrollment process.`;

  const scratchEmailSubject = "Kids Scratch Coding Course Admission Inquiry";
  const scratchEmailBody = `==================================================
🎓 COURSE ADMISSION INQUIRY - KIDS SCRATCH CODING
==================================================
🏫 Academy: Saishnaa Software & Kids Coding Academy
👶 Course: Scratch Programming for Kids (Ages 6-15)
--------------------------------------------------
👤 Parent/Guardian Details (Please fill in below):
• Parent Name: 
• Student Name: 
• Student Age: 
• Contact Phone: 
• Preferred Batch: [ ] Weekend  [ ] Weekday
💬 Additional Queries/Notes:
--------------------------------------------------

==================================================
Sent via Saishnaa Learning Academy.
==================================================`;

  const getCourseWaText = (course) => `Hi Saishnaa Team, I am interested in joining the ${course.title} certificate course.

==================================================
🎓 COURSE INQUIRY - SAISHNAA ACADEMY
==================================================
🏫 Academy: Saishnaa Software & Academy
📘 Course Name: ${course.title}
📁 Category: ${course.category}
⏱ Duration: ${course.duration}
--------------------------------------------------
👤 Student Details:
• Full Name: [Enter Your Name]
• Contact Phone: [Enter Your Phone]
• Contact Email: [Enter Your Email]
==================================================
Please share the schedule and admission requirements!`;

  const getCourseEmailSubject = (course) => `Inquiry: ${course.title} Certificate Course`;

  const getCourseEmailBody = (course) => `==================================================
🎓 COURSE INQUIRY - SAISHNAA ACADEMY
==================================================
🏫 Academy: Saishnaa Software & Academy
📘 Course Name: ${course.title}
📁 Category: ${course.category}
⏱ Duration: ${course.duration}
--------------------------------------------------
👤 Student Details (Please fill in below):
• Full Name: 
• Contact Phone: 
• Contact Email: 
• Current Occupation/Education: 
💬 Queries / Preferred Commencement Date:
--------------------------------------------------

==================================================
Sent via Saishnaa Learning Academy.
==================================================`;

  return (
    <div className="page-fade-in">
      
      {/* Hero Section */}
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(129, 106, 199, 0.9) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Learning Academy</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            Empower your technical skills, master advanced animations, or start young with our certified learning courses.
          </p>
        </div>
      </section>

      {/* Featured: Kids Scratch Academy Banner */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-purple px-3 py-2 text-white mb-2" style={{ backgroundColor: 'var(--main-color)', borderRadius: '30px', fontSize: '0.8rem' }}>
              🌟 EXCLUSIVE FOR YOUNG BUILDERS
            </span>
            <h2 className="section-title mb-2">Kids Coding Academy</h2>
            <p className="text-muted small">Nurturing mathematical logic and creative problem-solving in children aged 6 to 15.</p>
          </div>

          <div className="glass-panel p-lg-5 p-4 rounded-4 shadow-sm text-start" style={{
            background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.05) 0%, rgba(255, 64, 129, 0.05) 100%)',
            border: '1px solid rgba(77, 30, 163, 0.12)'
          }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Star className="text-warning fill-warning" size={24} style={{ animation: 'float 3s infinite' }} />
                  <h4 className="fw-bold mb-0 text-gradient" style={{ fontFamily: 'Outfit, sans-serif', background: 'linear-gradient(45deg, var(--main-color), #ff4081)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Scratch Programming for Kids (Ages 6-15)
                  </h4>
                </div>
                <p className="lead text-dark fw-normal mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                  Unlock your child's computational thinking! In this highly interactive academy course, young creators learn the absolute fundamentals of software development using Google and MIT's drag-and-drop Scratch visual code blocks.
                </p>
                <div className="row g-3 mb-4 text-secondary" style={{ fontSize: '0.92rem' }}>
                  <div className="col-md-6 d-flex align-items-start gap-2">
                    <span className="text-success fw-bold">✓</span>
                    <span>Create interactive 2D arcade games and animations</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-start gap-2">
                    <span className="text-success fw-bold">✓</span>
                    <span>Understand loops, variables, and event handlers</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-start gap-2">
                    <span className="text-success fw-bold">✓</span>
                    <span>Master mathematical logic and creative problem-solving</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-start gap-2">
                    <span className="text-success fw-bold">✓</span>
                    <span>1-on-1 expert tutor guidance with micro-portfolios</span>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href={`https://wa.me/919790155384?text=${encodeURIComponent(scratchWaText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white px-4 py-3 rounded-pill d-flex align-items-center gap-2 fw-bold"
                    style={{ backgroundColor: '#25D366', border: 'none', transition: 'all 0.3s' }}
                  >
                    <MessageCircle size={18} /> Enroll via WhatsApp
                  </a>
                  <a 
                    href={`mailto:saishnaa@gmail.com?subject=${encodeURIComponent(scratchEmailSubject)}&body=${encodeURIComponent(scratchEmailBody)}`}
                    className="btn btn-purple px-4 py-3 rounded-pill d-flex align-items-center gap-2 fw-bold text-white"
                  >
                    <Mail size={18} /> Email for Admissions
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="p-4 rounded-4 shadow-sm bg-white border" style={{ position: 'relative' }}>
                  <div className="position-absolute top-0 start-50 translate-middle badge bg-warning text-dark px-3 py-1.5 fw-bold rounded-pill">
                    ⚡ WEEKEND & WEEKDAY BATCHES
                  </div>
                  <div className="my-3 text-center">
                    <span className="display-6 fw-extrabold" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Scratch Academy</span>
                    <p className="text-muted mt-2 small">Building the developers of tomorrow, today.</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around text-center mt-3">
                    <div>
                      <h6 className="fw-bold mb-1 text-secondary">Duration</h6>
                      <span className="badge bg-light text-dark py-2 px-3 border rounded-pill">4 Weeks</span>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-secondary">Level</h6>
                      <span className="badge bg-light text-dark py-2 px-3 border rounded-pill">Beginner</span>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-secondary">Format</h6>
                      <span className="badge bg-light text-dark py-2 px-3 border rounded-pill">Practical / Lab</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Courses Catalog */}
      <section className="py-5" style={{ backgroundColor: '#f4f5f8' }} id="certificate-courses">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title mb-2">Government & Academy Certificate Courses</h2>
            <p className="text-muted small">Explore our professional training catalog featuring 23 dedicated computer and accounting programs.</p>
          </div>

          {/* Search & Filter Nav */}
          <div className="row g-3 justify-content-center mb-5 align-items-center">
            <div className="col-md-5">
              <div className="input-group glass-panel shadow-sm" style={{ borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span className="input-group-text bg-white border-0 ps-3 text-muted"><Search size={18} /></span>
                <input 
                  type="text" 
                  className="form-control border-0 py-3 ps-2" 
                  placeholder="Search by course name or skill..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>

            <div className="col-md-7 d-flex justify-content-md-end justify-content-center flex-wrap gap-2">
              {['All', 'Programming & Web', 'Design & Animation', 'Office Systems', 'Databases & ERP'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="btn px-3 py-2 fw-semibold btn-sm"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: selectedCategory === cat ? 'var(--main-color)' : 'white',
                    color: selectedCategory === cat ? 'white' : 'var(--main-color)',
                    border: selectedCategory === cat ? 'none' : '1px solid rgba(77, 30, 163, 0.15)',
                    transition: 'all 0.3s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Courses */}
          <div className="row g-4 justify-content-stretch">
            {filteredCourses.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6 d-flex">
                <div className="interactive-card p-4 d-flex flex-column text-start w-100" style={{ position: 'relative' }}>
                  <span className="badge bg-purple position-absolute top-3 end-3" style={{
                    backgroundColor: 'rgba(77, 30, 163, 0.1)', color: 'var(--main-color)',
                    borderRadius: '20px', fontSize: '0.72rem', padding: '6px 12px',
                    border: '1px solid rgba(77,30,163,0.15)', top: '15px', right: '15px'
                  }}>
                    {course.category}
                  </span>

                  <div className="d-flex align-items-center gap-2 mb-2 mt-2">
                    <span className="d-flex align-items-center justify-content-center fw-bold text-white small" style={{
                      width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--main-color), var(--secondary-color))'
                    }}>
                      {course.number}
                    </span>
                    <h6 className="fw-bold mb-0 text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certificate Course</h6>
                  </div>

                  <h5 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif', fontSize: '1.12rem', minHeight: '44px' }}>
                    {course.title}
                  </h5>

                  <div className="mb-4 pt-3 border-top flex-grow-1">
                    <h6 className="fw-semibold text-muted small mb-2 d-flex align-items-center gap-1"><BookOpen size={14} /> Skills Taught:</h6>
                    <p className="text-secondary small mb-0 fw-medium" style={{ lineHeight: '1.5' }}>{course.skills}</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-auto">
                    <span className="text-muted small fw-medium">Duration: <strong>{course.duration}</strong></span>
                    <div className="d-flex gap-2">
                      <a 
                        href={`https://wa.me/919790155384?text=${encodeURIComponent(getCourseWaText(course))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm text-white"
                        style={{ backgroundColor: '#25D366', borderRadius: '50%', width: '32px', height: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        title="Inquire via WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                      <a 
                        href={`mailto:saishnaa@gmail.com?subject=${encodeURIComponent(getCourseEmailSubject(course))}&body=${encodeURIComponent(getCourseEmailBody(course))}`}
                        className="btn btn-sm btn-purple"
                        style={{ borderRadius: '50%', width: '32px', height: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        title="Inquire via Email"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredCourses.length === 0 && (
              <div className="col-12 py-5 text-center text-muted glass-panel rounded-4">
                <p className="fs-5 mb-0">No certificate courses found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Academy Inquiry Row */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-start">
              <h3 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Interested in Custom Group Training?</h3>
              <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                We provide corporate training, customized college workshops, and group admissions for institutions. Get in touch with our academy heads today to design a custom syllabus that fits your technical criteria.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <a href="https://wa.me/919790155384?text=Hi%20Saishnaa%20Team%2C%20I%20have%20an%20inquiry%20regarding%20custom%20group%20technical%20training." target="_blank" rel="noopener noreferrer" className="btn btn-purple py-3 px-4 rounded-pill fw-bold text-white d-inline-flex align-items-center gap-2">
                Inquire Corporate Training <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
