import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setStatus({ loading: true, success: false, message: '' });

      // Save inquiry
      const inquiries = JSON.parse(localStorage.getItem('saishnaa_inquiries') || '[]');
      inquiries.push({
        inquiry: formData,
        date: new Date().toLocaleString()
      });
      localStorage.setItem('saishnaa_inquiries', JSON.stringify(inquiries));

      // Simulate network request
      setTimeout(() => {
        setStatus({
          loading: false,
          success: true,
          message: "Your message has been sent successfully! Our strategic consultants will contact you shortly."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success notification after 6s
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 6000);
      }, 1500);
    }
  };

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(129, 106, 199, 0.9) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="floating-shapes">
          <div className="shape" style={{ width: '80px', height: '80px', top: '15%', left: '5%', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animationDelay: '0s' }}></div>
          <div className="shape" style={{ width: '120px', height: '120px', bottom: '10%', right: '5%', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', animationDelay: '1s' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Contact Us</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            We'd love to hear from you. Reach out with any tech questions or project ideas.
          </p>
        </div>
      </section>

      
      <section className="py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-muted mt-2">Whether you want to build custom AI software or scale cloud databases, send us a line!</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-5">
                
                
                <div className="col-md-6 text-start">
                  <div className="glass-panel p-4 rounded-4 shadow-sm" style={{ border: '1px solid rgba(77,30,163,0.06)' }}>
                    <h5 className="fw-bold mb-4" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Send Us a Message</h5>
                    
                    {status.success && (
                      <div className="alert alert-success d-flex align-items-start gap-2 mb-4 animate__animated animate__fadeIn">
                        <CheckCircle className="flex-shrink-0 text-success mt-1" size={18} />
                        <span style={{ fontSize: '0.88rem' }}>{status.message}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label small fw-semibold text-muted">Your Name</label>
                        <input 
                          type="text" 
                          className="form-control py-2.5" 
                          id="name" 
                          placeholder="John Doe" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label small fw-semibold text-muted">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control py-2.5" 
                          id="email" 
                          placeholder="john@example.com" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label small fw-semibold text-muted">Subject</label>
                        <input 
                          type="text" 
                          className="form-control py-2.5" 
                          id="subject" 
                          placeholder="Project Inquiry / Tech consultation" 
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label small fw-semibold text-muted">Your Message</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          rows="5" 
                          placeholder="Describe your project, software goals, or requested timeline..." 
                          required
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn btn-purple w-100 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
                        disabled={status.loading}
                      >
                        {status.loading ? (
                          <>
                            <Loader size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Processing...
                          </>
                        ) : (
                          <>
                            <Send size={16} /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>

                
                <div className="col-md-6 text-start">
                  <div className="glass-panel p-4 rounded-4 shadow-sm h-100 d-flex flex-column" style={{ border: '1px solid rgba(77,30,163,0.06)' }}>
                    <h5 className="fw-bold mb-4 position-relative pb-2" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                      Contact Information
                      <span style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--main-color), var(--secondary-color))' }}></span>
                    </h5>
                    
                    <div className="d-flex flex-column gap-3 text-secondary" style={{ fontSize: '0.92rem' }}>
                      <p className="mb-0 d-flex align-items-start gap-2">
                        <MapPin size={18} className="text-warning flex-shrink-0 mt-1" />
                        <span>Sakthi nagar, Thindal, Erode-638012</span>
                      </p>
                      <p className="mb-0 d-flex align-items-center gap-2">
                        <Phone size={18} className="text-warning flex-shrink-0" />
                        <span>+91 9363643763</span>
                      </p>
                      <p className="mb-0 d-flex align-items-center gap-2">
                        <Mail size={18} className="text-warning flex-shrink-0" />
                        <span>saishnaa@gmail.com</span>
                      </p>
                      <p className="mb-0 d-flex align-items-start gap-2">
                        <Clock size={18} className="text-warning flex-shrink-0 mt-1" />
                        <span>Mon - Sat: 9:30 AM to 5:30 PM</span>
                      </p>
                    </div>

                    <h5 className="fw-bold mt-5 mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>Visit Our Office</h5>
                    
                    <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm flex-grow-1" style={{ border: '1px solid rgba(0,0,0,0.05)', minHeight: '220px' }}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1604952738758!2d77.68256627570776!3d11.32297724887344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f002388afbd%3A0x9785512e87acfb9c!2sTCDS%20Computer%20Education%20(%20Sakthi%20Nagar%2C%20Thindal%20)!5e0!3m2!1sen!2sin!4v1739613918280!5m2!1sen!2sin" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Google Map location"
                      ></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
