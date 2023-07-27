import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from 'react'
import { fetchTodos, saveTodos } from './TodoApi/TodoApi'

export type TodoItem = {
    id: number
    title: string
    createdAt: Date
    isCompleted: boolean
}

type TodoContextType = {
    todoItems: TodoItem[]
    addTodoItem: (todoItem: TodoItem) => void
    updateTodoItem: (id: number) => void
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    isEditing: boolean
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    deleteTodoItem: (id: number) => void
}

type TodoProviderProps = {
    children: ReactNode
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const useTodoContext = () => {
    const userContext = useContext(TodoContext)

    if (!userContext) {
        throw new Error('useTodoContext has to be used within <TodoProvider>')
    }

    return userContext
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        _fetchTodoItems()
    }, [])

    function _fetchTodoItems() {
        const fetchedTodoItems = fetchTodos()
        const sortedTodoItems = fetchedTodoItems.sort(function (a, b) {
            return b.createdAt.getTime() - a.createdAt.getTime()
        })

        setTodoItems(sortedTodoItems)
    }

    function addTodoItem(todoItem: TodoItem) {
        const newTodoItems = [todoItem, ...todoItems]

        saveTodos(newTodoItems)
        setTodoItems(newTodoItems)
    }

    function updateTodoItem(id: number) {
        const newTodoItems = todoItems.map((item) =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        )

        saveTodos(newTodoItems)
        setTodoItems(newTodoItems)
    }

    function deleteTodoItem(id: number) {
        const newTodoItems = todoItems.filter((item) => id !== item.id)

        saveTodos(newTodoItems)
        setTodoItems(newTodoItems)
    }

    return (
        <TodoContext.Provider
            value={{
                todoItems,
                addTodoItem,
                updateTodoItem,
                isModalOpen,
                setIsModalOpen,
                isEditing,
                setIsEditing,
                deleteTodoItem,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
