import { useEffect, useState } from "react";

import "./Hero.css";

const heroSlides = [
  {
    number: "01",
    title: "We Build",
    highlight: "Digital Experiences.",
    description:
      "We create modern digital experiences that help businesses connect, engage and grow.",
  },

  {
    number: "02",
    title: "We Create",
    highlight: "Powerful Applications.",
    description:
      "From web to mobile, we build scalable applications designed around real business needs.",
  },

  {
    number: "03",
    title: "We Drive",
    highlight: "Digital Growth.",
    description:
      "Our technology and digital solutions help brands build visibility and create lasting impact.",
  },

  {
    number: "04",
    title: "We Empower",
    highlight: "Future Talent.",
    description:
      "Through practical internships and learning opportunities, we help students turn potential into experience.",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  /* =====================================================
     NAVIGATION FUNCTIONS
  ===================================================== */

  const goToServices = () => {
    window.location.href = "/services";
  };

  const goToAbout = () => {
    window.location.href = "/about";
  };

  return (
    <section id="home" className="hero">

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <video
        className="hero-video"
        src="/videos/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />


      {/* =====================================================
          CINEMATIC OVERLAY
      ===================================================== */}

      <div className="hero-overlay"></div>


      {/* =====================================================
          PURPLE AMBIENT GLOW
      ===================================================== */}

      <div className="hero-glow"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="hero-container">

        <div className="hero-content">

          {/* =================================================
              EYEBROW
          ================================================= */}

          <div className="hero-eyebrow">

            <span className="eyebrow-line"></span>

            <span>
              NATHAY TECHNOLOGIES
            </span>

          </div>


          {/* =================================================
              SLIDE CONTENT
          ================================================= */}

          <div
            className="hero-heading-wrapper"
            key={activeSlide}
          >

            <h1>

              {slide.title}

              <br />

              <span>
                {slide.highlight}
              </span>

            </h1>


            <p className="hero-description">
              {slide.description}
            </p>

          </div>


          {/* =================================================
              HERO ACTION BUTTONS
          ================================================= */}

          <div className="hero-actions">

            {/* ===============================
                EXPLORE SERVICES
            =============================== */}

            <a
              href="/services"
              className="hero-primary-btn"
              onClick={(e) => {
                e.preventDefault();
                goToServices();
              }}
            >
              <span>
                Explore Services
              </span>

              <span>
                ↗
              </span>
            </a>


            {/* ===============================
                DISCOVER NATHAY
            =============================== */}

            <a
              href="/about"
              className="hero-secondary-btn"
              onClick={(e) => {
                e.preventDefault();
                goToAbout();
              }}
            >
              Discover Nathay
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <div className="hero-bottom">

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <a
          href="#about"
          className="hero-scroll"
        >

          <span className="scroll-circle">
            ↓
          </span>

          <span>
            Scroll to explore
          </span>

        </a>


        {/* =================================================
            SLIDE COUNTER
        ================================================= */}

        <div className="hero-counter">

          <span className="counter-current">
            {slide.number}
          </span>

          <span className="counter-line"></span>

          <span className="counter-total">
            04
          </span>

        </div>

      </div>


      {/* =====================================================
          SLIDE PROGRESS
      ===================================================== */}

      <div className="hero-progress">

        {heroSlides.map((_, index) => (

          <button
            key={index}
            type="button"
            className={`progress-item ${
              index === activeSlide ? "active" : ""
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
          >
            <span></span>
          </button>

        ))}

      </div>

    </section>
  );
}

export default Hero;