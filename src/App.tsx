import React, { useState } from "react"
import Todos from "./components/Todos"
import Todo from "./models/Todo"
import NewTodo from "./components/NewTodo"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => setTodos((prevTodo) => prevTodo.concat(new Todo(todoText)))
  const removeTodoHandler = (id: string) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  )
}

export default App
