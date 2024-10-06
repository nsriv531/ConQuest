// Handle input change
import React, { useState } from "react";
import "../StylingForms/SignUpForm.css";
import backButtonImage from "../Assets/back_button_no_hanging.png"; // Import your back button image

function SignUpForm({ onBack }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // State to track if the response was successful

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle form submission, such as sending data to the back-end
    console.log("Form data submitted:", formData);

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true); // Set success state
        setMessage(data.message); // Set the success message
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
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        {message && (
          <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
        )}

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
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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

        {/* Back Button */}
        <button type="button" className="image-button" onClick={onBack}>
          <img src={backButtonImage} alt="Back" className="button-img" />
        </button>

        {/* Submit/Sign Up Button */}
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
export default SignUpForm;
