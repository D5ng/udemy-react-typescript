import React from 'react'
import Todos from './components/Todos'

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn Typescript']}>
          Hello World
      </Todos>
    </div>
  )
}

export default App