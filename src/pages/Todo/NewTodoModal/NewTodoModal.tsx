import styles from './NewTodoModal.module.css'
import { useState } from 'react'
import { Modal } from '../../../components/Modal/Modal'
import { TodoItem, useTodoContext } from '../useTodoContext'
import { Button } from '../../../components/Button/Button'

export function NewTodoModal() {
    const { isModalOpen, setIsModalOpen, addTodoItem } = useTodoContext()
    const [title, setTitle] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newTodoItem: TodoItem = {
            id: new Date().getTime(),
            title,
            createdAt: new Date(),
            isCompleted: false,
        }

        addTodoItem(newTodoItem)
        setIsModalOpen(false)
        setTitle('')
    }

    return (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className={styles.container}>
                <h2> Create new Todo item </h2>
                <form
                    className={styles.formContainer}
                    method='post'
                    onSubmit={handleSubmit}
                >
                    <input
                        name='Title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <Button type='submit' title='Create' />
                </form>
            </div>
        </Modal>
    )
}
