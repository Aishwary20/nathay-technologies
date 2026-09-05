import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/nathay-logo.png";

import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     NAVBAR SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar-wrapper ${
        scrolled ? "scrolled" : ""
      }`}
    >

      <nav
        className="navbar"
        aria-label="Main navigation"
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Nathay Technologies Home"
        >
          <img
            src={logo}
            alt="Nathay Technologies"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="navbar-links">

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact Us
          </Link>

        </div>


        {/* =================================================
            DESKTOP LET'S TALK → WHATSAPP
        ================================================= */}

        <a
          href="https://wa.me/917385346634"
          className="navbar-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Talk
          <span>↗</span>
        </a>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
        >
          About Us
        </Link>

        <Link
          to="/services"
          onClick={closeMenu}
        >
          Services
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact Us
        </Link>


        {/* MOBILE LET'S TALK → WHATSAPP */}

        <a
          href="https://wa.me/917385346634"
          className="mobile-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Let's Talk
          <span>↗</span>
        </a>

      </div>

    </header>
  );
}

export default Navbar;