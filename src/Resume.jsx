import React from "react";

const Resume = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.nameJob}>
            <h3 style={{ margin: 0 }}>G Dharani</h3>
            <p style={{ margin: 0 }}>Creative and Innovative Web Developer</p>
          </div>
          <div style={styles.photo}>
            <img src="/D1.jpg" alt="G Dharani" style={styles.image} />
          </div>
          <div style={styles.contact}>
            <div><strong>📍 Address:</strong> Angallu MITS 517325</div>
            <div><strong>📞 ph:</strong> 6304136562</div>
          </div>
        </div>
        <div style={styles.resumeBody}>
          <div style={styles.sidebar}>
            <h2 style={styles.heading}>Profiles</h2>
            <p>LinkedIn<br/><br />GitHub</p>
            <h2 style={styles.heading}>Skills</h2>
            <b>Web Technologies</b>
            <p>Python, SQL, HTML, CSS, JavaScript, React</p>
            <h2 style={styles.heading}>Certifications</h2>
            <p>Full-Stack Web Development - Corizo<br />
              AI & ML - APSSDC<br />
              PYTHON - HackerRank
            </p>
            <h2 style={styles.heading}>Languages</h2>
            <b>English</b><p>Intermediate</p>
            <b>Telugu</b><p>Native Speaker</p>
            <h2 style={styles.heading}>References</h2>
            <b>Available upon request</b>
          </div>
          <div style={styles.main}>
            <h2 style={styles.heading}>Summary</h2>
            <p>To acquire a challenging position in an environment where I can utilize my skills, education, knowledge and establish myself as a valuable asset to the organization.</p>
            <h2 style={styles.heading}>Education</h2>
            <p>MITS, CST - Bachelor's in Computer Science and Technology (Aug 2022 - May 2026)</p>
            <h2 style={styles.heading}>Projects</h2>
            <h3 style={styles.subheading}>E-Commerce Platform</h3>
            <p>The objective is to securely store and manage the data of customers who log in to the page. The stored information will help enhance user experience, streamline operations, and provide insights for better service and personalization.</p>
            <h3 style={styles.subheading}>Interactive Login & Signup Page</h3>
            <p>Created a login and sign-up page to securely store and manage customer data.</p>
            <h3 style={styles.subheading}>Sentiment Analysis on Hotel Reviews</h3>
            <p>Built a machine learning model that classifies hotel reviews by sentiment, enabling management to analyze customer feedback effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "2rem"
  },
  container: {
    height: "auto",
    width: "800px",
    backgroundColor: "#fefefe",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    overflow: "hidden"
  },
  top: {
    background: "linear-gradient(to right, #00c9ff, #92fe9d)",
    padding: "1rem",
    position: "relative",
    color: "black"
  },
  nameJob: {
    textAlign: "center"
  },
  photo: {
    position: "absolute",
    top: "50px",
    left: "140px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid #fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  contact: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "2rem",
    marginTop: "0.5rem"
  },
  resumeBody: {
    display: "flex",
    padding: "1rem"
  },
  sidebar: {
    width: "35%",
    padding: "1rem",
    backgroundColor: "#e3fdfd",
    borderRight: "2px solid #cbf1f5"
  },
  main: {
    width: "65%",
    padding: "1rem",
    backgroundColor: "#fdfdfd"
  },
  heading: {
    color: "Black",
    borderBottom: "2px solid #90e0ef",
    paddingBottom: "0.3rem",
    marginBottom: "0.5rem"
  },
  subheading: {
    color: "Black",
    marginBottom: "0.2rem"
  }
};

export default Resume;