import React, { useState, useEffect } from 'react';
import './SwitchToggle.css'; // Make sure to add the styles in a separate CSS file

const SwitchToggle = () => {
  // Detect if the system prefers dark mode (this happens on the first load)
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Retrieve the user's theme preference from localStorage, defaulting to system preference if none
  const storedPreference = localStorage.getItem('darkMode');
  const initialState = storedPreference === 'true' ? true : storedPreference === 'false' ? false : prefersDarkMode;

  const [isChecked, setIsChecked] = useState(initialState);

  // Apply the theme (dark or light) based on `isChecked` and save to localStorage
  useEffect(() => {
    // Apply dark mode class to body if dark mode is active
    document.body.classList.toggle('dark', isChecked);
    
    // Store the user's preference in localStorage
    localStorage.setItem('darkMode', isChecked);
  }, [isChecked]);

  // Listener to detect changes in the system's color scheme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      // If the user has not manually set the preference in localStorage, apply system preference
      if (localStorage.getItem('darkMode') === null) {
        setIsChecked(e.matches);
      }
    };

    // Initially set theme based on system preference (if localStorage is empty)
    if (localStorage.getItem('darkMode') === null) {
      setIsChecked(mediaQuery.matches);
    }

    // Add event listener for system preference changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Handle the toggle switch change
  const handleToggle = () => {
    setIsChecked((prev) => !prev); // Toggle between true (dark) and false (light)
  };

  return (
    <div className="switch-toggle">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className={`fas fa-moon ${!isChecked ? 'active' : ''}`}></i>
        <i className={`fas fa-sun ${isChecked ? 'active' : ''}`}></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
