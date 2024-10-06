import React, { useState } from 'react';
import '../StylingForms/SignUpForm.css';
import backButtonImage from '../Assets/back_button_no_hanging.png'; // Import your back button image

function SignUpForm({ onBack }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
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
          <img src="../Assets/signup_button.png" alt="Sign Up" className="button-img" />
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
