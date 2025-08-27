import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0)
    useEffect(() => {setTimeout(() => {setCount(count+1)},1000)},[count])
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center my-5 border bg-warning text-white rounded'>
        <h1 style={{fontSize:'80px'}}>{count}</h1>
        </div>
  )
}

export default Counter