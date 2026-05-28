import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-blur" : ""}`}
      style={{
        backgroundColor: scrolled
          ? "rgba(77, 30, 163, 0.95)"
          : "var(--main-color)",
        transition: "all 0.4s ease",
        boxShadow: "0 4px 18px rgba(0,0,0,0.1)",
        padding: scrolled ? "8px 0" : "15px 0",
        zIndex: 1100,
      }}
    >
      <div className="container-fluid px-md-4">
        <Link
          className="navbar-brand d-flex align-items-center gap-2 me-auto ps-3 text-white"
          to="/"
          style={{ whiteSpace: "nowrap" }}
          onClick={closeMenu}
        >
          <img
            src="/img/sai.png"
            alt="Saishnaa Logo"
            style={{
              height: "40px",
              width: "auto",
              animation: "float 4s ease-in-out infinite",
            }}
          />
          <span
            className="fw-bold fs-5 text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Saishnaa
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{ outline: "none", boxShadow: "none" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/journals"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Journals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "activefw fw-bold border-bottom border-2" : ""}`
                }
                style={{
                  margin: "0 8px",
                  padding: "8px 12px",
                  transition: "all 0.3s",
                }}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
