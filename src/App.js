import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/users') // Fetching from your backend
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
      </div>

      <div>
        <h1>Users</h1>
        <ul>
          {/* Display users fetched from the backend */}
          {users.map((user) => (
            <li key={user.user_id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
