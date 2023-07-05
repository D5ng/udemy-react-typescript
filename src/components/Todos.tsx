import React from "react"
import Todo from "../models/Todo"
import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"

const Todos: React.FunctionComponent<{
  items: Todo[]
  onRemoveTodo: (id: string) => void
}> = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Todos
