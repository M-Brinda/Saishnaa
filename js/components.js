document.addEventListener("DOMContentLoaded", () => {
  // Inject Google Analytics dynamically
  const gaTrackingId = "G-XXXXXXXXXX";
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
    document.head.appendChild(gaScript);

    const gaInitScript = document.createElement("script");
    gaInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTrackingId}');
    `;
    document.head.appendChild(gaInitScript);
  }

  // Inject Navbar if placeholder exists
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    const scrolled = window.scrollY > 50;
    navbarPlaceholder.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled navbar-blur' : ''}" style="z-index: 1100;">
        <div class="container-fluid px-md-4">
          <a class="navbar-brand d-flex align-items-center gap-2 me-auto ps-3 text-white" href="index.html" style="white-space: nowrap;">
            <img src="img/sai.png" alt="Saishnaa Logo" style="height: 40px; width: auto; animation: float 4s ease-in-out infinite;" />
            <span class="fw-bold fs-5 text-white" style="font-family: Outfit, sans-serif;">Saishnaa Software Solution Limited</span>
          </a>

          <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="outline: none; box-shadow: none;">
            <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item">
                <a href="index.html" class="nav-link text-white">About</a>
              </li>
              <li class="nav-item">
                <a href="our-services.html" class="nav-link text-white">Services</a>
              </li>
              <li class="nav-item">
                <a href="training-courses.html" class="nav-link text-white">Courses</a>
              </li>
              <li class="nav-item">
                <a href="our-projects.html" class="nav-link text-white">Projects</a>
              </li>
              <li class="nav-item">
                <a href="journals.html" class="nav-link text-white">Journals</a>
              </li>
              <li class="nav-item">
                <a href="pricing.html" class="nav-link text-white">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="careers.html" class="nav-link text-white">Careers</a>
              </li>
              <li class="nav-item">
                <a href="contact-us.html" class="nav-link text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    // Highlight active link
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = navbarPlaceholder.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath || (currentPath === "" && href === "index.html")) {
        link.classList.add("active", "fw-bold");
      }
    });

    // Handle scroll for navbar styling
    window.addEventListener("scroll", () => {
      const navbar = navbarPlaceholder.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled", "navbar-blur");
        } else {
          navbar.classList.remove("scrolled", "navbar-blur");
        }
      }
    });
  }

  // Inject Footer if placeholder exists
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="row g-4">
            
            <div class="col-lg-4 mb-4 mb-lg-0 text-start">
              <h4 class="fw-bold mb-4" style="font-family: Outfit, sans-serif;">Saishnaa Software Solution Limited</h4>
              <p class="opacity-75" style="font-size: 0.95rem; line-height: 1.7;">
                Innovative technology solutions tailored to your business needs. Let's build the future together.
              </p>
              <div class="social-icons mt-4">
                <a href="https://www.facebook.com/profile.php?id=61577296040956" target="_blank" rel="noopener noreferrer" class="social-link-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/saishnaa83696" target="_blank" rel="noopener noreferrer" class="social-link-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/saishnaa-software-solutions-erode-978b08342/" target="_blank" rel="noopener noreferrer" class="social-link-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/saishnaa_software/" target="_blank" rel="noopener noreferrer" class="social-link-icon">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
              <h5 class="fw-bold mb-4 position-relative pb-2" style="font-family: Outfit, sans-serif;">
                Quick Links
                <span style="position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--accent-color); border-radius: 2px;"></span>
              </h5>
              <ul class="list-unstyled opacity-75 d-flex flex-column gap-2" style="font-size: 0.95rem;">
                <li><a href="index.html" class="text-white nav-link-hover">About Us</a></li>
                <li><a href="our-services.html" class="text-white nav-link-hover">Services</a></li>
                <li><a href="training-courses.html" class="text-white nav-link-hover">Courses & Academy</a></li>
                <li><a href="our-projects.html" class="text-white nav-link-hover">Projects</a></li>
                <li><a href="journals.html" class="text-white nav-link-hover">Academic Journals</a></li>
                <li><a href="pricing.html" class="text-white nav-link-hover">Pricing</a></li>
                <li><a href="careers.html" class="text-white nav-link-hover">Careers</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
              <h5 class="fw-bold mb-4 position-relative pb-2" style="font-family: Outfit, sans-serif;">
                Contact Us
                <span style="position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--accent-color); border-radius: 2px;"></span>
              </h5>
              <ul class="list-unstyled opacity-75 d-flex flex-column gap-3" style="font-size: 0.95rem;">
                <li class="d-flex align-items-start gap-2">
                  <i class="fas fa-map-marker-alt mt-1 text-warning"></i>
                  <span>Sakthi nagar, Thindal, Erode-638012</span>
                </li>
                <li class="d-flex align-items-center gap-2">
                  <i class="fas fa-phone text-warning"></i>
                  <span>+91 9363643763</span>
                </li>
                <li class="d-flex align-items-center gap-2">
                  <i class="fas fa-envelope text-warning"></i>
                  <span>saishnaa@gmail.com</span>
                </li>
                <li class="d-flex align-items-start gap-2">
                  <i class="fas fa-clock mt-1 text-warning"></i>
                  <span>Mon-Sat: 9:40AM - 5:40PM</span>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 text-start">
              <h5 class="fw-bold mb-4 position-relative pb-2" style="font-family: Outfit, sans-serif;">
                Newsletter
                <span style="position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--accent-color); border-radius: 2px;"></span>
              </h5>
              <p class="opacity-75 mb-3" style="font-size: 0.95rem;">
                Subscribe to our newsletter for the latest tech updates and career opportunities.
              </p>
              <form id="newsletter-form" class="mt-3">
                <div class="input-group">
                  <input type="email" id="newsletter-email" class="form-control" placeholder="Your Email" style="border-top-left-radius: 25px; border-bottom-left-radius: 25px; outline: none;" required />
                  <button class="btn btn-warning fw-bold text-dark px-3" type="submit" style="border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
                    Subscribe
                  </button>
                </div>
                <small id="newsletter-status" class="mt-2 d-none fw-bold" style="animation: pageFadeIn 0.3s ease;"></small>
              </form>
            </div>
          </div>

          <hr class="my-5 bg-white opacity-25" />

          <div class="row align-items-center" style="font-size: 0.9rem;">
            <div class="col-md-6 text-center text-md-start opacity-75 mb-3 mb-md-0">
              <p class="mb-0">&copy; ${new Date().getFullYear()} Saishnaa Software Solution Limited. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-center text-md-end d-flex justify-content-center justify-content-md-end gap-3">
              <a href="privacy.html" class="text-white opacity-75 nav-link-hover">Privacy Policy</a>
              <span class="opacity-25">|</span>
              <a href="terms.html" class="text-white opacity-75 nav-link-hover">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    // Hook newsletter subscription logic
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("newsletter-email");
        const statusText = document.getElementById("newsletter-status");
        if (emailInput && statusText) {
          const email = emailInput.value;
          if (email && email.includes("@")) {
            statusText.textContent = "Thank you for subscribing to our newsletter!";
            statusText.className = "mt-2 d-block fw-bold text-success";
            emailInput.value = "";
            setTimeout(() => {
              statusText.className = "mt-2 d-none fw-bold";
            }, 5000);
          } else {
            statusText.textContent = "Please enter a valid email address.";
            statusText.className = "mt-2 d-block fw-bold text-danger";
          }
        }
      });
    }
  }
});
