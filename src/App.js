import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(false); // Zustand für die Kontaktanzeige
  const teamImageRef = useRef(null);

  const handleNavigation = (page) => {
    alert(`Navigating to: ${page}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");                   
  };

  useEffect(() => {
    const handleScroll = () => {
      const imagePosition = teamImageRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imagePosition < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Funktion, um die Sichtbarkeit des Kontaktformulars zu steuern
  const toggleContactForm = () => {
    setShowContact(!showContact);
  };

  return (
    <div>
      {/* Oberer Bereich */}
      <div className="container">
        <div className="left-section">
          <nav className="navbar">
            <span className="logo">Logo</span>
            <ul className="nav-links">
              <li onClick={() => document.querySelector('.container').scrollIntoView({ behavior: 'smooth' })}>Home</li>
              <li onClick={() => document.querySelector('.team-section').scrollIntoView({ behavior: 'smooth' })}>About</li>
              <li onClick={() => document.querySelector('.demo-section').scrollIntoView({ behavior: 'smooth' })}>Projects</li>
              <li onClick={() => document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' })}>Contact</li>
            </ul>
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
              className="image-laptop"
            />
            <img
              src="https://via.placeholder.com/400x500"
              alt="Tablet placeholder"
              className="image-tablet"
            />
            <img
              src="https://via.placeholder.com/200x400"
              alt="Phone placeholder"
              className="image-phone"
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
            className={`team-image ${isVisible ? "visible" : ""}`}
            ref={teamImageRef}
          />
          <div className="team-text" style={{ marginLeft: "-50px" }}>
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
        <div className="demo-left">
          <h2>Website Demo</h2>
          <p>
            <a href="#" style={{ textDecoration: "underline", color: "blue" }}>
              Website should be accessible from here
            </a>
          </p>
        </div>
        <div className="demo-right">
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
        <div className="contact-section" style={{ padding: "50px 20px", backgroundColor: "#f1f1f1" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Contact Us</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{ padding: "10px", marginBottom: "15px", fontSize: "16px" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{ padding: "10px", marginBottom: "15px", fontSize: "16px" }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              style={{ padding: "10px", marginBottom: "15px", fontSize: "16px" }}
            ></textarea>
            <button type="submit" style={{ padding: "15px", backgroundColor: "#a2a2ca", color: "white", fontSize: "18px", cursor: "pointer" }}>
              Send Message
            </button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "white", padding: "20px", textAlign: "center" }}>
        <p>
          Visit our <a href="https://employeeapp-314.peopleos.haufe.io/marketplace/explore/project-opportunity/de80a30b-dfcd-4af8-a931-13d92578bbba" style={{ color: "#a2a2ca", textDecoration: "none" }}>Marketplace</a> for more projects and resources.
        </p>
        <button
          onClick={toggleContactForm}
          style={{ padding: "10px 20px", backgroundColor: "#a2a2ca", color: "white", border: "none", cursor: "pointer", fontSize: "16px" }}
        >
          Contact Us
        </button>
      </footer>
    </div>
  );
}

export default App;


