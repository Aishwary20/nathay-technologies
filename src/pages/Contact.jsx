import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend will be connected here later
    console.log("Contact Form:", formData);
  };

  return (
    <div className="contact-page">

      <Navbar />

      <main>

        {/* =====================================================
            CONTACT HERO
        ===================================================== */}

        <section className="contact-hero">

          <div className="contact-hero-grid"></div>

          <div className="contact-hero-glow"></div>

          <div className="contact-hero-content">

            <div className="contact-eyebrow">
              <span></span>
              LET'S TALK
            </div>

            <h1>
              Let's build
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h1>

            <p>
              Have an idea, a project or a business challenge?
              Tell us what you're working on and let's explore
              how technology can help.
            </p>

          </div>

          <div className="contact-hero-bottom">

            <span>01</span>

            <div></div>

            <span>CONTACT NATHAY</span>

          </div>

        </section>


        {/* =====================================================
            CONTACT MAIN
        ===================================================== */}

        <section className="contact-main">

          {/* LEFT SIDE */}

          <div className="contact-information">

            <div className="contact-section-label">
              <span></span>
              GET IN TOUCH
            </div>

            <h2>
              Start a
              <br />
              <span>conversation.</span>
            </h2>

            <p className="contact-intro">
              Whether you are looking to build a digital product,
              grow your business online or discuss a new idea,
              we would love to hear from you.
            </p>


            <div className="contact-details">

              {/* CONTACT PERSON */}

              <div className="contact-detail">

                <span className="detail-number">
                  01
                </span>

                <div>
                  <small>CONTACT PERSON</small>
                  <h3>Vishal Thorat</h3>
                </div>

              </div>


              {/* PHONE */}

              <div className="contact-detail">

                <span className="detail-number">
                  02
                </span>

                <div>
                  <small>PHONE</small>

                  <a href="tel:+917385346634">
                    +91 73853 46634
                  </a>
                </div>

              </div>


              {/* EMAIL */}

              <div className="contact-detail">

                <span className="detail-number">
                  03
                </span>

                <div>
                  <small>EMAIL</small>

                  <a href="mailto:nathaytechnologies@gmail.com">
                    nathaytechnologies@gmail.com
                  </a>
                </div>

              </div>


              {/* ADDRESS */}

              <div className="contact-detail">

                <span className="detail-number">
                  04
                </span>

                <div>
                  <small>ADDRESS</small>

                  <p>
                    Near MIT College,
                    <br />
                    Chhatrapati Sambhajinagar
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE — FORM */}

          <div className="contact-form-wrapper">

            <div className="form-heading">

              <span>YOUR PROJECT</span>

              <h3>
                Tell us about
                <br />
                <strong>your idea.</strong>
              </h3>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-field">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="phone">
                  PHONE NUMBER
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              <div className="form-field">

                <label htmlFor="message">
                  TELL US ABOUT YOUR PROJECT
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us a little about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                <span>Send Message</span>
                <strong>↗</strong>
              </button>

            </form>

          </div>

        </section>


        {/* =====================================================
            QUICK CONTACT STRIP
        ===================================================== */}

        <section className="contact-strip">

          <div className="contact-strip-item">

            <span>CALL US</span>

            <a href="tel:+917385346634">
              +91 73853 46634
            </a>

          </div>


          <div className="contact-strip-line"></div>


          <div className="contact-strip-item">

            <span>EMAIL US</span>

            <a href="mailto:nathaytechnologies@gmail.com">
              nathaytechnologies@gmail.com
            </a>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-final">

          <div className="contact-final-circle"></div>

          <div className="contact-final-content">

            <span>READY WHEN YOU ARE</span>

            <h2>
              Have an idea?
              <br />
              <em>Let's make it real.</em>
            </h2>

            <a href="mailto:nathaytechnologies@gmail.com">
              Email Nathay
              <strong>↗</strong>
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Contact;