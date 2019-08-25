import React from "react";
import "./SpecialButton.scss";

const SpecialButton = (props) => {
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-btn" >{props.text}</button>
    </>
  );
};

export default SpecialButton;