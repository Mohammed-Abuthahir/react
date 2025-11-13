import React, { useState } from "react";
import "../style/login.css"; // your CSS file
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back 👋</h2>
        <p className="login-subtitle">Login to your account</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="btn-login">
            <button type="submit">Login</button>
          </div>

          <p className="signup-link">
            Don’t have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
