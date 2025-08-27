import React, { Component } from 'react'

export default class MyCar extends Component {
  constructor(){
    super()
    this.state ={
      carName: "Polo GT"
    }
  }
  render() {
    return (
      <div style={{minHeight:"50vh"}} className='bg-warning p-5 text-center text-white rounded fs-3 fw-bold'>
        <input onChange={e=>this.setState({...this.setState, carName:e.target.value})} type="text" className='form-control my-3' />
        <h1 className='mt-3'>My Car is: <span className='fw-bolder'>{this.state.carName}</span></h1>
      </div>
    )
  }
}