import "../style/Register.css";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // check password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("User already exists!");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration Successful!");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="register">
        <form className="register-container" onSubmit={handleRegister}>
          <h1>Register</h1>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Re-type Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
