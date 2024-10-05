import React, { useState } from "react";
import { getData } from "../dbcopy";

function LoginForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle form submission, such as sending data to the back-end
    //console.log("Form data submitted:", formData);

    try {
      const query = "SELECT * FROM Users;";
      const rows = await getData(query);

      let match = false;

      for (let i = 0; i < rows.length; i++) {
        if (rows[i].username == formData.username) {
          match = true;
          break;
        }
      }

      if (match) {
        console.log("match found");
      } else {
        console.log("match not found");
      }
    } catch (error) {
      console.error("error found fetching data", error);
    }
  };

  return (
    <div>
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
        </div>

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
