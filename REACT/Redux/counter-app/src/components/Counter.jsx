import React from "react";

const Counter = () => {
  return (
    <div className="border rounded text-center p-5">
      <h1 style={{ fontSize: "100px" }}>100</h1>
      <div
        style={{ width: "500px" }}
        className="d-flex justify-content-between my-5"
      >
        <button className="btn btn-warning">Decrement</button>
        <button className="btn btn-danger">Reset</button>
        <button className="btn btn-success">Increment</button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          placeholder="Enter an amount to be incremented"
          className="form-control"
        />
        <button className="btn btn-primary ms-3">Increment by amount</button>
      </div>
    </div>
  );
};

export default Counter;
