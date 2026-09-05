import "./FutureTalentp.css";

function FutureTalentp() {
  return (
    <section id="internships" className="future-talent">

      {/* Background decoration */}
      <div className="talent-orb talent-orb-one"></div>
      <div className="talent-orb talent-orb-two"></div>

      <div className="talent-container">

        {/* Top label */}
        <div className="talent-top">

          <div className="talent-label">
            <span className="talent-line"></span>
            <span>FUTURE TALENT</span>
          </div>

          <span className="talent-number">03</span>

        </div>


        {/* Main Content */}
        <div className="talent-main">

          {/* Left */}
          <div className="talent-heading">

            <p className="talent-eyebrow">
              LEARN. BUILD. GROW.
            </p>

            <h2>
              Your journey
              <br />
              <span>starts here.</span>
            </h2>

          </div>


          {/* Right */}
          <div className="talent-content">

            <p>
              We believe the future of technology is built by
              curious minds. Nathay Technologies provides
              practical internship opportunities that help
              students turn knowledge into real-world experience.
            </p>

            <p>
              Work on meaningful projects, learn from real
              development environments and take your first
              step towards a career in technology and digital
              innovation.
            </p>

            <a
              href="/internships"
              className="talent-button"
            >
              Explore Internships
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* Bottom Areas */}
        <div className="talent-bottom">

          <div className="talent-feature">
            <span>01</span>
            <div>
              <strong>Real Projects</strong>
              <p>Build practical experience.</p>
            </div>
          </div>

          <div className="talent-feature">
            <span>02</span>
            <div>
              <strong>Learn & Grow</strong>
              <p>Develop skills that matter.</p>
            </div>
          </div>

          <div className="talent-feature">
            <span>03</span>
            <div>
              <strong>Career Ready</strong>
              <p>Prepare for what's next.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FutureTalentp;