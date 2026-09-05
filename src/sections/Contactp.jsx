import "./Contactp.css";

function Contactp() {
  return (
    <section id="contact" className="contact-preview">

      <div className="contact-glow"></div>

      <div className="contact-container">

        {/* Top Label */}
        <div className="contact-top">

          <div className="contact-label">
            <span className="contact-line"></span>
            <span>LET'S CONNECT</span>
          </div>

          <span className="contact-number">
            04
          </span>

        </div>


        {/* Main Content */}
        <div className="contact-main">

          <div className="contact-heading">

            <p>Have an idea?</p>

            <h2>
              Let's build
              <br />
              <span>what's next.</span>
            </h2>

          </div>


          <div className="contact-content">

            <p>
              Whether you're looking to build a digital
              product, grow your business online or explore
              technology opportunities, we'd love to hear
              from you.
            </p>

            <a
              href="/contact"
              className="contact-button"
            >
              Start a conversation
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* Bottom Contact Info */}
        <div className="contact-bottom">

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:hello@nathaytechnologies.com">
              hello@nathaytechnologies.com
            </a>
          </div>

          <div className="contact-item">
            <span>Let's talk</span>
            <a href="/contact">
              Contact Nathay
              <strong>↗</strong>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contactp;