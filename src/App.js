import React from "react";

function App() {
  return (
    <div className="container">
      <h1>NavIC Sentinel</h1>
      <p>
        An emergency alert and tracking system using India’s NavIC satellite for high-precision coverage.
      </p>

      <a href="/docs/NavIC_Sentinel_Abstract.pdf" download>
        <button className="download-btn">Download Abstract</button>
      </a>

      <section>
        <h2>Overview</h2>
        <p>
          NavIC Sentinel is designed to deliver real-time geolocation and emergency alerts
          even in GSM-restricted zones using microcontrollers and wireless modules.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time location via NavIC</li>
          <li>Compact & power-efficient design</li>
          <li>Multi-sensor integration</li>
          <li>Rural, border, maritime coverage</li>
        </ul>
      </section>

      <section>
        <h2>Applications</h2>
        <ul>
          <li>Disaster Management</li>
          <li>Defense & Border Patrol</li>
          <li>Rural Connectivity</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
