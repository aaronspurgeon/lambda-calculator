import React from "react";
import "./NumberButton.scss";

const NumberButton = (props) => {
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.add(props.text)} className="btn">{props.text}</button>
    </>
  );
};

export default NumberButton;
