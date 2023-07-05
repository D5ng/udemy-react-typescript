import { useContext, useRef } from "react"
import classes from "./NewTodo.module.css"
import { TodosContext } from "../store/todos-context"

const NewTodo = () => {
  const { addTodo: onAddTodo } = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value

    if (enteredText?.trim().length === 0) {
      return
    }

    onAddTodo(enteredText)
    todoTextInputRef.current!.value = ""
  }

  return (
    <form onSubmit={sumbitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
