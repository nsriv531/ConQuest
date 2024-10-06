import './LandingPage.css';
import clouds from './Images/clouds-brighter.png';
import mountain from './Images/mountainsolo.png';
import notification_bar from './Assets/notification_text.png';
import landing_banner from './Assets/conQuest_logo_with_banner.png';
import button_left from './Assets/login_button.png';
import button_right from './Assets/signup_button.png';

function App() {
  return (
    <div className="App">
      <div className="background">
        <img src={clouds} className="clouds-background" alt="clouds" />
        <img src={clouds} className="clouds-dupe" alt="clouds" />
      </div>
      <img src={mountain} className="mountain" alt="mountain" />
            <img src={notification_bar} className="notification-bar" alt="notification bar" />
      <img src={landing_banner} className="landing-banner" alt="landing banner" />
      <div className="button-container">
        <img src={button_left} className="button-left" alt="left button" />
        <img src={button_right} className="button-right" alt="right button" />
      </div>
      </div>
  );
}

export default App;
