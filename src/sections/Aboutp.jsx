import "./Aboutp.css";

function Aboutp() {
  return (
    <section id="about" className="about-preview">

      <div className="about-top">

        <div className="about-label">
          <span className="about-label-line"></span>
          <span>ABOUT NATHAY</span>
        </div>

        <div className="about-intro">
          <span>01</span>
          <p>Who we are</p>
        </div>

      </div>


      <div className="about-main">

        {/* LEFT CONTENT */}
        <div className="about-left">

          <h2>
            We create
            <br />
            <span>technology</span>
            <br />
            that matters.
          </h2>

          <div className="about-description">

            <p>
              Nathay Technologies is a technology and digital
              solutions company focused on creating meaningful
              digital experiences for modern businesses.
            </p>

            <a href="/about" className="about-explore">
              <span>Discover who we are</span>
              <strong>↗</strong>
            </a>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="about-visual">

          <div className="visual-glow"></div>

          <div className="visual-grid"></div>

          <div className="visual-content">

            <span className="visual-number">N</span>

            <div className="visual-text">
              <span>Technology</span>
              <span>Digital</span>
              <span>Growth</span>
            </div>

          </div>

          <div className="visual-corner top-left"></div>
          <div className="visual-corner bottom-right"></div>

        </div>

      </div>


      {/* CAPABILITIES */}
      <div className="about-capabilities">

        <div className="capability">

          <span>01</span>

          <div>
            <h3>Technology</h3>
            <p>
              Building modern applications and scalable
              digital solutions.
            </p>
          </div>

          <strong>↗</strong>

        </div>


        <div className="capability">

          <span>02</span>

          <div>
            <h3>Digital Growth</h3>
            <p>
              Helping brands grow through digital strategy,
              marketing and innovation.
            </p>
          </div>

          <strong>↗</strong>

        </div>


        <div className="capability">

          <span>03</span>

          <div>
            <h3>Future Talent</h3>
            <p>
              Creating practical learning and internship
              opportunities for aspiring professionals.
            </p>
          </div>

          <strong>↗</strong>

        </div>

      </div>

    </section>
  );
}

export default Aboutp;