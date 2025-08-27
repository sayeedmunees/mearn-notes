import React from 'react'
import useFetch from './useFetch'

const Todo = () => {
    const allTodos = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
        <h1 className='text-center my-5'>All Todos</h1>
    </div>
  )
}

export default Todo
