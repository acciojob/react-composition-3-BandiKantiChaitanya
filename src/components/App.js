
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  let text='This is a tooltip'
  let [visualise,setVisualise]=useState(false)
  function handleHover(){
    setVisualise(true)
  }
  function handleLeave(){
    setVisualise(false)
  }
  return (
    <div>
        <h2 className="tooltip">
          <Tooltip text="This is a tooltip for first element" >
          This is a tooltip
          </Tooltip>
        </h2>
        <h2 className="tooltip">
          <Tooltip text="This is a tooltip for seccond element" >
          This is a another tooltip
          </Tooltip>
        </h2>
    </div>
  )
}

export default App
