import React from "react";

const Operation = ({ operator, onOperation, double }) => {
  const classname = `item ${double}`;

  return (
    <div onClick={() => onOperation(operator)} className={classname}>
      {operator}
    </div>
  );
};

export default Operation;
