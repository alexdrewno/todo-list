import './App.css'
import './styles/font.css'

import { Todo } from './pages/Todo/Todo'
import { TodoProvider } from './pages/Todo/useTodoContext'

function App() {
    return (
        <TodoProvider>
            <Todo />
        </TodoProvider>
    )
}

export default App
