import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/predict', formData);
      const resultText = res.data.steganography_detected ? 'Steganography Detected' : 'Clean Image';
      setResult(resultText);
      setIsSuccess(true);
    } catch (error) {
      setResult('Error occurred');
      setIsSuccess(false);
    }
  };

  // clear result after 4 seconds and reset button color
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
        setIsSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const resultText = result === 'Clean Image' 
    ? <span style={{ color: '#4caf50' }}>Clean Image <span role="img" aria-label="check-mark">✔</span></span> 
    : result === 'Steganography Detected' 
    ? <span style={{ color: '#df0606' }}>Steganography Detected <span role="img" aria-label="exclamation">‼</span></span> 
    : null;

  return (
    <div id="appContainer">
      <div id="header">
        <p>Upload a PNG and we'll make sure its virus-free! &#x2a;</p>
        <p id="risks"> &#x2a; Individual results may vary. 
          Talk to your doctor to see if steganography detector is right for you 
        </p>
      </div>
      <div id="contentContainer">
        <h1>Steganography Detector</h1>

        <div id="inputRow">
          <label htmlFor="inputButton" className={`buttons ${file ? 'fileSelected' : ''}`}>
            Choose File
          </label>

          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            id="inputButton" 
          />

          {file && (
            <p id="fileNameDisplay">Selected: {file.name}</p>
          )}
        </div>

        <br /><br />
        <button 
          onClick={handleSubmit} 
          className={`buttons ${isSuccess ? 'successState' : ''}`}
          id="checkButton"
        >
          Check Image
        </button>
        <br /><br />
        {result && 
          <h2 id="resultText">
            {resultText}
          </h2>}
      </div>
      <div id="footer">
        <p> Developed by Meherzan Gai &#x1F60E;</p>
      </div>
    </div>
  );
}

export default App;
