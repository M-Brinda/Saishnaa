import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, Heart, X, BookOpen, Clock } from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [likedPosts, setLikedPosts] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Load liked articles
    const savedLikes = localStorage.getItem('saishnaa_liked_articles');
    if (savedLikes) {
      try {
        setLikedPosts(JSON.parse(savedLikes));
      } catch (e) {}
    }
  }, []);

  const articles = [
    {
      id: 1,
      title: "The Future of Retail: Integrating Predictive AI & ML",
      category: "AI & Analytics",
      image: "/img/retails_1.jpg",
      author: "Priya Sharma (CTO)",
      date: "May 25, 2026",
      readTime: "5 min read",
      excerpt: "Discover how predictive analytics models are reshaping modern inventory pipelines, minimizing overheads, and maximizing consumer retention rates.",
      content: "Predictive analytics and Machine Learning (ML) are no longer futuristic luxuries—they are core operational prerequisites for retail success. By analyzing historic customer transactions, foot traffic telemetry, regional weather trends, and competitor price charts, custom-trained ML models can forecast product demand with up to 96% accuracy.\n\nAt Saishnaa, we design specialized demand prediction frameworks that integrate directly with existing ERP tools. These systems dynamically flag supply bottlenecks, suggest localized discounts, and automate inventory replenishments. Minimizing warehouse stock overflows saves capital while ensuring consumer-favorite products are never out of stock."
    },
    {
      id: 2,
      title: "Cloud Migration Demystified: Safe Strategies for Modern Finance",
      category: "Cloud & Security",
      image: "/img/CloudMigration.jpg",
      author: "Raj Kumar (CEO)",
      date: "May 18, 2026",
      readTime: "7 min read",
      excerpt: "Transitioning legacy banking databases to a decentralized hybrid cloud environment. Read about safety measures and SOC2 audit automations.",
      content: "For financial institutions, migrating legacy architectures to public or hybrid clouds is historically met with skepticism due to strict data privacy guidelines and system downtime risks. However, the rise of modern decentralized cloud security, end-to-end data encryption, and automated compliance tools has completely changed the landscape.\n\nMigrating to secure platforms like AWS or Azure allows finance firms to handle massive transaction volumes with minimal server latencies. At Saishnaa, we implement zero-downtime database pipelines. We isolate legacy frameworks, replicate transactional data in parallel, secure databases with custom Threat Protection shields, and implement automated audit trails that ensure your system complies with SOC2, ISO 27001, and local finance guidelines."
    },
    {
      id: 3,
      title: "Designing for Delight: Key Principles of Premium UI/UX",
      category: "Web Development",
      image: "/img/ui1.jpg",
      author: "Riddhi Patel (Lead Designer)",
      date: "May 10, 2026",
      readTime: "4 min read",
      excerpt: "A deep dive into visual hierarchy, responsive typography, and glassmorphic micro-animations that turn standard interfaces into premium products.",
      content: "A premium user interface is not just about choosing pleasant colors; it is about establishing a flawless interactive dialogue with the user. Visual architecture should guide a visitor's eyes effortlessly from high-priority headings to interactive action forms without causing visual fatigue.\n\nImplementing subtle micro-animations (like custom hover scales, scrolling indicators, and glassmorphism elements with backdrop blurs) adds a layer of professionalism and prestige. By leveraging standard web typography (such as Poppins or Outfit) and tailoring layouts specifically to mobile displays, a product will feel responsive, alive, and elite."
    }
  ];

  const categories = ['All', 'AI & Analytics', 'Cloud & Security', 'Web Development'];

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  const handleLike = (id, e) => {
    e.stopPropagation(); // Prevent opening modal
    let updated;
    if (likedPosts.includes(id)) {
      updated = likedPosts.filter(postId => postId !== id);
    } else {
      updated = [...likedPosts, id];
    }
    setLikedPosts(updated);
    localStorage.setItem('saishnaa_liked_articles', JSON.stringify(updated));
  };

  return (
    <div className="page-fade-in">
      
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
        background: 'linear-gradient(135deg, rgba(77, 30, 163, 0.9) 0%, rgba(129, 106, 199, 0.8) 100%), url("/img/1.jpg") center/cover fixed',
        padding: '180px 20px 140px',
        minHeight: '40vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Tech Blog</h1>
          <p className="fs-5 max-w-700 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
            Stay updated with the latest technological breakthroughs, development frameworks, and digital insights.
          </p>
        </div>
      </section>

      
      <section className="py-5" style={{ backgroundColor: '#f9fafc' }}>
        <div className="container py-4">
          
          
          <div className="text-center mb-5">
            <h2 className="section-title">Knowledge Hub</h2>
            <p className="text-muted mt-2">Articles and insights compiled by our strategic consultants and engineers.</p>
          </div>

          
          <div className="row g-3 justify-content-center mb-5 align-items-center">
            <div className="col-md-5">
              <div className="input-group glass-panel shadow-sm" style={{ borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span className="input-group-text bg-white border-0 ps-3 text-muted"><Search size={18} /></span>
                <input 
                  type="text" 
                  className="form-control border-0 py-3 ps-2" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>

            <div className="col-md-7 d-flex justify-content-md-end justify-content-center flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className="btn px-3 py-2 fw-semibold btn-sm"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: selectedCat === cat ? 'var(--main-color)' : 'white',
                    color: selectedCat === cat ? 'white' : 'var(--main-color)',
                    border: selectedCat === cat ? 'none' : '1px solid rgba(77, 30, 163, 0.15)',
                    transition: 'all 0.3s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          
          <div className="row g-4 justify-content-center">
            {filteredArticles.map((article, idx) => (
              <div 
                key={article.id} 
                className="col-lg-4 col-md-6" 
                style={{ 
                  animation: 'pageFadeIn 0.5s ease both',
                  animationDelay: `${idx * 0.15}s`
                }}
              >
                <div 
                  className="interactive-card h-100 d-flex flex-column text-start"
                  onClick={() => setSelectedArticle(article)}
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    
                    <span className="badge bg-purple position-absolute top-3 start-3" style={{
                      backgroundColor: 'var(--main-color)', borderRadius: '20px', fontSize: '0.72rem',
                      padding: '6px 12px', top: '15px', left: '15px', zIndex: 2
                    }}>
                      {article.category}
                    </span>

                    {/* Bookmark Heart Button */}
                    <button 
                      onClick={(e) => handleLike(article.id, e)}
                      className="btn position-absolute top-3 end-3 p-2 rounded-circle"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        border: 'none', top: '15px', right: '15px', zIndex: 3,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s'
                      }}
                    >
                      <Heart 
                        size={16} 
                        fill={likedPosts.includes(article.id) ? 'var(--accent-color)' : 'none'}
                        color={likedPosts.includes(article.id) ? 'var(--accent-color)' : '#555'}
                      />
                    </button>
                  </div>

                  
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                      <span className="d-flex align-items-center gap-1"><Calendar size={13} /> {article.date}</span>
                      <span className="d-flex align-items-center gap-1"><Clock size={13} /> {article.readTime}</span>
                    </div>

                    <h5 className="fw-bold mb-3" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', lineHeight: '1.4' }}>
                      {article.title}
                    </h5>

                    <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {article.excerpt}
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top w-100" style={{ fontSize: '0.85rem' }}>
                      <span className="fw-semibold text-secondary d-flex align-items-center gap-1">
                        <User size={14} /> {article.author}
                      </span>
                      <span className="fw-bold" style={{ color: 'var(--main-color)' }}>
                        Read Article &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredArticles.length === 0 && (
              <div className="col-12 py-5 text-center text-muted">
                <p className="fs-5">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      
      {selectedArticle && (
        <div className="modal d-flex align-items-center justify-content-center" style={{
          backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1200,
          animation: 'pageFadeIn 0.3s ease'
        }} onClick={() => setSelectedArticle(null)}>

          <div className="modal-dialog modal-dialog-centered modal-lg glass-panel p-4" style={{
            maxWidth: '750px', width: '90%', borderRadius: '20px', backgroundColor: 'white', border: 'none',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)', animation: 'chatbotOpen 0.4s var(--cubic-bezier)',
            maxHeight: '90vh', overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>

            <div className="modal-content border-0 bg-transparent text-start">
              
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="badge bg-purple py-2 px-3 text-white" style={{ backgroundColor: 'var(--main-color)', borderRadius: '20px' }}>
                  {selectedArticle.category}
                </span>
                <button type="button" className="btn-close" style={{ outline: 'none', boxShadow: 'none' }} onClick={() => setSelectedArticle(null)}></button>
              </div>

              
              <div className="mb-4 rounded-3" style={{ height: '280px', overflow: 'hidden' }}>
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>

              
              <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                <span className="d-flex align-items-center gap-1"><Calendar size={14} /> {selectedArticle.date}</span>
                <span className="d-flex align-items-center gap-1"><Clock size={14} /> {selectedArticle.readTime}</span>
                <span className="d-flex align-items-center gap-1"><User size={14} /> By {selectedArticle.author}</span>
              </div>

              
              <h3 className="fw-bold mb-4" style={{ color: 'var(--main-color)', fontFamily: 'Outfit, sans-serif' }}>
                {selectedArticle.title}
              </h3>

              
              <div className="article-body text-secondary" style={{
                fontSize: '0.98rem', lineHeight: '1.85', whiteSpace: 'pre-line', borderTop: '1px solid rgba(0,0,0,0.05)',
                paddingTop: '20px'
              }}>
                {selectedArticle.content}
              </div>

              <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                <button 
                  onClick={(e) => handleLike(selectedArticle.id, e)}
                  className="btn btn-outline-purple rounded-pill d-flex align-items-center gap-2 px-4 py-2"
                  style={{
                    color: 'var(--secondary-color)', border: '1px solid rgba(118, 69, 252, 0.3)', fontWeight: '500'
                  }}
                >
                  <Heart size={16} fill={likedPosts.includes(selectedArticle.id) ? 'var(--accent-color)' : 'none'} color={likedPosts.includes(selectedArticle.id) ? 'var(--accent-color)' : '#555'} />
                  {likedPosts.includes(selectedArticle.id) ? 'Bookmarked' : 'Bookmark Article'}
                </button>
                <button className="btn btn-purple rounded-pill px-4 py-2" onClick={() => setSelectedArticle(null)}>
                  Close Article
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
