import { Header } from './Header/Header'
import { NewTodoModal } from './NewTodoModal/NewTodoModal'
import styles from './Todo.module.css'
import { TodoCard } from './TodoCard/TodoCard'
import { useTodoContext } from './useTodoContext'

export function Todo() {
    const { todoItems } = useTodoContext()

    return (
        <div className={styles.container}>
            <NewTodoModal />
            <Header />
            <div className={styles.divider} />
            <div className={styles.content}>
                {todoItems.map((item) => (
                    <TodoCard key={item.id} todoItem={item} />
                ))}
            </div>
        </div>
    )
}
