import React from 'react'
import "./Employee.css"

function Employee(props) {
  console.log(props);

  return (
    <div>
      <h3>Employee Details</h3>
      <h4 className='emp-details'>Name : {props.dataFromParent}</h4>
      <h4 className='text-center'>Designation : {props.empDesignation}</h4>
      <h4 className='text-center'>Employee Status : {props.empStatus ? <span className='text-success'>Active</span> : <span className='text-danger'>Inactive</span>}</h4>
    </div>
  )
}

export default Employee