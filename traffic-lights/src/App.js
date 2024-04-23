import "./App.css";
import { TrafficLights } from "./components/TrafficLights";

const TrafficConfig = {
  red: {
    backgroundcolor: "red",
    duration: 3000,
    next: "green",
  },
  green: {
    backgroundcolor: "green",
    duration: 1000,
    next: "yellow",
  },
  yellow: {
    backgroundcolor: "yellow",
    duration: 1500,
    next: "red",
  },
};

function App() {
  return (
    <div className="App">
      {" "}
      <TrafficLights TrafficConfig={TrafficConfig} />
    </div>
  );
}

export default App;
