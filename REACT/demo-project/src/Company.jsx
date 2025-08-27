import React from 'react'
import myStyle from './style.module.css'

const Company = () => {
    const allEmp = [
        {empName: "Max", empDesig:"Developer", salary:45000},
        {empName: "Ram", empDesig:"Tester", salary:2100},
        {empName: "Sam", empDesig:"Designer", salary:30000},
        {empName: "Hari", empDesig:"Programmer", salary:50000}
    ];
  return (
    <div><h1 className={myStyle.headStyle}>Employee Details</h1>
    <table className='table container p-3 border shadow'>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {allEmp.map((emp, index) => (
                <tr key={emp.empName}>
                    <td>{index+1}</td>
                    <td>{emp.empName}</td>
                    <td>{emp.empDesig}</td>
                    <td>{emp.salary}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Company