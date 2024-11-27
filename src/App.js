import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const teamImageRef = useRef(null);

  const handleNavigation = (page) => {
    alert(`Navigating to: ${page}`);
  };

  // Effekt, um zu prüfen, ob das Team-Bild in den Sichtbereich kommt
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
    handleScroll(); // Initialer Check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Oberer Bereich */}
      <div className="container">
        {/* Linke Seite */}
        <div className="left-section">
          <nav className="navbar">
            <span className="logo">Logo</span>
            <ul className="nav-links">
              <li onClick={() => handleNavigation("Home")}>Home</li>
              <li onClick={() => handleNavigation("About")}>About</li>
              <li onClick={() => handleNavigation("Cases")}>Cases</li>
              <li onClick={() => handleNavigation("Contact")}>Contact</li>
            </ul>
          </nav>
          <div className="text-content">
            <h1>
              We create <br />
              appealing websites
            </h1>
          </div>
        </div>

        {/* Rechte Seite */}
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

      {/* Neuer Abschnitt: Team-Sektion */}
      <div className="team-section">
        <div className="team-content">
          <img
            src="/group2.jpg" // Pfad zum Bild im public-Ordner
            alt="Team"
            className={`team-image ${isVisible ? "visible" : ""}`}
            ref={teamImageRef}
          />
          <div className="team-text">
            <p>We are:</p>
            <h2>
              DRIVEN<br />
              DEDICATED<br />
              PASSIONATE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
