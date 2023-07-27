import { Button } from '../../../components/Button/Button'
import { useTodoContext } from '../useTodoContext'
import styles from './Header.module.css'

export function Header() {
    const { setIsModalOpen, setIsEditing, isEditing } = useTodoContext()
    return (
        <div className={styles.container}>
            <Button
                title={isEditing ? 'Done' : 'Edit'}
                onClick={() => setIsEditing((prevIsEditing) => !prevIsEditing)}
            />
            <h1 className={styles.title}> Todo </h1>
            <Button title='Add' onClick={() => setIsModalOpen(true)} />
        </div>
    )
}
