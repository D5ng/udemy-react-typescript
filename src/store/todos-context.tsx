import { createContext, useState } from "react"
import Todo from "../models/Todo"

type TodosContextObject = {
  items: Todo[]
  addTodo: (todoText: string) => void
  removeTodo: (id: string) => void
}

const TodosContext = createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

const TodoContextProvider: React.FC<{ children: React.ReactChild }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => setTodos((prevTodos) => prevTodos.concat(new Todo(todoText)))
  const removeTodoHandler = (id: string) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

  const initialValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }
  return <TodosContext.Provider value={initialValue}>{props.children}</TodosContext.Provider>
}

export { TodosContext }
export default TodoContextProvider
