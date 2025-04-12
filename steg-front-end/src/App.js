import React, { useState, useEffect } from 'react'; // <-- make sure useEffect is imported
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/predict', formData);
      setResult(res.data.steganography_detected ? 'Steganography Detected' : 'Clean Image');
    } catch (error) {
      setResult('Error occurred');
    }
  };

  // 👇 This useEffect clears result after 3 seconds
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 3000); // 3 seconds

      // Cleanup if result changes before 5s is up
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Steganography Detector</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br /><br />
      <button onClick={handleSubmit}>Check Image</button>
      <br /><br />
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default App;
