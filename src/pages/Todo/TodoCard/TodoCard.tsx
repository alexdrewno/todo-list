import { Card } from '../../../components/Card/Card'
import styles from './TodoCard.module.css'

type TodoCardProps = {
    title: string
    isCompleted: boolean
    createdAt: Date
}

export function TodoCard({ title, isCompleted, createdAt }: TodoCardProps) {
    return (
        <Card className={styles.container}>
            <input
                className={styles.checkbox}
                type='checkbox'
                checked={isCompleted}
                onChange={() => {}}
            />
            <p className={styles.content}>
                <span
                    className={isCompleted ? styles.completedText : undefined}
                >
                    {title}
                </span>
                <span className='subtext'>{createdAt.toString()}</span>
            </p>
        </Card>
    )
}
