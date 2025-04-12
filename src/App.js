import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleDownload = () => {
    toast.success("📥 Downloading Abstract...");
  };

  return (
    <div className="container">
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 data-aos="fade-down">NavIC Sentinel</h1>
      <p data-aos="fade-up">
        An emergency alert and tracking system using India’s NavIC satellite for high-precision coverage.
      </p>

      <a href="/docs/NavIC_Sentinel_Abstract.pdf" download onClick={handleDownload}>
        <button className="download-btn">Download Abstract</button>
      </a>

      <section data-aos="fade-up">
        <h2>Overview</h2>
        <p>
          NavIC Sentinel is designed to deliver real-time geolocation and emergency alerts
          even in GSM-restricted zones using microcontrollers and wireless modules.
        </p>
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

      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
