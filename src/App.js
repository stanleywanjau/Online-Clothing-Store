import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import LoginForm from './components/Login';
import LandingPage from './components/LandingPage';



function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {    
    setLoggedIn(true);
  };

  const handleLogout = () => {    
    setLoggedIn(false);
  };

  return (
    <div className="App">
     {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>                             
          <Home />
          <LandingPage /> 
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
