import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    toast.success("Abstract downloaded successfully!");
  };

  return (
    <div className="container">
      <div className="theme-toggle">
        <button
          onClick={() =>
            document.body.classList.toggle("dark-mode")
          }
        >
          Toggle Mode
        </button>
      </div>

      <h1 data-aos="fade-down">NavIC Sentinel</h1>
      <p data-aos="fade-up">
        An emergency alert and tracking system using India’s NavIC satellite for high-precision coverage.
      </p>

      <a href="/docs/NavIC_Sentinel_Abstract.pdf" download onClick={handleDownload}>
        <button className="download-btn" data-aos="zoom-in">Download Abstract</button>
      </a>

      <section data-aos="fade-up">
        <h2>Overview</h2>
        <p>
          NavIC Sentinel is designed to deliver real-time geolocation and emergency alerts
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
          To develop a real-time alert and tracking system with engine cut-off mechanism for maritime or border crossing intrusions using NavIC and wireless communication.
        </p>
      </section>

      <section data-aos="fade-up">
        <h2>Methodology</h2>
        <p>
          The system utilizes a NavIC-based GPS module, sensors, display, and buzzer interfaced to a microcontroller. Alerts are sent via Bluetooth to a mobile device and emergency engines can be cut off.
        </p>
      </section>

      <ToastContainer />
    </div>
  );
}

export default App;
