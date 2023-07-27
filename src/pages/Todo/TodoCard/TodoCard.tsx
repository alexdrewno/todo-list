import { Button } from '../../../components/Button/Button'
import { Card } from '../../../components/Card/Card'
import { getDaysBetweenDates } from '../../../utils/Date'
import { TodoItem, useTodoContext } from '../useTodoContext.tsx'
import styles from './TodoCard.module.css'

type TodoCardProps = {
    todoItem: TodoItem
}

export function TodoCard({ todoItem }: TodoCardProps) {
    const { isCompleted, title, createdAt, id } = todoItem
    const { updateTodoItem, isEditing, deleteTodoItem } = useTodoContext()
    const isOverdue = getDaysBetweenDates(new Date(), createdAt) >= 5

    const titleClassName = isCompleted
        ? styles.completedText
        : isOverdue
        ? styles.overdueText
        : styles.text

    return (
        <div className={styles.container}>
            {isEditing && (
                <div className={styles.delete}>
                    <Button title='delete' onClick={() => deleteTodoItem(id)} />
                </div>
            )}

            <Card className={styles.cardContainer}>
                <input
                    className={styles.checkbox}
                    type='checkbox'
                    checked={isCompleted}
                    onChange={() => updateTodoItem(id)}
                />
                <p className={styles.content}>
                    {isOverdue && !isCompleted && (
                        <span className={titleClassName}>Overdue </span>
                    )}
                    <span className={titleClassName}>{title}</span>
                    <span className='subtext'>{createdAt.toString()}</span>
                </p>
            </Card>
        </div>
    )
}
