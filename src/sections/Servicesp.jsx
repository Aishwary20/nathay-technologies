import { useState } from "react";
import "./Servicesp.css";

const services = [
  {
    number: "01",
    category: "TECHNOLOGY",
    title: "Application",
    highlight: "Development",
    description:
      "We design and develop modern web and mobile applications that solve real business problems and create better digital experiences.",
    tags: ["Web Applications", "Mobile Apps", "Custom Software"],
  },
  {
    number: "02",
    category: "DIGITAL",
    title: "Digital",
    highlight: "Marketing",
    description:
      "We help businesses build visibility, connect with their audience and grow through strategic digital marketing solutions.",
    tags: ["SEO", "Social Media", "Performance Marketing"],
  },
  {
    number: "03",
    category: "SOLUTIONS",
    title: "Business",
    highlight: "Solutions",
    description:
      "We combine technology, strategy and creativity to create digital solutions that support business growth and transformation.",
    tags: ["Automation", "APIs", "Digital Solutions"],
  },
];

function Servicesp() {
  const [activeService, setActiveService] = useState(0);

  const service = services[activeService];

  return (
    <section id="services" className="services-preview">

      {/* ================= TOP ================= */}

      <div className="services-top">

        <div className="services-label">
          <span className="services-label-line"></span>
          <span>WHAT WE DO</span>
        </div>

        <div className="services-intro">
          <span>02</span>
          <p>Our capabilities</p>
        </div>

      </div>


      {/* ================= MAIN ================= */}

      <div className="services-main">

        {/* LEFT LIST */}

        <div className="services-list">

          {services.map((item, index) => (

            <button
              key={item.number}
              className={`service-item ${
                activeService === index ? "active" : ""
              }`}
              onClick={() => setActiveService(index)}
            >

              <span className="service-number">
                {item.number}
              </span>

              <span className="service-name">
                {item.title}
                <br />
                <strong>{item.highlight}</strong>
              </span>

              <span className="service-arrow">
                ↗
              </span>

            </button>

          ))}

        </div>


        {/* RIGHT CONTENT */}

        <div className="service-detail">

          <div
            key={activeService}
            className="service-detail-inner"
          >

            <span className="service-category">
              {service.category}
            </span>

            <h2>
              {service.title}
              <br />
              <span>{service.highlight}</span>
            </h2>

            <p>
              {service.description}
            </p>


            {/* Tags */}

            <div className="service-tags">

              {service.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>


            <a
              href="/services"
              className="services-explore"
            >
              Explore all services
              <span>↗</span>
            </a>

          </div>


          {/* Decorative Number */}

          <div className="service-background-number">
            {service.number}
          </div>

        </div>

      </div>


      {/* ================= BOTTOM STATEMENT ================= */}

      <div className="services-statement">

        <p>
          Technology is not just what we build.
        </p>

        <h3>
          It is how we help businesses
          <span> move forward.</span>
        </h3>

      </div>

    </section>
  );
}

export default Servicesp;