import React, { useState } from "react";


function Button() {
  const [add, setAdd] = useState(0);

  function incre() {
    setAdd(add + 1);
  }

  function decre() {
    setAdd(add - 1);
  }

  return (
    <div className="container">
      <div className="counter-row">
        <button className="inc" onClick={incre}>+add</button>
        <h1>{add}</h1>
        <button className="dec" onClick={decre}>-sub</button>
      </div>
    </div>
  );
}

export default Button;