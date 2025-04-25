
import React from "react";
import './../styles/Tooltip.css';
import Tooltip from "./Tooltip";

const App = () => {
  
  return (
    <div className="App" >
        <h2 className="tooltip">
          <Tooltip text="This is a tooltip for first element" >
          This is a tooltip
          </Tooltip>
        </h2>
        <p className="tooltip">
          <Tooltip text="This is a tooltip for seccond element" >
          This is a another tooltip
          </Tooltip>
        </p>
    </div>
  )
}

export default App
