import React, { useState, useEffect } from "react";
import Number from "./Number";
import Operation from "./Operation";
import "../index.css";

const App = () => {
  const [currentSelection, setCurrentSelection] = useState("");
  const [previousSelection, setPreviousSelection] = useState("0");
  const [operator, setOperator] = useState("start");

  const numInput = (val) => {
    setCurrentSelection(currentSelection + val);
  };

  const operation = (operand) => {
    setOperator(operand);

    //since operator is used set the current state as previous so we can take new input
    setPreviousSelection(currentSelection);

    setCurrentSelection("");
  };

  useEffect(() => {}, [operator]);

  const calculate = () => {
    if (previousSelection === "0") return;

    let calculatedValue = 0;

    switch (operator) {
      case "+":
        calculatedValue = +previousSelection + +currentSelection;
        break;

      case "X":
        calculatedValue = +previousSelection * +currentSelection;
        break;

      case "-":
        calculatedValue = +previousSelection - +currentSelection;
        break;

      case "÷":
        calculatedValue = +previousSelection / +currentSelection;
        break;

      case "Clear":
        setCurrentSelection("");
        setOperator("");
        break;
    }

    if (operator === "Clear") return;

    setCurrentSelection(calculatedValue);
  };

  // useEffect(() => {
  //   //since operator is used set the current state as previous so we can take new input
  //   setPreviousSelection(currentSelection);

  //   setCurrentSelection("");

  //   console.log(
  //     `prev- ${previousSelection} current - ${currentSelection}  operation -${operator}`
  //   );
  // }, [operator]);

  return (
    <div className="container">
      <div>
        <h1 className="heading">Basic Calculator</h1>
      </div>
      <div className="row">
        <input
          className="input"
          value={currentSelection}
          onChange={(e) => setCurrentSelection(e.target.value)}
        />
      </div>
      <div className="row">
        <Operation operator={"Clear"} double="double" onOperation={operation} />
        <Operation operator={"="} onOperation={calculate} />
        <Operation operator={"+"} onOperation={operation} />
      </div>
      <div className="row">
        <Number num={9} onSelect={numInput} />
        <Number num={8} onSelect={numInput} />
        <Number num={7} onSelect={numInput} />
        <Operation operator={"-"} onOperation={operation} />
      </div>
      <div className="row">
        <Number num={6} onSelect={numInput} />
        <Number num={5} onSelect={numInput} />
        <Number num={4} onSelect={numInput} />
        <Operation operator={"X"} onOperation={operation} />
      </div>
      <div className="row">
        <Number num={3} onSelect={numInput} />
        <Number num={2} onSelect={numInput} />
        <Number num={1} onSelect={numInput} />
        <Operation operator={"÷"} onOperation={operation} />
      </div>
    </div>
  );
};

export default App;
