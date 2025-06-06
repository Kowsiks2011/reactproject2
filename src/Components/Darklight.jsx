import { useState, useEffect } from 'react';
import './Darklight.css';

const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="login-card">
        <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </div>
        
        <h2>{darkMode ? 'Welcome (Night Mode)' : 'Welcome (Day Mode)'}</h2>
        
        {!isLoggedIn ? (
          <>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="login-input"
            />
            <button onClick={handleLogin} className="login-btn login">
              Login
            </button>
          </>
        ) : (
          <>
            <p className="status-message">Welcome back, {username}!</p>
            <button onClick={handleLogout} className="login-btn logout">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginToggle;