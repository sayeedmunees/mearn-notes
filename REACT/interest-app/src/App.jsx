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

  const [invalidPrinciple, setInvalidPrinciple] = useState(false);
  const [invalidRate, setInvalidRate] = useState(false);
  const [invalidYear, setInvalidYear] = useState(false);

  const validateInputs = (inputTag) => {
    const { name, value } = inputTag;
    console.log(name, value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    // console.log(value.match(/^\d*.?\d+$/));

    if (name == "principle") {
      setPrinciple(value);
      if (!!value.match(/^\d*\.?\d+$/)) {
        setInvalidPrinciple(false);
      } else {
        setInvalidPrinciple(true);
      }
    }

    if (name == "rate") {
      setRate(value);
      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
        setInvalidRate(false);
      } else {
        setInvalidRate(true);
      }
    }

    if (name == "year") {
      setYear(value);
      if (!!value.match(/^\d+$/)) {
        setInvalidYear(false);
      } else {
        setInvalidYear(true);
      }
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault()
    if (principle && rate && year) {
      setInterest((principle * rate * year) / 100);
    } else {
      alert("Please fill the form!!!");
    }
  };

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  };

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
            <h1>₹ {interest}</h1>
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
                value={principle || ""}
              />
            </div>
            {/* Invalid Principle */}
            {invalidPrinciple && (
              <div className="invalid-text">
                <p className="text-danger fs-6">Invalid Principle Amount !</p>
              </div>
            )}

            {/* Rate */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-rate"
                label="% Rate of Interest"
                variant="outlined"
                onChange={(e) => validateInputs(e.target)}
                name="rate"
                value={rate || ""}

              />
            </div>
            {/* Invalid Rate */}
            {invalidRate && (
              <div className="invalid-text">
                <p className="text-danger fs-6">Invalid Rate !</p>
              </div>
            )}

            {/* Year */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-year"
                label="Year (yr)"
                variant="outlined"
                onChange={(e) => validateInputs(e.target)}
                name="year"
                value={year || ""}

              />
            </div>
            {/* Invalid Year */}
            {invalidYear && (
              <div className="invalid-text">
                <p className="text-danger fs-6">Invalid Year !</p>
              </div>
            )}

            <Stack direction="row" spacing={2}>
              <Button
                className="bg-dark py-3 shadow"
                style={{ width: "50%" }}
                variant="contained"
                disabled={invalidPrinciple || invalidRate || invalidYear}
                onClick={handleCalculate}
                type="submit"
              >
                CALCULATE
              </Button>
              <Button
                className="border border-dark text-dark py-3 shadow"
                style={{ width: "50%" }}
                variant="outlined"
                onClick={handleReset}
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
