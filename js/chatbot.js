document.addEventListener("DOMContentLoaded", () => {
  // Inject Chatbot styles if needed (they are already in index.css, which is good)
  // Let's create the chatbot container and append to body
  const chatbotWrapper = document.createElement("div");
  chatbotWrapper.className = "chatbot-container";
  chatbotWrapper.id = "chatbot-root";
  document.body.appendChild(chatbotWrapper);

  let isOpen = false;
  let unread = !localStorage.getItem("saishnaa_chat_history");
  let chatState = "idle"; // idle, asking_email
  let messages = [];

  const defaultMessages = [
    {
      id: 1,
      sender: "bot",
      text: "Hello! I am Sai, your Saishnaa IT Assistant. 👋",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
    {
      id: 2,
      sender: "bot",
      text: "How can I help you empower your business today? Choose an option below or type a message!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ];

  // Load chat history on mount
  const savedChat = localStorage.getItem("saishnaa_chat_history");
  if (savedChat) {
    try {
      messages = JSON.parse(savedChat);
      unread = false;
    } catch (e) {
      messages = [...defaultMessages];
    }
  } else {
    messages = [...defaultMessages];
  }

  // Render the initial UI
  renderChatbot();

  function renderChatbot() {
    chatbotWrapper.innerHTML = `
      <div class="chatbot-toggle" id="chatbot-toggle-btn">
        <i data-lucide="${isOpen ? 'x' : 'message-square'}" style="width: 26px; height: 26px;"></i>
        ${unread ? '<div class="chatbot-pulse" id="chatbot-pulse-dot"></div>' : ''}
      </div>

      <div class="chatbot-window glass-panel d-flex flex-column" id="chatbot-window-el" style="display: ${isOpen ? 'flex' : 'none !important'};">
        <div class="chatbot-header">
          <div class="d-flex align-items-center gap-2">
            <img src="img/sai.png" alt="Bot Avatar" style="width: 32px; height: 32px; animation: float 3s infinite;" />
            <div class="text-white text-start">
              <h6 class="mb-0 fw-bold" style="font-size: 0.95rem;">Sai Assistant</h6>
              <small class="opacity-75 d-flex align-items-center gap-1">
                <span class="d-inline-block" style="width: 8px; height: 8px; border-radius: 50%; background-color: #00ffcc;"></span>
                Online Support
              </small>
            </div>
          </div>
          <i data-lucide="x" class="text-white-50" id="chatbot-close-x" style="cursor: pointer; width: 20px; height: 20px;"></i>
        </div>

        <div class="chatbot-messages" id="chatbot-messages-container">
          <!-- Messages will be injected here -->
        </div>

        <div class="chatbot-chips" id="chatbot-chips-el" style="display: ${chatState === 'asking_email' ? 'none !important' : 'flex'};">
          <div class="chatbot-chip" data-text="What services do you offer?">🛠️ Services Catalog</div>
          <div class="chatbot-chip" data-text="What are your pricing plans?">💰 Pricing Tiers</div>
          <div class="chatbot-chip" data-text="Tell me about your academy courses">🎓 Academy Courses</div>
          <div class="chatbot-chip" data-text="Are there career openings?">💼 Career Openings</div>
          <div class="chatbot-chip" data-text="Can I view your journals?">📚 Journals Portal</div>
          <div class="chatbot-chip" data-text="Book a consultation">📞 Book Free Consultation</div>
        </div>

        <div class="chatbot-input-container">
          <input type="text" class="chatbot-input" id="chatbot-input-el" placeholder="${chatState === 'asking_email' ? 'Type your email here...' : 'Type your message...'}" />
          <button class="chatbot-send" id="chatbot-send-btn">
            <i data-lucide="send" style="width: 18px; height: 18px;"></i>
          </button>
        </div>
      </div>
    `;

    // Process Lucide Icons
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    // Attach Event Listeners
    document.getElementById("chatbot-toggle-btn").addEventListener("click", toggleChat);
    document.getElementById("chatbot-close-x").addEventListener("click", toggleChat);
    document.getElementById("chatbot-send-btn").addEventListener("click", () => handleSend());
    document.getElementById("chatbot-input-el").addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSend();
    });

    // Chips click events
    const chips = chatbotWrapper.querySelectorAll(".chatbot-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const text = chip.getAttribute("data-text");
        handleSend(text);
      });
    });

    // Render messages in container
    renderMessages();
  }

  function renderMessages() {
    const container = document.getElementById("chatbot-messages-container");
    if (!container) return;

    container.innerHTML = "";
    messages.forEach((msg) => {
      const bubble = document.createElement("div");
      bubble.className = `chatbot-bubble ${msg.sender}`;
      bubble.innerHTML = `
        ${msg.text}
        <div style="font-size: 0.7rem; opacity: 0.6; text-align: ${msg.sender === 'user' ? 'right' : 'left'}; margin-top: 4px;">
          ${msg.time}
        </div>
      `;

      // Embed special action buttons in specific messages
      if (msg.text.includes("full Services catalog?")) {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-purple mt-2 text-white w-100";
        btn.style.fontSize = "0.75rem";
        btn.style.padding = "6px";
        btn.textContent = "Go to Services";
        btn.addEventListener("click", () => {
          isOpen = false;
          window.location.href = "services.html";
        });
        bubble.appendChild(btn);
      }

      if (msg.text.includes("latest academic research and publications?")) {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-purple mt-2 text-white w-100";
        btn.style.fontSize = "0.75rem";
        btn.style.padding = "6px";
        btn.textContent = "Go to Journals";
        btn.addEventListener("click", () => {
          isOpen = false;
          window.location.href = "journals.html";
        });
        bubble.appendChild(btn);
      }

      if (msg.text.includes("full Learning Academy Courses page?")) {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-purple mt-2 text-white w-100";
        btn.style.fontSize = "0.75rem";
        btn.style.padding = "6px";
        btn.textContent = "Go to Courses";
        btn.addEventListener("click", () => {
          isOpen = false;
          window.location.href = "courses.html";
        });
        bubble.appendChild(btn);
      }

      container.appendChild(bubble);
    });

    scrollToBottom();
  }

  function toggleChat() {
    isOpen = !isOpen;
    unread = false;
    
    const windowEl = document.getElementById("chatbot-window-el");
    const pulseDot = document.getElementById("chatbot-pulse-dot");
    const toggleBtn = document.getElementById("chatbot-toggle-btn");

    if (windowEl) {
      if (isOpen) {
        windowEl.style.display = "flex";
        windowEl.style.animation = "chatbotOpen 0.4s var(--cubic-bezier) forwards";
        if (pulseDot) pulseDot.style.display = "none";
        scrollToBottom();
      } else {
        windowEl.style.display = "none !important";
        windowEl.style.animation = "";
      }
    }
    
    // Update Lucide icon in toggle button
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <i data-lucide="${isOpen ? 'x' : 'message-square'}" style="width: 26px; height: 26px;"></i>
      `;
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }
  }

  function addMessage(sender, text) {
    const newMsg = {
      id: Date.now(),
      sender,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    messages.push(newMsg);
    localStorage.setItem("saishnaa_chat_history", JSON.stringify(messages));
    renderMessages();
  }

  function handleSend(textToSend) {
    const inputEl = document.getElementById("chatbot-input-el");
    const text = textToSend || (inputEl ? inputEl.value : "");
    if (!text.trim()) return;

    addMessage("user", text);
    if (inputEl) inputEl.value = "";

    simulateBotResponse(text);
  }

  function simulateBotResponse(userText) {
    // Show typing indicator
    const container = document.getElementById("chatbot-messages-container");
    if (!container) return;

    const typingIndicator = document.createElement("div");
    typingIndicator.className = "chatbot-typing";
    typingIndicator.id = "chatbot-typing-indicator";
    typingIndicator.innerHTML = `
      <div class="chatbot-dot"></div>
      <div class="chatbot-dot"></div>
      <div class="chatbot-dot"></div>
    `;
    container.appendChild(typingIndicator);
    scrollToBottom();

    setTimeout(() => {
      // Remove typing indicator
      const ind = document.getElementById("chatbot-typing-indicator");
      if (ind) ind.remove();

      let botReply = "";
      const text = userText.toLowerCase();

      // Check current state machine
      if (chatState === "asking_email") {
        if (text.includes("@") && text.includes(".")) {
          // Store lead details
          const leads = JSON.parse(localStorage.getItem("saishnaa_leads") || "[]");
          leads.push({ email: userText, date: new Date().toLocaleString() });
          localStorage.setItem("saishnaa_leads", JSON.stringify(leads));

          botReply = `Perfect! I've registered your interest. 📩 Our team will reach out to you at ${userText} within 24 business hours to book your free consultation. Is there anything else I can help you with?`;
          chatState = "idle";
          const inputEl = document.getElementById("chatbot-input-el");
          if (inputEl) inputEl.placeholder = "Type your message...";
          const chipsEl = document.getElementById("chatbot-chips-el");
          if (chipsEl) chipsEl.style.display = "flex";
        } else {
          botReply = "Hmm, that doesn't look like a valid email address. Could you please double-check and enter a correct email? (e.g. name@company.com)";
        }
        addMessage("bot", botReply);
        return;
      }

      // Premium Q&A mappings
      if (text.includes("service") || text.includes("what do you do") || text.includes("offer")) {
        botReply = "Saishnaa Software Solutions provides premium, full-cycle technology consulting. Our key offerings encompass bespoke Enterprise Web Platforms, high-performance Mobile Applications (iOS & Android), custom Artificial Intelligence & Machine Learning deployments, secure Cloud Migration, comprehensive Cybersecurity audits, and pixel-perfect UI/UX engineering. We specialize in building fast, scalable systems.";
        addMessage("bot", botReply);
        setTimeout(() => {
          addMessage("bot", "Would you like me to take you to our full Services catalog? Click below!");
        }, 600);
      } else if (text.includes("pricing") || text.includes("cost") || text.includes("plan")) {
        botReply = "Our pricing structures are engineered to offer maximum clarity and exceptional value. We offer tiered engineering packages starting at ₹5,000 for the Starter Plan (informational frameworks), ₹10,000 for the Professional Plan (incorporating automatic invoicing, multi-wallet integration, and dynamic workflows), and ₹15,000 for the Premium Plan (fully loaded with integrated payment gateways, robust dashboards, and real-time user analytics).";
        addMessage("bot", botReply);
      } else if (text.includes("career") || text.includes("job") || text.includes("hire") || text.includes("hiring") || text.includes("work")) {
        botReply = "Saishnaa is a hub of technological innovation, and we are actively seeking exceptional talent to join our team. We currently have active openings for Software Engineers (React, Node, Python), UI/UX Experience Designers, Agile Product Leads, and DevOps specialists. To apply for a role, please email your credentials and resume to saishnaa@gmail.com, or send a message directly to our talent acquisition team via WhatsApp at +91 9790155384!";
        addMessage("bot", botReply);
      } else if (text.includes("journal") || text.includes("paper") || text.includes("research") || text.includes("publication") || text.includes("article")) {
        botReply = "At Saishnaa, we actively contribute to state-of-the-art technological progress. Our dedicated R&D division regularly publishes academic papers, technical journals, and architectural whitepapers focusing on AI models, high-concurrency cloud systems, and responsive web paradigms.";
        addMessage("bot", botReply);
        setTimeout(() => {
          addMessage("bot", "Would you like to browse our latest academic research and publications?");
        }, 600);
      } else if (text.includes("course") || text.includes("academy") || text.includes("scratch") || text.includes("bootcamp") || text.includes("class") || text.includes("learn")) {
        botReply = "Saishnaa Learning Academy offers premium, certified computer training and professional coding bootcamps. 🎓 For children aged 6 to 15, we provide our highly acclaimed *Kids Scratch Coding Academy* (mitigating drag-and-drop code blocks for arcade games and logic). For graduates and professionals, we offer accelerated placement-focused Bootcamps in *MERN Full Stack Development*, *Python & AI Foundations*, and *Advanced Java Enterprise MVC Systems*. We also have 23 other specialized government-certified IT and Tally programs!";
        addMessage("bot", botReply);
        setTimeout(() => {
          addMessage("bot", "Would you like me to open our full Learning Academy Courses page?");
        }, 600);
      } else if (text.includes("consultation") || text.includes("book") || text.includes("contact") || text.includes("meet") || text.includes("call")) {
        botReply = "I would be absolutely delighted to help secure a technical consultation for your project with our lead software engineers and architects. 🗓️ To initiate this scheduling, could you please share your professional email address below?";
        addMessage("bot", botReply);
        chatState = "asking_email";
        const inputEl = document.getElementById("chatbot-input-el");
        if (inputEl) inputEl.placeholder = "Type your email here...";
        const chipsEl = document.getElementById("chatbot-chips-el");
        if (chipsEl) chipsEl.style.display = "none !important";
      } else if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
        botReply = "Greetings! Welcome to Saishnaa Software Solutions. I am Sai, your dedicated Technology Consultant. How may I assist you with your digital transformation, custom software architecture, or career goals today?";
        addMessage("bot", botReply);
      } else {
        botReply = "Thank you for sharing your message. I have successfully logged your query in our local database. To speak directly with our executive consultants or secure a customized quote, please type 'Book Consultation', email us at saishnaa@gmail.com, or send an instant WhatsApp query to +91 9790155384!";
        addMessage("bot", botReply);
      }
    }, 1200);
  }

  function scrollToBottom() {
    const container = document.getElementById("chatbot-messages-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
});
