import React, { useState } from 'react';
import '../StylingForms/SignUpForm.css'; 

function LoginForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, such as sending data to the back-end
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="login-form">
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
        </div>

        {/* Submit Button */}
        <button type="submit" className='button-image'></button>
      </form>
    </div>
  );
}

export default LoginForm;
