import React, { useState, useEffect, useRef } from "react";

const StopWatchMine = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStop = () => {
    if (isRunning) clearInterval(timerRef.current);
    setIsRunning(!isRunning);
  };

  const handleRestart = () => {
    setTimer(0);
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
      <h1>StopwatchMine</h1>
      <p>{formatTime(timer)}</p>
      <button onClick={handleStop}>{isRunning ? "Stop" : "Resume"}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default StopWatchMine;
