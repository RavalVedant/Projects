import React, { useEffect, useState } from 'react';

// importing CSS.....
import './alert.css';

const Alert = ({ type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timer, setTimer] = useState(65); // Timer progress

  useEffect(() => {
    if (isVisible) {
      const countdown = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 40); // Decrease timer every 40ms

      if (timer <= 0) {
        clearInterval(countdown);
        onClose();
      }

      return () => clearInterval(countdown);
    }
  }, [isVisible, timer, onClose]);

  // Determine alert type class
  let alertClass = '';
  switch (type) {
    case 'success':
      alertClass = 'alert-success';
      break;
    case 'error':
      alertClass = 'alert-error';
      break;
    case 'info':
      alertClass = 'alert-info';
      break;
    default:
      alertClass = 'alert-info';
  }

  // Handle manual close of the alert
  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null; // Don't render the alert if it's closed

  return (
    <div className={`alert ${alertClass}`}>
      <span>{message}</span>
      <button onClick={handleClose} className="close-btn">X</button>

      {/* Timer Line Progress Bar */}
      <div className="timer-line-container">
        <div
          className="timer-line"
          style={{ width: `${timer}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Alert;
