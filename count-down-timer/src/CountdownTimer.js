import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const renderTimer = (seconds) => {
    // Format seconds into hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const pad = (val) => (val < 10 ? "0" + val : val);

    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>{renderTimer(seconds)}</div>
    </div>
  );
};

export default CountdownTimer;
