import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./Portfolio";
import DragonTrail from "./Dragon";
import DragonTrailOne from "./Dragon1";
import RainbowTrail from "./Rainbow";
import SmoothRainbowTrail from "./SmoothhRainbow";

function App() {
  return (
    <div className="App">
      {/* <DragonTrail /> */}
      {/* <DragonTrailOne /> */}
      {/* <RainbowTrail /> */}
      <SmoothRainbowTrail />
      <Portfolio />
    </div>
  );
}

export default App;
