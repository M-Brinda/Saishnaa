import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatState, setChatState] = useState('idle'); // idle, asking_email, finished
  
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Initial messages
  const defaultMessages = [
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Sai, your Saishnaa IT Assistant. 👋",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: 2,
      sender: 'bot',
      text: "How can I help you empower your business today? Choose an option below or type a message!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];

  // Load chat history on mount
  useEffect(() => {
    const savedChat = localStorage.getItem('saishnaa_chat_history');
    if (savedChat) {
      try {
        setMessages(JSON.parse(savedChat));
        setUnread(false);
      } catch (e) {
        setMessages(defaultMessages);
      }
    } else {
      setMessages(defaultMessages);
    }
  }, []);

  // Save chat history on updates
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('saishnaa_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  const addMessage = (sender, text) => {
    const newMsg = {
      id: Date.now(),
      sender,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
  };

  const simulateBotResponse = (userText) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      let botReply = "";
      const text = userText.toLowerCase();

      // Check current state machine
      if (chatState === 'asking_email') {
        if (text.includes('@') && text.includes('.')) {
          // Store lead details
          const leads = JSON.parse(localStorage.getItem('saishnaa_leads') || '[]');
          leads.push({ email: userText, date: new Date().toLocaleString() });
          localStorage.setItem('saishnaa_leads', JSON.stringify(leads));

          botReply = `Perfect! I've registered your interest. 📩 Our team will reach out to you at ${userText} within 24 business hours to book your free consultation. Is there anything else I can help you with?`;
          setChatState('idle');
        } else {
          botReply = "Hmm, that doesn't look like a valid email address. Could you please double-check and enter a correct email? (e.g. name@company.com)";
        }
        addMessage('bot', botReply);
        return;
      }

      // Premium LLM-styled Q&A mappings
      if (text.includes('service') || text.includes('what do you do') || text.includes('offer')) {
        botReply = "Saishnaa Software Solutions provides premium, full-cycle technology consulting. Our key offerings encompass bespoke Enterprise Web Platforms, high-performance Mobile Applications (iOS & Android), custom Artificial Intelligence & Machine Learning deployments, secure Cloud Migration, comprehensive Cybersecurity audits, and pixel-perfect UI/UX engineering. We specialize in building fast, scalable systems.";
        addMessage('bot', botReply);
        setTimeout(() => {
          addMessage('bot', "Would you like me to take you to our full Services catalog? Click below!");
        }, 600);
      } 
      else if (text.includes('pricing') || text.includes('cost') || text.includes('plan')) {
        botReply = "Our pricing structures are engineered to offer maximum clarity and exceptional value. We offer tiered engineering packages starting at ₹5,000 for the Starter Plan (informational frameworks), ₹10,000 for the Professional Plan (incorporating automatic invoicing, multi-wallet integration, and dynamic workflows), and ₹15,000 for the Premium Plan (fully loaded with integrated payment gateways, robust dashboards, and real-time user analytics).";
        addMessage('bot', botReply);
      } 
      else if (text.includes('career') || text.includes('job') || text.includes('hire') || text.includes('hiring') || text.includes('work')) {
        botReply = "Saishnaa is a hub of technological innovation, and we are actively seeking exceptional talent to join our team. We currently have active openings for Software Engineers (React, Node, Python), UI/UX Experience Designers, Agile Product Leads, and DevOps specialists. To apply for a role, please email your credentials and resume to saishnaa@gmail.com, or send a message directly to our talent acquisition team via WhatsApp at +91 9790155384!";
        addMessage('bot', botReply);
      } 
      else if (text.includes('journal') || text.includes('paper') || text.includes('research') || text.includes('publication') || text.includes('article')) {
        botReply = "At Saishnaa, we actively contribute to state-of-the-art technological progress. Our dedicated R&D division regularly publishes academic papers, technical journals, and architectural whitepapers focusing on AI models, high-concurrency cloud systems, and responsive web paradigms.";
        addMessage('bot', botReply);
        setTimeout(() => {
          addMessage('bot', "Would you like to browse our latest academic research and publications?");
        }, 600);
      }
      else if (text.includes('consultation') || text.includes('book') || text.includes('contact') || text.includes('meet') || text.includes('call')) {
        botReply = "I would be absolutely delighted to help secure a technical consultation for your project with our lead software engineers and architects. 🗓️ To initiate this scheduling, could you please share your professional email address below?";
        addMessage('bot', botReply);
        setChatState('asking_email');
      } 
      else if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
        botReply = "Greetings! Welcome to Saishnaa Software Solutions. I am Sai, your dedicated Technology Consultant. How may I assist you with your digital transformation, custom software architecture, or career goals today?";
        addMessage('bot', botReply);
      } 
      else {
        botReply = "Thank you for sharing your message. I have successfully logged your query in our local database. To speak directly with our executive consultants or secure a customized quote, please type 'Book Consultation', email us at saishnaa@gmail.com, or send an instant WhatsApp query to +91 9790155384!";
        addMessage('bot', botReply);
      }
    }, 1200);
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    addMessage('user', text);
    setInputValue('');
    simulateBotResponse(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickReplies = [
    { label: "🛠️ Services Catalog", text: "What services do you offer?" },
    { label: "💰 Pricing Tiers", text: "What are your pricing plans?" },
    { label: "💼 Career Openings", text: "Are there career openings?" },
    { label: "📞 Book Free Consultation", text: "Book a consultation" }
  ];

  return (
    <div className="chatbot-container">
      
      <div className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        {unread && <div className="chatbot-pulse"></div>}
      </div>

      
      {isOpen && (
        <div className="chatbot-window glass-panel d-flex flex-column">
          
          <div className="chatbot-header">
            <div className="d-flex align-items-center gap-2">
              <img src="/img/sai.png" alt="Bot Avatar" style={{ width: '32px', height: '32px', animation: 'float 3s infinite' }} />
              <div>
                <h6 className="mb-0 fw-bold" style={{ fontSize: '0.95rem' }}>Sai Assistant</h6>
                <small className="opacity-75 d-flex align-items-center gap-1">
                  <span className="d-inline-block" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00ffcc' }}></span>
                  Online Support
                </small>
              </div>
            </div>
            <X size={20} className="cursor-pointer text-white-50" onClick={toggleChat} style={{ cursor: 'pointer' }} />
          </div>

          
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-bubble ${msg.sender}`}>
                {msg.text}
                <div style={{ fontSize: '0.7rem', opacity: 0.6, textAlign: msg.sender === 'user' ? 'right' : 'left', marginTop: '4px' }}>
                  {msg.time}
                </div>
                {/* Specific Action Buttons embedded in chat */}
                {msg.text.includes("full Services catalog?") && (
                  <button onClick={() => { setIsOpen(false); navigate('/services'); }} className="btn btn-sm btn-purple mt-2 text-white w-100" style={{ fontSize: '0.75rem', padding: '6px' }}>
                    Go to Services
                  </button>
                )}
                {msg.text.includes("latest academic research and publications?") && (
                  <button onClick={() => { setIsOpen(false); navigate('/journals'); }} className="btn btn-sm btn-purple mt-2 text-white w-100" style={{ fontSize: '0.75rem', padding: '6px' }}>
                    Go to Journals
                  </button>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="chatbot-typing">
                <div className="chatbot-dot"></div>
                <div className="chatbot-dot"></div>
                <div className="chatbot-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          
          {chatState !== 'asking_email' && (
            <div className="chatbot-chips">
              {quickReplies.map((reply, idx) => (
                <div key={idx} className="chatbot-chip" onClick={() => handleSend(reply.text)}>
                  {reply.label}
                </div>
              ))}
            </div>
          )}

          
          <div className="chatbot-input-container">
            <input 
              type="text" 
              className="chatbot-input" 
              placeholder={chatState === 'asking_email' ? "Type your email here..." : "Type your message..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="chatbot-send" onClick={() => handleSend()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
