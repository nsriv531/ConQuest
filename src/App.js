import './App.css';
import clouds from './Images/clouds.png';
import mountain from './Images/mountainsolo.png';

function App() {
  return (
    <div className="App">
      <div className="background">
        <img src={clouds} className="clouds-background" alt="clouds" />
        <img src={clouds} className="clouds-dupe" alt="clouds" />
      </div>
      <img src={mountain} className="mountain" alt="mountain" />
    </div>
  );
}

export default App;
