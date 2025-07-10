import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./Firebase";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "Users", user.uid), {
        email,
        firstName,
        lastName,
      });

      setMessage("User registered successfully!");
      setError("");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email is already in use.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Failed to register user.");
      }
      setMessage("");
    }

    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

        body {
          margin: 0;
          padding: 0;
          font-family: 'Quicksand', sans-serif;
          background: #f4f4f8;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .sign-up-page {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .sign-up-card {
          background: #fefcff;
          border: 1px solid #e0d5f7;
          border-radius: 16px;
          padding: 3rem 2rem;
          box-shadow: 0 8px 24px rgba(160, 120, 230, 0.1);
          max-width: 600px; /* Increased width */
          width: 100%;
        }

        .sign-up-card h1 {
          text-align: center;
          color: #6a0dad;
          margin-bottom: 2rem;
        }

        .sign-up-card p {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .error {
          color: red;
          font-size: 0.95rem;
        }

        .success {
          color: green;
          font-size: 0.95rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          margin-bottom: 0.5rem;
          color: #333;
        }

        .input-group input {
          padding: 0.8rem 1rem;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 1rem;
        }

        .input-group input:focus {
          border-color: #a974e9;
          outline: none;
        }

        button {
          background: #8a2be2;
          color: white;
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: bold;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          background: #7325c4;
        }

        h6 {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #555;
        }

        h6 a {
          color: #6a0dad;
          text-decoration: none;
          font-weight: 600;
        }

        h6 a:hover {
          text-decoration: underline;
        }

        @media (max-width: 500px) {
          .sign-up-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="sign-up-page">
        <div className="sign-up-card">
          <h1>Sign Up</h1>

          {message && <p className="success">{message}</p>}
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="btn">
              <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>

          <h6>
            Already have an account? <Link to="/login">Login</Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Signup;
