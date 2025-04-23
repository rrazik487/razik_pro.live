import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function App() {
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    toast.success("Abstract downloaded successfully!");
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="container dark-mode">
      {/* Mode Toggle */}
      <div className="theme-toggle">
        <button onClick={() => document.body.classList.toggle("dark-mode")}>
          Toggle Mode
        </button>
      </div>

      {/* Hero Section */}
      <header className="hero-section" data-aos="fade-down">
        <h1>NavIC Sentinel</h1>
        <p>
          An emergency alert and tracking system using India’s NavIC satellite for
          high-precision coverage.
        </p>
        <a href="docs/NavIC_Sentinel_Abstract.pdf" download onClick={handleDownload}>
          <button className="download-btn" data-aos="zoom-in">
            Download Abstract
          </button>
        </a>
      </header>

      {/* Main Sections */}
      <main>
        <section data-aos="fade-up">
          <h2>Overview</h2>
          <p>
            NavIC Sentinel delivers real-time geolocation and emergency alerts
            even in GSM-restricted zones using microcontrollers and wireless modules.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Block Diagram</h2>
          <img src="/images/block-diagram.png" alt="Block Diagram" className="image" />
        </section>

        <section data-aos="fade-up">
          <h2>Working Prototype</h2>
          <img src="/images/prototype.png" alt="Prototype Model" className="image" />
        </section>

        <section data-aos="fade-up">
          <h2>Key Features</h2>
          <ul>
            <li>Real-time location via NavIC</li>
            <li>Compact & power-efficient design</li>
            <li>Multi-sensor integration</li>
            <li>Rural, border, maritime coverage</li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2>Applications</h2>
          <ul>
            <li>Disaster Management</li>
            <li>Defense & Border Patrol</li>
            <li>Rural Connectivity</li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2>Objective</h2>
          <p>
            To develop a real-time alert and tracking system with engine cut-off
            mechanism for maritime or border intrusions using NavIC and wireless communication.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Methodology</h2>
          <p>
            The system utilizes a NavIC GPS module, sensors, display, and buzzer
            on a microcontroller. Alerts are sent via Bluetooth, and engines can be
            cut off automatically.
          </p>
        </section>
      </main>

      {/* Floating Contact Box */}
      {showContact ? (
        <div className="floating-contact" data-aos="fade-left">
          <button className="close-btn" onClick={toggleContact}>✖️</button>
          <h3>/connect-me</h3>
          <p><strong>Name:</strong> S. Razikur Rahman</p>
          <p><strong>Phone:</strong> 6382308661</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/s-razikur-rahman-304415235" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://www.instagram.com/razik_487" target="_blank" rel="noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
          </div>
        </div>
      ) : (
        <button className="floating-icon" onClick={toggleContact} title="Contact Me">
          <FaEnvelope />
        </button>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
