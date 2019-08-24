import React from "react";


const Display = (props) => {
  console.log("Display", props);
  return <div>{props.text}</div>
  
  
};

export default Display;
