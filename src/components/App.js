
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
        {/* Do not remove the main div */}

        <h2 onMouseOver={handleHover} onMouseLeave={handleLeave}>Hover on me</h2>
        {
          visualise &&
          <p style={{backgroundColor:'red'}}>{text}</p>
        }
        <Tooltip text={text} />
    </div>
  )
}

export default App
