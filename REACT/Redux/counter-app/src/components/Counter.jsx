import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="border rounded text-center p-5">
      <h1 style={{ fontSize: "100px" }}>{count}</h1>
      <div
        style={{ width: "500px" }}
        className="d-flex justify-content-between my-5"
      >
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-warning"
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn btn-danger">
          Reset
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success"
        >
          Increment
        </button>
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
