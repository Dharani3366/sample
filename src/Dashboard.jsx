import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,rgb(250, 224, 158),rgb(228, 159, 255))",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px"
    },
    heading: {
      fontSize: "3rem",
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "40px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "50px"
    },
    linkHeading: {
      fontSize: "1.8rem",
      margin: "20px 0"
    },
    expenseLink: {
      color: "#ffffff",
      backgroundColor: "rgb(167, 36, 207)", 
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(231,76,60,0.4)",
      transition: "transform 0.2s"
    },
    gameLink: {
      color: "#ffffff",
      backgroundColor: "rgb(167, 36, 207)", 
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(231,76,60,0.4)",
      transition: "transform 0.2s"
    },
    snakeLink:{
      color: "#ffffff",
      backgroundColor: "rgb(167, 36, 207)",  
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(231,76,60,0.4)",
      transition: "transform 0.2s"
    },
    ResumeLink:{
      color: "#ffffff",
      backgroundColor: "rgb(167, 36, 207)", 
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(231,76,60,0.4)",
      transition: "transform 0.2s"
    },
    BmicalcLink:{
      color: "#ffffff",
      backgroundColor: "rgb(167, 36, 207)", 
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(231,76,60,0.4)",
      transition: "transform 0.2s"
    },
    StopwatchLink:{
      color: "#ffffff",
      backgroundColor: "rgb(167, 36, 207)", 
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(231,76,60,0.4)",
      transition: "transform 0.2s"

    }
    
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Welcome to Dashboard</h1>
      <div style={styles.content}>
        <h2 style={styles.linkHeading}>
          <Link to="/sevenupdown" style={styles.gameLink}>🎲 Seven Up Seven Down </Link>
        </h2>
    
        <h2 style={styles.linkHeading}>
          <Link to="/Snakeandladder" style={styles.snakeLink}>🐍 Sanke and ladder </Link>
        </h2>
        <h2 style={styles.linkHeading}>
          <Link to="/expense" style={styles.expenseLink}>💰 Expense Tracker</Link>
        </h2>
      
        <h2 style={styles.linkHeading}>
          <Link to="/Resume" style={styles.ResumeLink}>📄 Resume </Link>
        </h2>

        <h2 style={styles.linkHeading}>
          <Link to="/Bmicalc" style={styles.BmicalcLink}>🧮 Bmicalc </Link>
        </h2>

        <h2 style={styles.linkHeading}>
          <Link to="/Stopwatch" style={styles.StopwatchLink}>⏱️ Stopwatch </Link>
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;