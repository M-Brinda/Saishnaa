import React, { useState, useEffect } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Code,
  Send,
  CheckCircle,
  FileText,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [appliedJob, setAppliedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cover: "",
    channel: "WhatsApp",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

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
      desc: "Develop and maintain robust web and mobile applications, collaborate with cross-functional product teams, and implement coding best practices.",
    },
    {
      id: 2,
      title: "UI/UX Experience Designer",
      dept: "Design",
      location: "On-site Thindal",
      skills: "Figma, Adobe XD, Responsive Layouts",
      desc: "Design stunning user interfaces for client web and mobile apps, establishing comprehensive design systems and conducting UX testing.",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      dept: "Marketing",
      location: "Remote / Hybrid",
      skills: "SEO, Performance Ads, Google Analytics",
      desc: "Oversee digital marketing campaigns, social media outreach, SEO growth paths, and brand awareness programs to drive business leads.",
    },
    {
      id: 4,
      title: "Senior Data Scientist",
      dept: "Engineering",
      location: "Remote",
      skills: "Python, PyTorch, SQL, Recommendation Models",
      desc: "Analyze complex business datasets, develop predictive machine learning frameworks, and build intelligent recommendation systems.",
    },
    {
      id: 5,
      title: "Cloud & DevOps Engineer",
      dept: "Engineering",
      location: "Hybrid Erode",
      skills: "AWS, Docker, Kubernetes, CI/CD",
      desc: "Implement continuous integration pipelines, manage hybrid cloud instances, automate server audit checks, and ensure platform uptime.",
    },
    {
      id: 6,
      title: "Agile Product Manager",
      dept: "Management",
      location: "On-site Erode",
      skills: "Scrum, Product Strategy, User Research",
      desc: "Define product visions, write clear technical requirements, and coordinate sprint planning between design and development teams.",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || job.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleApplyClick = (job) => {
    setAppliedJob(job);
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      cover: "",
      channel: "WhatsApp",
    });
    setResumeFile(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert(
        "Please upload your Resume file (PDF, DOC, or DOCX) before submitting.",
      );
      return;
    }
    if (formData.name && formData.email && formData.phone) {
      // Register applicant
      const applicants = JSON.parse(
        localStorage.getItem("saishnaa_applicants") || "[]",
      );
      applicants.push({
        jobTitle: appliedJob.title,
        applicant: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cover: formData.cover,
          channel: formData.channel,
          resumeName: resumeFile ? resumeFile.name : "",
        },
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("saishnaa_applicants", JSON.stringify(applicants));

      const resumeNameStr = resumeFile
        ? resumeFile.name
        : "[Please attach your PDF resume]";
      const careerWaText = `Hi Saishnaa Team, I am applying for the *${appliedJob.title}* position.

==================================================
💼 POSITION: ${appliedJob.title}
==================================================
👤 APPLICANT DETAILS:
--------------------------------------------------
• Full Name: ${formData.name}
• Contact Phone: ${formData.phone}
• Contact Email: ${formData.email}
• Resume File: ${resumeNameStr}
📝 Cover Letter / Brief Bio:
--------------------------------------------------
${formData.cover || "N/A"}
==================================================
Please find my Resume attached below.`;

      const careerEmailSubject = `Job Application: ${appliedJob.title} - ${formData.name}`;

      const careerEmailBody = `==================================================
📩 NEW JOB APPLICATION - SAISHNAA ACADEMY
==================================================
💼 Position Applied: ${appliedJob.title}
👤 Applicant Details:
--------------------------------------------------
• Full Name: ${formData.name}
• Contact Phone: ${formData.phone}
• Contact Email: ${formData.email}
• Resume File: ${resumeNameStr}
📝 Cover Letter / Brief Bio:
--------------------------------------------------
${formData.cover || "N/A"}
==================================================
📌 IMPORTANT NOTE:
Please attach your PDF Resume "${resumeNameStr}" to this draft before sending.
==================================================`;

      // Copy template directly to clipboard as backup for cross-platform robustness
      const copyContent =
        formData.channel === "WhatsApp" ? careerWaText : careerEmailBody;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(copyContent).catch(() => {});
      }

      // Synchronously open a blank window before async timeout to bypass aggressive desktop & mobile popup blockers
      let newTab = null;
      if (formData.channel === "WhatsApp") {
        newTab = window.open("", "_blank");
      }

      setFormSubmitted(true);

      // Direct execution logic
      setTimeout(() => {
        if (formData.channel === "WhatsApp") {
          if (newTab) {
            newTab.location.href = `https://wa.me/919790155384?text=${encodeURIComponent(careerWaText)}`;
          } else {
            window.open(
              `https://wa.me/919790155384?text=${encodeURIComponent(careerWaText)}`,
              "_blank",
            );
          }
        } else if (formData.channel === "Email") {
          window.location.href = `mailto:saishnaa@gmail.com?subject=${encodeURIComponent(careerEmailSubject)}&body=${encodeURIComponent(careerEmailBody)}`;
        }
      }, 1000);
    }
  };

  const resumeNameStr = resumeFile
    ? resumeFile.name
    : "[Please attach your PDF resume]";

  const careerWaText =
    appliedJob && formData
      ? `Hi Saishnaa Team, I am applying for the *${appliedJob.title}* position.

==================================================
💼 POSITION: ${appliedJob.title}
==================================================
👤 APPLICANT DETAILS:
--------------------------------------------------
• Full Name: ${formData.name}
• Contact Phone: ${formData.phone}
• Contact Email: ${formData.email}
• Resume File: ${resumeNameStr}
📝 Cover Letter / Brief Bio:
--------------------------------------------------
${formData.cover || "N/A"}
==================================================
Please find my Resume attached below.`
      : "";

  const careerEmailSubject =
    appliedJob && formData
      ? `Job Application: ${appliedJob.title} - ${formData.name}`
      : "";

  const careerEmailBody =
    appliedJob && formData
      ? `==================================================
📩 NEW JOB APPLICATION - SAISHNAA ACADEMY
==================================================
💼 Position Applied: ${appliedJob.title}
👤 Applicant Details:
--------------------------------------------------
• Full Name: ${formData.name}
• Contact Phone: ${formData.phone}
• Contact Email: ${formData.email}
• Resume File: ${resumeNameStr}
📝 Cover Letter / Brief Bio:
--------------------------------------------------
${formData.cover || "N/A"}
==================================================
📌 IMPORTANT NOTE:
Please attach your PDF Resume "${resumeNameStr}" to this draft before sending.
==================================================`
      : "";

  return (
    <div className="page-fade-in">
      <section
        className="hero d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(152, 241, 182, 0.85) 100%), url("/img/1.jpg") center/cover fixed',
          padding: "180px 20px 140px",
          minHeight: "40vh",
          position: "relative",
          overflow: "hidden",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="display-4 fw-bold mb-3"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Careers
          </h1>
          <p
            className="fs-5 max-w-700 opacity-90 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Discover exceptional opportunities and build the future of software
            and AI solutions with us!
          </p>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-4 text-center">
          <h2 className="section-title">Join Our Growing Team</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p
                className="lead text-muted mb-4"
                style={{ fontSize: "1.08rem", lineHeight: "1.8" }}
              >
                At Saishnaa, we believe in nurturing talent, fostering
                continuous learning, and offering opportunities for massive
                professional growth. We provide a highly collaborative and
                inclusive environment where everyone's voice is valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "#f4f5f8" }}
        id="openings"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title mb-2">Open Positions</h2>
            <p className="text-muted small">
              Find your perfect technical role and apply in less than 2 minutes.
            </p>
          </div>

          <div className="row g-3 justify-content-center mb-5 align-items-center">
            <div className="col-md-5">
              <div
                className="input-group glass-panel shadow-sm"
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span className="input-group-text bg-white border-0 ps-3 text-muted">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control border-0 py-3 ps-2"
                  placeholder="Search by role or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ outline: "none", boxShadow: "none" }}
                />
              </div>
            </div>

            <div className="col-md-7 d-flex justify-content-md-end justify-content-center flex-wrap gap-2">
              {["All", "Engineering", "Design", "Marketing", "Management"].map(
                (dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className="btn px-3 py-2 fw-semibold btn-sm"
                    style={{
                      borderRadius: "20px",
                      backgroundColor:
                        selectedDept === dept ? "var(--main-color)" : "white",
                      color:
                        selectedDept === dept ? "white" : "var(--main-color)",
                      border:
                        selectedDept === dept
                          ? "none"
                          : "1px solid rgba(77, 30, 163, 0.15)",
                      transition: "all 0.3s",
                    }}
                  >
                    {dept}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="row g-4 justify-content-stretch">
            {filteredJobs.map((job) => (
              <div key={job.id} className="col-lg-4 col-md-6 d-flex">
                <div
                  className="interactive-card p-4 d-flex flex-column text-start w-100"
                  style={{ position: "relative" }}
                >
                  <span
                    className="badge bg-purple position-absolute top-3 end-3"
                    style={{
                      backgroundColor: "rgba(77, 30, 163, 0.1)",
                      color: "var(--main-color)",
                      borderRadius: "20px",
                      fontSize: "0.72rem",
                      padding: "6px 12px",
                      border: "1px solid rgba(77,30,163,0.15)",
                      top: "15px",
                      right: "15px",
                    }}
                  >
                    {job.dept}
                  </span>

                  <h5
                    className="fw-bold mb-2 mt-3"
                    style={{
                      color: "var(--main-color)",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {job.title}
                  </h5>

                  <p className="text-secondary small mb-3 fw-medium">
                    <MapPin size={14} className="me-1 text-warning" />{" "}
                    {job.location}
                  </p>

                  <p
                    className="text-muted small mb-4 flex-grow-1"
                    style={{ lineHeight: "1.6" }}
                  >
                    {job.desc}
                  </p>

                  <div className="mb-4 pt-3 border-top">
                    <h6 className="fw-semibold text-muted small mb-2">
                      <Code size={14} className="me-1" /> Key Skills Required:
                    </h6>
                    <p className="text-secondary small mb-0 fw-medium">
                      {job.skills}
                    </p>
                  </div>

                  <button
                    onClick={() => handleApplyClick(job)}
                    className="btn btn-purple py-2.5 w-100 rounded-pill mt-auto"
                    style={{ fontSize: "0.88rem" }}
                  >
                    Apply Now <Send size={14} />
                  </button>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-12 py-5 text-center text-muted glass-panel rounded-4">
                <p className="fs-5 mb-0">
                  No job openings found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {appliedJob && (
        <div
          className="modal d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1200,
            animation: "pageFadeIn 0.3s ease",
          }}
          onClick={() => setAppliedJob(null)}
        >
          <div
            className="modal-dialog glass-panel p-4"
            style={{
              maxWidth: "520px",
              width: "90%",
              borderRadius: "20px",
              backgroundColor: "white",
              border: "none",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              animation: "chatbotOpen 0.4s var(--cubic-bezier)",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 bg-transparent text-start">
              {formSubmitted ? (
                <div
                  className="text-center py-4 d-flex flex-column align-items-center justify-content-center"
                  style={{ animation: "pageFadeIn 0.4s ease" }}
                >
                  <CheckCircle
                    size={64}
                    className="text-success mb-3 animate__animated animate__bounceIn"
                  />
                  <h4
                    className="fw-bold mb-2"
                    style={{
                      color: "var(--main-color)",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    Application Dispatched!
                  </h4>
                  <p
                    className="text-muted px-3 small mb-4"
                    style={{ lineHeight: "1.6" }}
                  >
                    Your application for the <strong>{appliedJob.title}</strong>{" "}
                    position has been saved locally. We have automatically
                    opened your preferred channel (
                    <strong>{formData.channel}</strong>) to send your details.
                  </p>
                  <p className="text-muted px-3 small mb-4">
                    If the redirection was blocked by your browser, please
                    trigger the application manually:
                  </p>

                  <div className="d-flex flex-column gap-2.5 w-100 px-3">
                    {formData.channel === "WhatsApp" ? (
                      <a
                        href={`https://wa.me/919790155384?text=${encodeURIComponent(careerWaText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-white w-100 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2 fw-bold shadow-sm"
                        style={{
                          backgroundColor: "#25D366",
                          border: "none",
                          transition: "all 0.3s",
                          fontSize: "0.95rem",
                        }}
                      >
                        <MessageCircle size={18} /> Apply via WhatsApp Manually
                      </a>
                    ) : (
                      <a
                        href={`mailto:saishnaa@gmail.com?subject=${encodeURIComponent(careerEmailSubject)}&body=${encodeURIComponent(careerEmailBody)}`}
                        className="btn btn-purple w-100 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2 fw-bold text-white shadow-sm"
                        style={{ fontSize: "0.95rem" }}
                      >
                        <Mail size={18} /> Apply via Email Manually
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn btn-link btn-sm text-secondary w-100 mt-4 text-decoration-none small fw-semibold"
                    onClick={() => {
                      setAppliedJob(null);
                      setFormSubmitted(false);
                    }}
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h4
                        className="fw-bold mb-1"
                        style={{
                          color: "var(--main-color)",
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        Apply for Position
                      </h4>
                      <small className="text-secondary fw-semibold">
                        {appliedJob.title} ({appliedJob.dept})
                      </small>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      style={{ outline: "none", boxShadow: "none" }}
                      onClick={() => setAppliedJob(null)}
                    ></button>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-muted">
                      Short Cover Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.cover}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          cover: e.target.value,
                        }))
                      }
                    ></textarea>
                  </div>

                  <div className="mb-3 text-start">
                    <label className="form-label small fw-semibold text-muted d-block mb-2">
                      Preferred Application Channel (Instant Execution)
                    </label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="careerChannel"
                          id="careerWa"
                          value="WhatsApp"
                          checked={formData.channel === "WhatsApp"}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              channel: "WhatsApp",
                            }))
                          }
                        />
                        <label
                          className="form-check-label small fw-semibold text-secondary"
                          htmlFor="careerWa"
                        >
                          WhatsApp Submission
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="careerChannel"
                          id="careerMail"
                          value="Email"
                          checked={formData.channel === "Email"}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              channel: "Email",
                            }))
                          }
                        />
                        <label
                          className="form-check-label small fw-semibold text-secondary"
                          htmlFor="careerMail"
                        >
                          Email Submission
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mb-4 p-3 rounded-3 bg-light d-flex align-items-center gap-3"
                    style={{
                      border: "1.5px dashed var(--main-color)",
                      cursor: "pointer",
                      backgroundColor: "rgba(77, 30, 163, 0.02)",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() =>
                      document.getElementById("resume-file-input").click()
                    }
                  >
                    <input
                      type="file"
                      id="resume-file-input"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <FileText
                      size={24}
                      className={resumeFile ? "text-success" : "text-secondary"}
                    />
                    <div className="text-start flex-grow-1">
                      {resumeFile ? (
                        <>
                          <h6 className="mb-0 small fw-bold text-success">
                            ✓ {resumeFile.name}
                          </h6>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB •
                            Ready to attach
                          </small>
                        </>
                      ) : (
                        <>
                          <h6 className="mb-0 small fw-bold text-muted">
                            Upload Resume (PDF, DOC, DOCX)
                          </h6>
                          <small
                            className="text-muted"
                            style={{ fontSize: "0.75rem" }}
                          >
                            Click here to select your resume
                          </small>
                        </>
                      )}
                    </div>
                    {resumeFile && (
                      <button
                        type="button"
                        className="btn-close"
                        style={{
                          fontSize: "0.8rem",
                          outline: "none",
                          boxShadow: "none",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                      ></button>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-purple w-100 py-3 rounded-pill"
                  >
                    Submit Application & Launch Client{" "}
                    <Send size={14} className="ms-1" />
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
