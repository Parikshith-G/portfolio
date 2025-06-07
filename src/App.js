import logo from "./logo.svg";
import "./App.css";

import SmoothRainbowTrail from "./SmoothRainbow/SmoothhRainbow";
import RainbowTrail from "./Rainbow/Rainbow";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      {/* <DragonTrail /> */}
      {/* <DragonTrailOne /> */}
      {/* <RainbowTrail /> */}
      <SmoothRainbowTrail />
      <Portfolio/>
    </div>
  );
}

export default App;
