import React from "react";
import CountdownTimer from "./CountdownTimer";

const App = () => {
  return (
    <div>
      <CountdownTimer initialSeconds={1} /> {/* One hour countdown */}
    </div>
  );
};

export default App;
