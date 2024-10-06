import React, { useState } from 'react';
import '../StylingForms/SignUpForm.css';
import backButtonImage from '../Assets/back_button_no_hanging.png';
import continueButton from '../Assets/continue_button_no_hanging.png';

function SignUpForm({ onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
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
      <div className="form-elements2">
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
          <label htmlFor="displayName">Display Name:</label>
          <input 
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
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

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-container3">
        <button type="submit" className="image-button">
          <img src={continueButton} alt="Sign Up" className="button-img2" />
        </button>

        <button type="button" className="image-button" onClick={onBack}>
          <img src={backButtonImage} alt="Back" className="button-img2" />
        </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
