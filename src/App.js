import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const TakeSurvey = () => {
  const handleSurveySubmit = () => {
    axios.post('http://localhost:3001/takeSurvey')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error submitting survey:', error);
      });
  };

  return (
    <div>
      <h2>Take Survey Page</h2>
      {/* Add your survey form and related components here */}
      <button onClick={handleSurveySubmit}>Submit Survey</button>
    </div>
  );
};

const ScanQRCode = () => {
  const handleQRCodeScan = () => {
    axios.get('http://localhost:3001/scanQRCode')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error scanning QR code:', error);
      });
  };

  return (
    <div>
      <h2>Scan QR Code Page</h2>
      {/* Add your QR code scanning component and related functionality here */}
      <button onClick={handleQRCodeScan}>Scan QR Code</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <div className="card-container">
          {/* Card 1: Take Survey */}
          <Link to="/take-survey" className="card">
            <img src="survey-icon.png" alt="Survey Icon" className="card-image" />
            <h3>Take Survey</h3>
            <button>Take Survey</button>
          </Link>

          {/* Card 2: Scan QR Code */}
          <Link to="/scan-qr-code" className="card">
            <img src="qr-code-icon.png" alt="QR Code Icon" className="card-image" />
            <h3>Scan QR Code</h3>
            <button>Scan QR Code</button>
          </Link>
        </div>

        {/* Routes Wrapper */}
        <Routes>
          {/* Route for Take Survey Page */}
          <Route path="/take-survey" element={<TakeSurvey />} />

          {/* Route for Scan QR Code Page */}
          <Route path="/scan-qr-code" element={<ScanQRCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
