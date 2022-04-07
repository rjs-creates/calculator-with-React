import React from "react";

const Number = ({ num, onSelect }) => {
  return (
    <div onClick={() => onSelect(num)} className="item">
      {num}
    </div>
  );
};

export default Number;
