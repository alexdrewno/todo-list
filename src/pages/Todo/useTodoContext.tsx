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

const TEST_DATA = [
    {
        id: 1,
        title: 'Test 1',
        isCompleted: true,
        createdAt: new Date('01-10-2023'),
    },
    {
        id: 2,
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date('10-28-1998'),
    },
    {
        id: 3,
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date('07-26-2023'),
    },
    {
        id: 4,
        title: 'Test 1',
        isCompleted: true,
        createdAt: new Date('07-22-2023'),
    },
    {
        id: 5,
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date('07-25-2023'),
    },
    {
        id: 6,
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date('07-24-2023'),
    },
    {
        id: 7,
        title: 'Test 1',
        isCompleted: true,
        createdAt: new Date('07-21-2023'),
    },
    {
        id: 8,
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        id: 9,
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date(),
    },
    {
        id: 10,
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        id: 11,
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date(),
    },
]

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
