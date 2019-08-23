import React from "react";

//import any components needed

//Import your array data to from the provided data file
import NumberArr from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const numberData = NumberArr;
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberData.map((item, index) => {
         return <button key={index} text={item}></button>
       })}
    </div>
  );
};

export default Numbers;
