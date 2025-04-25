import React,{useState} from 'react'


function Tooltip({text}) {
    let [visualise,setVisualise]=useState(false)
  function handleHover(){
    setVisualise(true)
  }
  function handleLeave(){
    setVisualise(false)
  }
  return (
    <div>
         <h1 onMouseOver={handleHover} onMouseLeave={handleLeave}>Hover on me</h1>
        {
          visualise &&
          <p style={{backgroundColor:'red'}}>This is another tooltip</p>
        }
    </div>
  )
}

export default Tooltip