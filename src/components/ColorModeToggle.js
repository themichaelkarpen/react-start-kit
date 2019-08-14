import React from 'react';

const ColorModeToggle = ({ darkMode, setDarkMode }) => (
  <div className="dark-mode-toggle">
    <button type="button" onClick={() => setDarkMode(false)}>
      <i className="fa fa-sun-o"></i>
    </button>
    <span className="toggle-control">
      <input
        className="dmcheck"
        id="dmcheck"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label htmlFor="dmcheck" />
    </span>
    <button type="button" onClick={() => setDarkMode(true)}>
      <i className="fa fa-moon-o"></i>
    </button>
  </div>
);

export default ColorModeToggle;
