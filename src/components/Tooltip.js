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
         <h2 className='tooltip' onMouseOver={handleHover} onMouseLeave={handleLeave}>Hover on me</h2>
        {
          visualise &&
          <p className='tooltip' style={{backgroundColor:'red'}}>{text}</p>
        }
    </div>
  )
}

export default Tooltip