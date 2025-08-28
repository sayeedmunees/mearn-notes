import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const validateInput(inputTag)

  return (
    <>
      <div
        style={{ width: "100%", minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: "600px" }} className="bg-light rounded p-5">
          <h2 className="text-center">Simple Interest Calculator</h2>
          <p className="text-center">Calculate your simple interest easily</p>
          <div className="bg-warning p-3 text-light text-center rounded">
            <h1>₹1500</h1>
            <p className="fw-bolder">Total Simple Interest</p>
          </div>
          <form className="mt-3">
            <div className="mb-3">
              {/* Principle */}
              <TextField
                className="w-100"
                id="outlined-priciple"
                label="₹ Principle Amount"
                variant="outlined"
                onChange={(e) => validateInputs(e.target)}
                name="principle"
              />
            </div>
            {/* Rate */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-rate"
                label="% Rate of Interest"
                variant="outlined"
              />
            </div>
            {/* Year */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-year"
                label="Year (yr)"
                variant="outlined"
              />
            </div>
            <Stack direction="row" spacing={2}>
              <Button
                className="bg-dark py-3 shadow"
                style={{ width: "50%" }}
                variant="contained"
              >
                CALCULATE
              </Button>
              <Button
                className="border border-dark text-dark py-3 shadow"
                style={{ width: "50%" }}
                variant="outlined"
              >
                RESET
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
