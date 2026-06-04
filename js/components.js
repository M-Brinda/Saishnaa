document.addEventListener("DOMContentLoaded", () => {
  // Inject Navbar if placeholder exists
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    const scrolled = window.scrollY > 50;
    navbarPlaceholder.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-blur' : ''}" style="background-color: ${scrolled ? 'rgba(77, 30, 163, 0.95)' : 'var(--main-color)'}; transition: all 0.4s ease; box-shadow: 0 4px 18px rgba(0,0,0,0.1); padding: ${scrolled ? '8px 0' : '15px 0'}; z-index: 1100;">
        <div class="container-fluid px-md-4">
          <a class="navbar-brand d-flex align-items-center gap-2 me-auto ps-3 text-white" href="index.html" style="white-space: nowrap;">
            <img src="img/sai.png" alt="Saishnaa Logo" style="height: 40px; width: auto; animation: float 4s ease-in-out infinite;" />
            <span class="fw-bold fs-5 text-white" style="font-family: Outfit, sans-serif;">Saishnaa</span>
          </a>

          <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="outline: none; box-shadow: none;">
            <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item">
                <a href="index.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">About</a>
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Services</a>
              </li>
              <li class="nav-item">
                <a href="courses.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Courses</a>
              </li>
              <li class="nav-item">
                <a href="projects.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Projects</a>
              </li>
              <li class="nav-item">
                <a href="journals.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Journals</a>
              </li>
              <li class="nav-item">
                <a href="pricing.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="careers.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Careers</a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link text-white" style="margin: 0 8px; padding: 8px 12px; transition: all 0.3s;">Contact</a>
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
        link.classList.add("activefw", "fw-bold", "border-bottom", "border-2");
      }
    });

    // Handle scroll for navbar styling
    window.addEventListener("scroll", () => {
      const navbar = navbarPlaceholder.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("navbar-blur");
          navbar.style.backgroundColor = "rgba(77, 30, 163, 0.95)";
          navbar.style.padding = "8px 0";
        } else {
          navbar.classList.remove("navbar-blur");
          navbar.style.backgroundColor = "var(--main-color)";
          navbar.style.padding = "15px 0";
        }
      }
    });
  }

  // Inject Footer if placeholder exists
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer class="footer" style="background: linear-gradient(135deg, var(--main-color) 0%, var(--secondary-color) 100%); color: white; padding: 70px 0 30px; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 6px; background: linear-gradient(90deg, var(--accent-color), var(--success-color), var(--accent-color));"></div>
        <div class="container">
          <div class="row g-4">
            
            <div class="col-lg-4 mb-4 mb-lg-0 text-start">
              <h4 class="fw-bold mb-4" style="font-family: Outfit, sans-serif;">Saishnaa IT Solutions</h4>
              <p class="opacity-75" style="font-size: 0.95rem; lineHeight: 1.7;">
                Innovative technology solutions tailored to your business needs. Let's build the future together.
              </p>
              <div class="d-flex gap-3 mt-4">
                <a href="https://www.facebook.com/profile.php?id=61577296040956" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center justify-content-center text-white social-link-icon" style="width: 42px; height: 42px; borderRadius: 50%; background: rgba(255,255,255,0.1); transition: all 0.3s;">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/saishnaa83696" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center justify-content-center text-white social-link-icon" style="width: 42px; height: 42px; borderRadius: 50%; background: rgba(255,255,255,0.1); transition: all 0.3s;">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/saishnaa-software-solutions-erode-978b08342/" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center justify-content-center text-white social-link-icon" style="width: 42px; height: 42px; borderRadius: 50%; background: rgba(255,255,255,0.1); transition: all 0.3s;">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/saishnaa_software/" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center justify-content-center text-white social-link-icon" style="width: 42px; height: 42px; borderRadius: 50%; background: rgba(255,255,255,0.1); transition: all 0.3s;">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
              <h5 class="fw-bold mb-4 position-relative pb-2" style="font-family: Outfit, sans-serif;">
                Quick Links
                <span style="position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--warning-color); borderRadius: 2px;"></span>
              </h5>
              <ul class="list-unstyled opacity-75 d-flex flex-column gap-2" style="font-size: 0.95rem;">
                <li><a href="index.html" class="text-white nav-link-hover">About Us</a></li>
                <li><a href="services.html" class="text-white nav-link-hover">Services</a></li>
                <li><a href="courses.html" class="text-white nav-link-hover">Courses & Academy</a></li>
                <li><a href="projects.html" class="text-white nav-link-hover">Projects</a></li>
                <li><a href="journals.html" class="text-white nav-link-hover">Academic Journals</a></li>
                <li><a href="pricing.html" class="text-white nav-link-hover">Pricing</a></li>
                <li><a href="careers.html" class="text-white nav-link-hover">Careers</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
              <h5 class="fw-bold mb-4 position-relative pb-2" style="font-family: Outfit, sans-serif;">
                Contact Us
                <span style="position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--warning-color); borderRadius: 2px;"></span>
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
                <span style="position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--warning-color); borderRadius: 2px;"></span>
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
              <p class="mb-0">&copy; ${new Date().getFullYear()} Saishnaa IT Solutions. All rights reserved.</p>
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

    // Add CSS hover classes logic for footer social icons
    const socialIcons = footerPlaceholder.querySelectorAll(".social-link-icon");
    socialIcons.forEach(icon => {
      icon.addEventListener("mouseenter", () => {
        icon.style.background = "var(--accent-color)";
      });
      icon.addEventListener("mouseleave", () => {
        icon.style.background = "rgba(255,255,255,0.1)";
      });
    });
  }
});
