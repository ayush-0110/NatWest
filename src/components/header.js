import React from "react";
import logo from "./images/logo.png"
function Header({showHome, showGraphs}) {
  return (
    <header className="text-center header">
      <div className="secondaryhead">
        <div className="logo">
          <img src={logo} alt="weatherinfo" />
        </div>
        <div className="logotext">
            MyWeather.ai
        </div>
        <div className="beforebtns">
        <div className="btns">
          <button className="btnc" onClick={showHome}>Home</button>
        </div>
        <div className="btns">
          <button className="btnc" onClick={showGraphs}>Graphs</button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
