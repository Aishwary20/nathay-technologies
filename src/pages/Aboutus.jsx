import { useState } from "react";
import Navbar from "../components/Navbar";

import "./Aboutus.css";

function Aboutus() {
  const [showInternships, setShowInternships] = useState(false);

  return (
    <div className="aboutus-page">
      <Navbar />

      <main>

        {/* =====================================================
            ABOUT HERO
        ===================================================== */}

        <section className="aboutus-hero">

          <div className="aboutus-hero-glow"></div>

          <div className="aboutus-hero-grid"></div>

          <div className="aboutus-hero-content">

            <div className="aboutus-eyebrow">
              <span className="aboutus-eyebrow-line"></span>

              <span>ABOUT NATHAY</span>
            </div>

            <h1>
              Technology.
              <br />

              <span>Ideas.</span>
              <br />

              People.
            </h1>

            <p>
              We bring technology, creativity and opportunity
              together to build meaningful digital experiences
              for businesses and future professionals.
            </p>

          </div>

          <div className="aboutus-hero-bottom">

            <span>01</span>

            <span className="aboutus-bottom-line"></span>

            <span>WHO WE ARE</span>

          </div>

        </section>


        {/* =====================================================
            WHO WE ARE
        ===================================================== */}

        <section className="aboutus-who">

          <div className="aboutus-who-top">

            <div className="aboutus-section-label">
              <span></span>
              WHO WE ARE
            </div>

            <span className="aboutus-section-number">
              02
            </span>

          </div>


          <div className="aboutus-who-main">

            {/* LEFT */}

            <div className="aboutus-who-heading">

              <p>MORE THAN TECHNOLOGY</p>

              <h2>
                We turn
                <br />

                <span>ideas</span>

                into
                <br />

                impact.
              </h2>

            </div>


            {/* RIGHT */}

            <div className="aboutus-who-content">

              <p className="who-intro">
                Nathay Technologies is a technology and digital
                solutions company focused on helping businesses
                move forward in a digital-first world.
              </p>

              <p>
                We combine technology, creativity and business
                understanding to create digital experiences,
                applications and solutions designed around
                real-world needs.
              </p>

              <p>
                Alongside our technology services, we are also
                committed to helping students and aspiring
                professionals gain practical industry exposure
                through structured internship opportunities.
              </p>


              {/* INTERNSHIP CTA */}

              <button
                className="internship-explore-btn"
                onClick={() => setShowInternships(!showInternships)}
              >

                <span className="internship-btn-icon">
                  ✦
                </span>

                <span className="internship-btn-text">

                  <small>
                    FOR STUDENTS
                  </small>

                  <strong>
                    Explore Internship Program
                  </strong>

                </span>

                <span className="internship-btn-arrow">
                  {showInternships ? "↙" : "↗"}
                </span>

              </button>

            </div>

          </div>


          {/* =====================================================
              INTERNSHIP PROGRAM PANEL
          ===================================================== */}

          <div
            className={`internship-panel ${
              showInternships ? "show" : ""
            }`}
          >

            {/* PANEL HEADER */}

            <div className="internship-panel-header">

              <div>

                <span className="internship-label">
                  NATHAY FUTURE TALENT
                </span>

                <h2>
                  Build skills.
                  <br />
                  <span>Build your future.</span>
                </h2>

                <p>
                  Our internship program is designed to give
                  students practical exposure, project experience
                  and industry-oriented learning.
                </p>

              </div>

              <button
                className="internship-close"
                onClick={() => setShowInternships(false)}
                aria-label="Close internship program"
              >
                ×
              </button>

            </div>


            {/* PROGRAM STATS */}

            <div className="internship-stats">

              <div className="internship-stat">

                <span>01</span>

                <strong>
                  Multiple Domains
                </strong>

                <p>
                  Choose a domain based on your career interest.
                </p>

              </div>


              <div className="internship-stat">

                <span>02</span>

                <strong>
                  Flexible Duration
                </strong>

                <p>
                  Internship programs available across different
                  durations.
                </p>

              </div>


              <div className="internship-stat">

                <span>03</span>

                <strong>
                  Practical Learning
                </strong>

                <p>
                  Work on practical tasks and project-based learning.
                </p>

              </div>


              <div className="internship-stat">

                <span>04</span>

                <strong>
                  Career Ready
                </strong>

                <p>
                  Build experience that strengthens your profile.
                </p>

              </div>

            </div>


            {/* DOMAINS */}

            <div className="internship-section-heading">

              <span>
                INTERNSHIP DOMAINS
              </span>

              <h3>
                Find your area
                <br />
                of interest.
              </h3>

            </div>


            <div className="internship-domains">


              {/* WEB DEVELOPMENT */}

              <div className="internship-domain-card">

                <div className="domain-card-top">

                  <span className="domain-number">
                    01
                  </span>

                  <span className="domain-icon">
                    {"</>"}
                  </span>

                </div>

                <h4>
                  Web Development
                </h4>

                <p>
                  Learn to build modern and responsive web
                  applications using industry-relevant
                  technologies.
                </p>

                <div className="domain-tags">

                  <span>
                    HTML
                  </span>

                  <span>
                    CSS
                  </span>

                  <span>
                    JavaScript
                  </span>

                  <span>
                    React
                  </span>

                </div>

                <div className="domain-duration">
                  <span>Duration</span>
                  <strong>2 / 3 / 6 Months</strong>
                </div>

              </div>


              {/* DATA SCIENCE */}

              <div className="internship-domain-card">

                <div className="domain-card-top">

                  <span className="domain-number">
                    02
                  </span>

                  <span className="domain-icon">
                    ◈
                  </span>

                </div>

                <h4>
                  Data Science & AI
                </h4>

                <p>
                  Explore data analysis, machine learning and
                  AI concepts through practical projects and
                  real-world datasets.
                </p>

                <div className="domain-tags">

                  <span>
                    Python
                  </span>

                  <span>
                    Pandas
                  </span>

                  <span>
                    Machine Learning
                  </span>

                  <span>
                    AI
                  </span>

                </div>

                <div className="domain-duration">
                  <span>Duration</span>
                  <strong>2 / 3 / 6 Months</strong>
                </div>

              </div>


              {/* DIGITAL MARKETING */}

              <div className="internship-domain-card">

                <div className="domain-card-top">

                  <span className="domain-number">
                    03
                  </span>

                  <span className="domain-icon">
                    ◎
                  </span>

                </div>

                <h4>
                  Digital Marketing
                </h4>

                <p>
                  Understand digital marketing strategies,
                  social media, SEO, content and online brand
                  growth.
                </p>

                <div className="domain-tags">

                  <span>
                    SEO
                  </span>

                  <span>
                    Social Media
                  </span>

                  <span>
                    Content
                  </span>

                  <span>
                    Analytics
                  </span>

                </div>

                <div className="domain-duration">
                  <span>Duration</span>
                  <strong>2 / 3 / 6 Months</strong>
                </div>

              </div>


              {/* BUSINESS / SOFTWARE */}

              <div className="internship-domain-card">

                <div className="domain-card-top">

                  <span className="domain-number">
                    04
                  </span>

                  <span className="domain-icon">
                    +
                  </span>

                </div>

                <h4>
                  Software & Business Solutions
                </h4>

                <p>
                  Gain exposure to software development,
                  business solutions, problem solving and
                  technology-driven projects.
                </p>

                <div className="domain-tags">

                  <span>
                    Software
                  </span>

                  <span>
                    APIs
                  </span>

                  <span>
                    Databases
                  </span>

                  <span>
                    Solutions
                  </span>

                </div>

                <div className="domain-duration">
                  <span>Duration</span>
                  <strong>2 / 3 / 6 Months</strong>
                </div>

              </div>

            </div>


            {/* =================================================
                WHAT STUDENTS GET
            ================================================= */}

            <div className="internship-benefits">

              <div className="benefits-heading">

                <span>
                  WHAT YOU GET
                </span>

                <h3>
                  More than just
                  <br />
                  an internship.
                </h3>

              </div>


              <div className="benefits-list">

                <div className="benefit-item">

                  <span>
                    01
                  </span>

                  <div>

                    <h4>
                      Internship Completion Certificate
                    </h4>

                    <p>
                      Receive a certificate upon successful
                      completion of the internship program.
                    </p>

                  </div>

                </div>


                <div className="benefit-item">

                  <span>
                    02
                  </span>

                  <div>

                    <h4>
                      Project Certificate
                    </h4>

                    <p>
                      Get recognition for successfully completing
                      assigned practical projects.
                    </p>

                  </div>

                </div>


                <div className="benefit-item">

                  <span>
                    03
                  </span>

                  <div>

                    <h4>
                      Practical Project Experience
                    </h4>

                    <p>
                      Work on structured tasks and projects that
                      help you understand real development workflows.
                    </p>

                  </div>

                </div>


                <div className="benefit-item">

                  <span>
                    04
                  </span>

                  <div>

                    <h4>
                      Industry-Oriented Learning
                    </h4>

                    <p>
                      Learn tools, technologies and professional
                      practices used in real-world environments.
                    </p>

                  </div>

                </div>


                <div className="benefit-item">

                  <span>
                    05
                  </span>

                  <div>

                    <h4>
                      Portfolio & Resume Value
                    </h4>

                    <p>
                      Build practical work that can strengthen
                      your portfolio and professional profile.
                    </p>

                  </div>

                </div>


                <div className="benefit-item">

                  <span>
                    06
                  </span>

                  <div>

                    <h4>
                      Career Development
                    </h4>

                    <p>
                      Develop technical, communication and
                      professional skills for your career journey.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* INTERNSHIP CTA */}

            <div className="internship-final-cta">

              <div>

                <span>
                  READY TO START?
                </span>

                <h3>
                  Turn your learning
                  <br />
                  into <em>experience.</em>
                </h3>

              </div>

              <a
                href="/contact"
                className="internship-apply-btn"
              >
                Apply for Internship
                <span>↗</span>
              </a>

            </div>

          </div>


          {/* =====================================================
              VISUAL STATEMENT
          ===================================================== */}

          <div className="aboutus-who-visual">

            <div className="who-visual-number">
              N
            </div>

            <div className="who-visual-content">

              <span>
                TECHNOLOGY
              </span>

              <span>
                CREATIVITY
              </span>

              <span>
                OPPORTUNITY
              </span>

            </div>

            <div className="who-visual-corner corner-one"></div>

            <div className="who-visual-corner corner-two"></div>

          </div>


          {/* =====================================================
              BOTTOM PILLARS
          ===================================================== */}

          <div className="who-pillars">

            <div className="who-pillar">

              <span>
                01
              </span>

              <div>

                <h3>
                  Build
                </h3>

                <p>
                  Creating digital products and technology
                  solutions with purpose.
                </p>

              </div>

            </div>


            <div className="who-pillar">

              <span>
                02
              </span>

              <div>

                <h3>
                  Grow
                </h3>

                <p>
                  Helping businesses strengthen their digital
                  presence and reach.
                </p>

              </div>

            </div>


            <div className="who-pillar">

              <span>
                03
              </span>

              <div>

                <h3>
                  Empower
                </h3>

                <p>
                  Giving future professionals opportunities
                  to learn, build and grow.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OUR BELIEF
        ===================================================== */}

        <section className="aboutus-belief">

          <div className="belief-number">
            03
          </div>

          <div className="belief-content">

            <span>
              OUR BELIEF
            </span>

            <h2>
              Ideas become
              <br />

              <em>possibilities</em>

              <br />

              through technology.
            </h2>

          </div>

        </section>


        {/* =====================================================
            MISSION / VISION
        ===================================================== */}

        <section className="aboutus-mission">

          <div className="mission-heading">

            <div className="aboutus-section-label">

              <span></span>

              WHAT DRIVES US

            </div>

            <h2>

              Purpose behind
              <br />

              <span>
                our work.
              </span>

            </h2>

          </div>


          <div className="mission-cards">

            <div className="mission-card">

              <span>
                04 / MISSION
              </span>

              <h3>
                Creating technology with purpose.
              </h3>

              <p>
                Our mission is to create reliable, innovative
                and accessible digital solutions that solve
                real problems and help businesses grow.
              </p>

            </div>


            <div className="mission-card">

              <span>
                05 / VISION
              </span>

              <h3>
                Building a future powered by people.
              </h3>

              <p>
                We envision a digital ecosystem where
                technology, creativity and skilled people
                come together to create lasting impact.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            OUR APPROACH
        ===================================================== */}

        <section className="aboutus-approach">

          <div className="approach-top">

            <div className="aboutus-section-label">

              <span></span>

              OUR APPROACH

            </div>

            <span>
              06
            </span>

          </div>


          <div className="approach-heading">

            <h2>

              Think.
              <span>
                Create.
              </span>

              <br />

              Transform.

            </h2>

          </div>


          <div className="approach-list">

            <div className="approach-item">

              <span>
                01
              </span>

              <div>

                <h3>
                  Understand
                </h3>

                <p>
                  We begin by understanding the problem,
                  the people and the business behind every idea.
                </p>

              </div>

            </div>


            <div className="approach-item">

              <span>
                02
              </span>

              <div>

                <h3>
                  Create
                </h3>

                <p>
                  We combine technology, design and creativity
                  to turn ideas into meaningful solutions.
                </p>

              </div>

            </div>


            <div className="approach-item">

              <span>
                03
              </span>

              <div>

                <h3>
                  Transform
                </h3>

                <p>
                  We focus on creating solutions that deliver
                  measurable and lasting value.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="aboutus-cta">

          <div className="aboutus-cta-content">

            <span>
              THE NEXT CHAPTER
            </span>

            <h2>

              Let's create
              <br />

              <span>
                something meaningful.
              </span>

            </h2>

            <a href="/contact">

              Start a conversation

              <strong>
                ↗
              </strong>

            </a>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Aboutus;