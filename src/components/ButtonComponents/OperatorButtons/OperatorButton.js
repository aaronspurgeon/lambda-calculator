import React from "react";

const OperatorButton = (props) => {
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.displayOperator(props.operator.value)} className='btn'>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;
