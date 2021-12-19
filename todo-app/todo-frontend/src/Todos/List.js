import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => <Todo {...todo} key={todo._id} onComplete={onClickComplete} onDelete={onClickDelete} />)}
    </>
  )
}

export default TodoList
