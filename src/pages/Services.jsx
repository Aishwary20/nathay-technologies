import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./Services.css";

function Services() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    serviceRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const addServiceRef = (element) => {
    if (element && !serviceRefs.current.includes(element)) {
      serviceRefs.current.push(element);
    }
  };

  const services = [
    {
      number: "01",
      category: "DIGITAL PRODUCTS",
      title: "Website Development",
      short:
        "High-performance websites designed to create a strong digital presence and meaningful user experiences.",
      tags: ["React", "Responsive", "E-Commerce"],
    },
    {
      number: "02",
      category: "MOBILE EXPERIENCES",
      title: "Mobile App Development",
      short:
        "Modern mobile applications built around usability, performance and the needs of your customers.",
      tags: ["Flutter", "Android", "iOS"],
    },
    {
      number: "03",
      category: "BUSINESS TECHNOLOGY",
      title: "Custom Software Solutions",
      short:
        "Purpose-built software that simplifies operations, improves productivity and supports business growth.",
      tags: ["ERP", "CRM", "Automation"],
    },
    {
      number: "04",
      category: "DIGITAL GROWTH",
      title: "Digital Marketing",
      short:
        "Digital strategies that help brands become more visible, connect with the right audience and grow online.",
      tags: ["SEO", "Social Media", "Ads"],
    },
  ];

  return (
    <div className="services-page">
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="services-new-hero">

          <div className="hero-grid-pattern"></div>
          <div className="hero-purple-glow"></div>

          <div className="services-hero-inner">

            <div className="services-hero-left">

              <div className="new-eyebrow">
                <span></span>
                WHAT WE DO
              </div>

              <h1>
                Technology
                <br />
                built around
                <br />
                <span>your business.</span>
              </h1>

              <p>
                We combine technology, design and business thinking
                to create digital solutions that move organizations
                forward.
              </p>

              <div className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <div className="scroll-line"></div>
              </div>

            </div>

            <div className="services-hero-right">

              <div className="hero-big-number">
                04
              </div>

              <div className="hero-number-label">
                CORE SERVICES
              </div>

              <div className="hero-orbit"></div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="services-new-intro">

          <div className="intro-index">
            <span>01</span>
            <div></div>
            <span>OUR CAPABILITIES</span>
          </div>

          <div className="intro-main">

            <h2>
              From first idea
              <br />
              to <span>real impact.</span>
            </h2>

            <div className="intro-copy">

              <p>
                Every business has different challenges.
                We build technology around those challenges —
                not the other way around.
              </p>

              <p>
                Explore the capabilities we bring together
                to create, launch and grow digital products.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES LIST
        ===================================================== */}

        <section className="services-new-list">

          <div className="services-list-header">

            <div className="section-mini-title">
              <span></span>
              WHAT WE BUILD
            </div>

            <p>04 SERVICES</p>

          </div>


          <div className="premium-services">

            {services.map((service, index) => (

              <article
                key={service.number}
                ref={addServiceRef}
                className={`premium-service-row ${
                  index % 2 === 0
                    ? "service-from-left"
                    : "service-from-right"
                }`}
              >

                <div className="service-row-number">
                  {service.number}
                </div>

                <div className="service-row-title">

                  <span>{service.category}</span>

                  <h3>
                    {service.title}
                  </h3>

                </div>

                <div className="service-row-description">

                  <p>
                    {service.short}
                  </p>

                  <div className="service-row-tags">

                    {service.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                <Link
                  to="/contact"
                  className="service-row-arrow"
                  aria-label={`Discuss ${service.title}`}
                >
                  ↗
                </Link>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            FEATURE STRIP
        ===================================================== */}

        <section className="service-feature-strip">

          <div className="feature-strip-number">
            02
          </div>

          <div className="feature-strip-content">

            <span>ONE PARTNER. MULTIPLE CAPABILITIES.</span>

            <h2>
              Everything you need
              <br />
              to <strong>build digital.</strong>
            </h2>

          </div>

          <div className="feature-strip-mark">
            N
          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="services-process-new">

          <div className="process-new-top">

            <div className="section-mini-title dark">
              <span></span>
              HOW WE WORK
            </div>

            <span className="process-number">
              03
            </span>

          </div>

          <div className="process-new-heading">

            <h2>
              Clear thinking.
              <br />
              <span>Better outcomes.</span>
            </h2>

            <p>
              A simple, transparent approach that keeps
              every project focused on its purpose.
            </p>

          </div>


          <div className="process-new-grid">

            <div className="process-new-item">
              <span>01</span>
              <div className="process-dot"></div>
              <h3>Discover</h3>
              <p>
                Understand the business, users and
                objectives before we start building.
              </p>
            </div>

            <div className="process-new-item">
              <span>02</span>
              <div className="process-dot"></div>
              <h3>Design</h3>
              <p>
                Shape the experience, structure and
                direction of the product.
              </p>
            </div>

            <div className="process-new-item">
              <span>03</span>
              <div className="process-dot"></div>
              <h3>Build</h3>
              <p>
                Develop reliable technology with
                performance and scalability in mind.
              </p>
            </div>

            <div className="process-new-item">
              <span>04</span>
              <div className="process-dot"></div>
              <h3>Grow</h3>
              <p>
                Improve, optimize and evolve the
                solution as your business grows.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            WHY NATHAY
        ===================================================== */}

        <section className="services-why-new">

          <div className="why-new-left">

            <div className="section-mini-title">
              <span></span>
              WHY NATHAY
            </div>

            <h2>
              Technology
              <br />
              should create
              <br />
              <span>real value.</span>
            </h2>

          </div>


          <div className="why-new-right">

            <div className="why-new-item">
              <span>01</span>
              <div>
                <h3>Business First</h3>
                <p>
                  We understand the problem before
                  choosing the technology.
                </p>
              </div>
            </div>

            <div className="why-new-item">
              <span>02</span>
              <div>
                <h3>Modern Technology</h3>
                <p>
                  We use practical and modern technologies
                  to build dependable solutions.
                </p>
              </div>
            </div>

            <div className="why-new-item">
              <span>03</span>
              <div>
                <h3>User Focused</h3>
                <p>
                  Every experience is designed around
                  the people who use it.
                </p>
              </div>
            </div>

            <div className="why-new-item">
              <span>04</span>
              <div>
                <h3>Long-Term Thinking</h3>
                <p>
                  We build relationships and products
                  that can evolve over time.
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="services-new-cta">

          <div className="cta-background-circle"></div>

          <div className="cta-new-content">

            <span>HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's build
              <br />
              <em>what's next.</em>
            </h2>

            <Link to="/contact">
              Start a conversation
              <strong>↗</strong>
            </Link>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Services;