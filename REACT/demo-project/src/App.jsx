import { useEffect, useRef, useState } from "react";
import Company from "./Company"
import Employee from "./Employee"
import MyCar from "./MyCar";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {

  const ref = useRef(0)
  // const[count, setCount] = useState(0)
  const inputRef = useRef(null)
  const [userName, setUserName] = useState("")

  // JS code
  const empName = "Maxx Well";
  const spanStyle = {fontWeight: 600, color:"blue"};

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const ShowAlert = () => {
    // setCount(count+1)
    ref.current += 1
    alert(`Button Clicked: ${ref.current}`)
  }

  const ShowAlertWithData = (data) => {
    alert(`Welcome back ${data}`)
  }

  const getUserData =(e) =>{
    setUserName(e)
  }

  return (
    <>
      {/* Inline CSS */}
      <Todo/>
      <h1 style={{textAlign:"center", color:"green", marginTop:"2rem"}}>Demo Project</h1>
      <h3 className="text-center">Welcome back <span style={spanStyle}>{empName}</span></h3>
      <Counter/>
      <div className="text-center my-3">
        <button onClick={ShowAlert} className="btn btn-primary">Show Alert</button> <br />
        <button onClick={() => ShowAlertWithData(empName)} className="btn btn-success mt-3">Show Alert With Data</button>
      </div>
      <div className="m-4 center">
        <input ref={inputRef} onChange={(e) => getUserData(e.target.value)} className="form-control text-center" type="text" placeholder="Enter Username"/>
        <h3 className="mt-3">{userName}</h3>
      </div>
      {/* Employee */}
      <Employee dataFromParent={empName} empDesignation = "Developer" empStatus/>
      <Company/>
      <MyCar/>
    </>
  )
}

export default App
