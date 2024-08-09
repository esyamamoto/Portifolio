import React from 'react';
import '../styles/ThemeSwitch.css';

const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-switch-button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark-mode' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitch;
