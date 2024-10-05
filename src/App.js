import logo from './logo.svg';
import './App.css';
import LoginForm from './Forms/LoginForm';  // Adjust the path based on your folder structure

function App() {
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

      {/* Add the LoginForm component here */}
      <div className="App-body">
      </div>
    </div>
  );
}

export default App;
