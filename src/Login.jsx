import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully", { position: "top-right" });
      window.location.href = "/Dashboard";
    } catch (error) {
      toast.error("Login failed. Check your email and password.", { position: "top-right" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Quicksand', sans-serif;
          background: #f4f4f8;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .login-page {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-card {
          background: #fefcff;
          border: 1px solid #e0d5f7;
          border-radius: 16px;
          padding: 3rem 2rem;
          box-shadow: 0 8px 24px rgba(160, 120, 230, 0.1);
          max-width: 700px;
          width: 100%;
        }

        .login-card h1 {
          text-align: center;
          color: #6a0dad;
          margin-bottom: 2rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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

        .password-toggle {
          margin-top: 0.3rem;
          font-size: 0.8rem;
          color: #6a0dad;
          cursor: pointer;
          user-select: none;
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

        h3 {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #555;
        }

        h3 a {
          color: #6a0dad;
          text-decoration: none;
          font-weight: 600;
        }

        h3 a:hover {
          text-decoration: underline;
        }

        @media (max-width: 500px) {
          .login-card {
            padding: 2rem 1.2rem;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide Password" : "Show Password"}
              </span>
            </div>
            <button type="submit">Log In</button>
          </form>
          <h3>
            New User? <Link to="/sign-up">Register now</Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Login;
