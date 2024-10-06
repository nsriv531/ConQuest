<<<<<<< HEAD:src/components/LoginForm.js
import React, { useState } from "react";
=======
import React, { useState } from 'react';
import '../StylingForms/LoginForm.css'; 
import backButtonImage from '../Assets/back_button_no_hanging.png'; // Import your back button image
import loginButton from '../Assets/login_button_no_hanging.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
>>>>>>> 335d82580a401e2a212b59f73d9516b76dbb8e72:src/Forms/LoginForm.js

function LoginForm({ onBack }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD:src/components/LoginForm.js
    // Logic to handle form submission, such as sending data to the back-end
    console.log("Form data submitted:", formData);
=======
    console.log('Form data submitted:', formData);

    // Simulate login validation (replace with your own logic)
    if (formData.username === 'admin' && formData.password === 'password') {
      // If login is successful, navigate to the homepage
      navigate('/home'); // This will redirect to HomePage
    } else {
      alert('Invalid credentials'); // Handle invalid credentials
    }
>>>>>>> 335d82580a401e2a212b59f73d9516b76dbb8e72:src/Forms/LoginForm.js
  };

  return (
    <div className="login-form">
<<<<<<< HEAD:src/components/LoginForm.js
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
=======
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
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
        </div>

        <div className="button-container2">
          <button type="submit" className="image-button">
            <img src={loginButton} alt="Login" className="button-img" />
          </button>
          
          <button type="button" className="image-button" onClick={onBack}>
            <img src={backButtonImage} alt="Back" className="button-img" />
          </button>
>>>>>>> 335d82580a401e2a212b59f73d9516b76dbb8e72:src/Forms/LoginForm.js
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
