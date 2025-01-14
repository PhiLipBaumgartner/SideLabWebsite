import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./App.css"; // Importiere den alten CSS-Code

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkklqqg"); // Deine Formspree-ID
  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll get back to you soon.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-section-form">
      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="form-input"
        placeholder="Enter your email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="form-label">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        className="form-textarea"
        placeholder="Write your message here..."
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting} className="form-button">
        Submit
      </button>
    </form>
  );
}

function App() {
  const [showContact, setShowContact] = useState(false);
  const teamImageRef = useRef(null);

  const toggleContactForm = () => {
    setShowContact(!showContact);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-reveal");
      scrollElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight * 0.75) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Oberer Bereich */}
      <div className="container">
        <div className="left-section">
          <nav className="navbar">
            <ul className="nav-links">
              <li
                onClick={() =>
                  document.querySelector(".container").scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </li>
              <li
                onClick={() =>
                  document.querySelector(".team-section").scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </li>
              <li
                onClick={() =>
                  document.querySelector(".demo-section").scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </li>
              <li
                onClick={() => {
                  if (!showContact) {
                    setShowContact(true);
                  }
                  setTimeout(() => {
                    document.querySelector(".contact-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 0);
                }}
              >
                Contact
              </li>
            </ul>
            <img
  src="/SiteLabLogo.png"
  alt="SiteLab Logo"
  style={{
    position: "absolute", // Position relativ zur Navbar
    top: "20px",          // Abstand von oben innerhalb der Navbar
    right: "-600px",        // Abstand von rechts innerhalb der Navbar
    width: "100px",       // Breite des Logos
    height: "auto",       // Höhe automatisch basierend auf Breite
    zIndex: 10,           // Sicherstellen, dass es über anderen Elementen liegt
  }}
/>

          </nav>
          <div className="text-content">
            <h1>
              We create <br />
              appealing websites
            </h1>
          </div>
        </div>

        <div className="right-section">
          <div className="image-container">
            <img
              src="https://via.placeholder.com/700x400"
              alt="Laptop placeholder"
              className="image-laptop scroll-reveal"
            />
            <img
              src="https://via.placeholder.com/400x500"
              alt="Tablet placeholder"
              className="image-tablet scroll-reveal"
            />
            <img
              src="https://via.placeholder.com/200x400"
              alt="Phone placeholder"
              className="image-phone scroll-reveal"
            />
          </div>
        </div>
      </div>

      {/* Team-Sektion */}
      <div className="team-section">
        <div className="team-content">
          <img
            src="/group2.jpg"
            alt="Team"
            className="team-image scroll-reveal"
            ref={teamImageRef}
          />
          <div className="team-text scroll-reveal" style={{ marginLeft: "-90px" }}>
            <p>We are:</p>
            <h2>
              DRIVEN<br />
              DEDICATED<br />
              PASSIONATE
            </h2>
          </div>
        </div>
      </div>

      {/* Demo-Sektion */}
      <div className="demo-section">
        <div className="demo-left scroll-reveal">
          <h2>Website Demo</h2>
          <p>
            <a href="#" style={{ textDecoration: "underline", color: "blue" }}>
              Website should be accessible from here
            </a>
          </p>
        </div>
        <div className="demo-right scroll-reveal">
          <h1>A-TEAM</h1>
          <p>
            With our first project, we were able to put our
            <br />
            footstep into the market and deliver a qualitative product.
          </p>
          <div className="testimonial">
            <div className="portrait">Portrait</div>
            <p>Testimonial Opinion</p>
          </div>
        </div>
      </div>

      {/* Kontakt-Sektion */}
      {showContact && (
        <div className="contact-section">
          <ContactForm />
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>
          Visit our{" "}
          <a
            href="https://employeeapp-314.peopleos.haufe.io/marketplace/explore/project-opportunity/de80a30b-dfcd-4af8-a931-13d92578bbba"
          >
            Marketplace
          </a>{" "}
          for more projects and resources.
        </p>
        <button onClick={toggleContactForm}>Contact Us</button>
      </footer>
    </div>
  );
}

export default App;
