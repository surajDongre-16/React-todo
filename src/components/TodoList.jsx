import React from 'react'

const TodoList = ({children}) => {
  return (
    <div>
        <h1>Your Todo List</h1>
        <div>{children}</div>
    </div>

  )
}

export default TodoList