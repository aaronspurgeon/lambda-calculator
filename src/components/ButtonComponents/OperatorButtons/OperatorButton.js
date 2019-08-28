import React from "react";
import "./Operator.scss";

const OperatorButton = (props) => {
  
  return (
    <div className="operator">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.displayOperator(props.operator.value)} className='btn'>{props.operator.char}</button>
    </div>
  );
};

export default OperatorButton;
