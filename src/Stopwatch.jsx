import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const outerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e9ecef", 
  };

  const stopwatchContainerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    backgroundColor: "skyblue",
  };

  const timeDisplayStyle = {
    fontSize: "48px",
    marginBottom: "30px",
    color: "#2e2e2e",
    fontFamily: "'Courier New', Courier, monospace",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "6px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
    transition: "background-color 0.3s",
  };

  const startButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007BFF",
    color: "white",
  };

  const stopButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
    color: "white",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    color: "white",
  };

  return (
    <div style={outerContainerStyle}>
      <div style={stopwatchContainerStyle}>
        <h1 style={timeDisplayStyle}>{formatTime(time)}</h1>
        <div style={buttonContainerStyle}>
          <button
            onClick={() => setRunning(true)}
            style={startButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Start
          </button>
          <button
            onClick={() => setRunning(false)}
            style={stopButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5a6268")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6c757d")}
          >
            Stop
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setTime(0);
            }}
            style={resetButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
