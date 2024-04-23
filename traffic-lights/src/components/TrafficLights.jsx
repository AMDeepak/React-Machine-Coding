import styles from "./TrafficLights.module.css";
import { useState, useEffect } from "react";

export function TrafficLights({ TrafficConfig }) {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { next, duration } = TrafficConfig[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className={styles.container}>
      {Object.keys(TrafficConfig).map((color, index) => (
        <div
          key={index}
          className={styles.light}
          style={{
            backgroundColor:
              color === currentColor && TrafficConfig[color].backgroundcolor,
          }}
        ></div>
      ))}
    </div>
  );
}
