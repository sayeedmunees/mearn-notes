import React from 'react'
import useFetch from './useFetch'

const Todo = () => {
    const allTodos = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(allTodos);

  return (
    <div>
        <h1 className='text-center my-5'>All Todos</h1>
        {
            allTodos?.map(item => (
                <h4 id={item?.id}>{item?.title}</h4>
            ))
        }
    </div>
  )
}

export default Todo
