import React from "react";
import "./Display.scss"


const Display = (props) => {
  console.log("Display", props);
  return (
  <div className="display">
    <p>{props.number}</p>
  </div>)
  
  
};

export default Display;
