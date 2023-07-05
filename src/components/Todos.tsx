import React from "react"
import Todo from "../models/Todo"
import TodoItem from "./TodoItem"

const Todos: React.FunctionComponent<{
  items: Todo[]
}> = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Todos
