import { useState } from "react";

function Bmicalc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#000");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmiValue.toFixed(2);
    setBmi(roundedBMI);

    if (bmiValue < 18.5) {
      setMessage("Underweight");
      setColor("#3498db");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage("Normal weight");
      setColor("#2ecc71");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setMessage("Overweight");
      setColor("#f1c40f");
    } else {
      setMessage("Obese");
      setColor("#e74c3c");
    }
  };

  const styles = {
    outerWrapper: {
      backgroundColor: "#f0f4f8", // Outer background color
      minHeight: "100vh",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      maxWidth: "420px",
      width: "100%",
      padding: "2.5rem",
      background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
      borderRadius: "14px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      fontFamily: "'Roboto', sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "1.8rem",
      marginBottom: "1.5rem",
      color: "#2c3e50",
    },
    inputGroup: {
      marginBottom: "1.2rem",
      textAlign: "left",
    },
    label: {
      display: "block",
      fontWeight: "600",
      marginBottom: "0.4rem",
      color: "#34495e",
    },
    input: {
      width: "100%",
      padding: "0.7rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
    },
    button: {
      marginTop: "1rem",
      padding: "0.75rem 1.5rem",
      backgroundColor: "#8e44ad",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#732d91",
    },
    result: {
      marginTop: "1.8rem",
      backgroundColor: "#ffffff",
      padding: "1.2rem",
      borderRadius: "10px",
      border: "2px solid #ddd",
    },
    bmiText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: color,
    },
    messageText: {
      fontSize: "1.2rem",
      color: color,
    },
  };

  return (
    <div style={styles.outerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>BMI Calculator</h1>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            style={styles.input}
            placeholder="Enter your weight"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            style={styles.input}
            placeholder="Enter your height"
          />
        </div>

        <button
          onClick={calculateBMI}
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Calculate BMI
        </button>

        {bmi && (
          <div style={styles.result}>
            <div style={styles.bmiText}>Your BMI: {bmi}</div>
            <div style={styles.messageText}>{message}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bmicalc;
