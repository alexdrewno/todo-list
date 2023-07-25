import { Modal } from '../../../components/Modal/Modal'

export function NewTodoModal() {
    return (
        <Modal open={true}>
            <h2> Create new Todo item </h2>
            <input />
            <input />
        </Modal>
    )
}
