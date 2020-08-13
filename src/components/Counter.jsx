import React from "react";

const Counter = (props) => {
  const { counter } = props;
  let classes = "m-2 p-2 font-weight-bold badge-pill ";
  classes += counter.value !== 0 ? "badge-secondary" : "badge-warning";
  return (
    <div className="m-4">
      <span className={classes}>
        {counter.value !== 0 ? counter.value : "zero"}
      </span>
      <button
        onClick={() => props.doIncrement(counter)}
        className="btn btn-success mx-2"
      >
        Increment Counter
      </button>
      <button
        onClick={() => props.doReset(counter)}
        className="btn btn-danger mx-2"
      >
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
