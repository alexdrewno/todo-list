import { Header } from './Header/Header'
import { NewTodoModal } from './NewTodoModal/NewTodoModal'
import styles from './Todo.module.css'
import { TodoCard } from './TodoCard/TodoCard'

const TEST_DATA = [
    {
        title: 'Test 1',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date(),
    },
    {
        title: 'Test 1',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date(),
    },
    {
        title: 'Test 1',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date(),
    },
    {
        title: 'Test 2',
        isCompleted: true,
        createdAt: new Date(),
    },
    {
        title: 'Test 3',
        isCompleted: false,
        createdAt: new Date(),
    },
]

export function Todo() {
    return (
        <div className={styles.container}>
            <NewTodoModal />
            <Header />
            <div className={styles.divider} />
            <div className={styles.content}>
                {TEST_DATA.map((item) => (
                    <TodoCard {...item} />
                ))}
            </div>
        </div>
    )
}
