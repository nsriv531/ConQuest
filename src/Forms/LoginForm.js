import React, { useState } from "react";
import "../StylingForms/LoginForm.css";
import backButtonImage from "../Assets/back_button_no_hanging.png"; // Import your back button image
import loginButton from "../Assets/login_button_no_hanging.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginForm({ onBack }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isSuccess, setIsSuccess] = useState(null); // State to track if the response was successful
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);

    // Simulate login validation (replace with your own logic)
    // if (formData.username === "admin" && formData.password === "password") {
    //   // If login is successful, navigate to the homepage
    //   navigate("/home"); // This will redirect to HomePage
    // } else {
    //   alert("Invalid credentials"); // Handle invalid credentials
    // }

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true); // Set success state
        setMessage(data.message); // Set the success message
        navigate("/home");
      } else {
        setIsSuccess(false); // Set error state
        setMessage(data.message); // Set the error message from the server response
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {message && (
          <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
        )}
        {/* Username Input */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="image-button">
          <img
            src="../Assets/signup_button.png"
            alt="Sign Up"
            className="button-img"
          />
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
