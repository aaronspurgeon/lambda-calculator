import React from "react";

const SpecialButton = (props) => {
  const { item } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="btn" >{item}</button>
    </>
  );
};

export default SpecialButton;