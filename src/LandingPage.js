import React, { useState } from 'react';
import './LandingPage.css';
import clouds from './Images/clouds-brighter.png';
import mountain from './Images/mountainsolo.png';
import notification_bar from './Assets/notification_text.png';
import landing_banner from './Assets/conQuest_logo_with_banner.png';
import button_left from './Assets/login_button.png';
import button_right from './Assets/signup_button.png';
import LoginForm from './Forms/LoginForm';
import SignUpForm from './Forms/SignUpForm';

function App() {
  const [view, setView] = useState('landing'); // States: 'landing', 'login', or 'signup'

  // Handlers to switch views
  const handleLoginClick = () => setView('login');
  const handleSignupClick = () => setView('signup');
  const handleBackClick = () => setView('landing');

  return (
    <div className="App">
      <div className="background">
        <img src={clouds} className="clouds-background" alt="clouds" />
        <img src={clouds} className="clouds-dupe" alt="clouds" />
      </div>
      <img src={mountain} className="mountain" alt="mountain" />

      {/* Landing View */}
      {view === 'landing' && (
        <>
          <img src={notification_bar} className="notification-bar" alt="notification bar" />
          <img src={landing_banner} className="landing-banner" alt="landing banner" />
          <div className="button-container1">
            <div className="button-left" onClick={handleLoginClick}>
              <div className="button-wrapper">
                <img src={button_left} className="buttons" alt="left button" />
              </div>
            </div>
            <div className="button-right" onClick={handleSignupClick}>
              <div className="button-wrapper">
                <img src={button_right} className="buttons" alt="right button" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Login View */}
      {view === 'login' && (
        <div className="form-container">
          {/* Pass the handleBackClick as a prop to LoginForm */}
          <LoginForm onBack={handleBackClick} />
        </div>
      )}

      {/* Sign Up View */}
      {view === 'signup' && (
        <div className="form-container2">
          {/* Pass the handleBackClick as a prop to SignUpForm */}
          <SignUpForm onBack={handleBackClick} />
        </div>
      )}
    </div>
  );
}

export default App;
