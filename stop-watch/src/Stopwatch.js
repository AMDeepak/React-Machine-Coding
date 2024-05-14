import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 3600);

    const pad = (val) => (val < 10 ? "0" + val : val);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(elapsedTime)}</p>
      {!isRunning ? (
        !(elapsedTime > 0) && <button onClick={handleStart}>Start</button>
      ) : (
        <>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
      {!isRunning && elapsedTime > 0 && (
        <button onClick={handleResume}>Resume</button>
      )}
    </div>
  );
};

export default Stopwatch;
