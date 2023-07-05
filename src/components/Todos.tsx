import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"
import { TodosContext } from "../store/todos-context"

const Todos = () => {
  const { items, removeTodo: onRemoveTodo } = useContext(TodosContext)
  return (
    <React.Fragment>
      <ul className={classes.todos}>
        {items.map((item) => (
          <TodoItem key={item.id} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Todos
