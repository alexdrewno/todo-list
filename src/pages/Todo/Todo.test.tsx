import { fireEvent, render, screen } from '@testing-library/react'
import { TodoProvider } from './useTodoContext.tsx'
import { Todo } from './Todo'
import { generateTodo } from '../../utils/testUtils'
import { TODO_ITEM_KEY } from './Todo.service'
import { act } from 'react-dom/test-utils'

describe('Todo', () => {
    afterEach(() => {
        localStorage.clear()
    })

    it('should render', async () => {
        render(
            <TodoProvider>
                <Todo />
            </TodoProvider>
        )

        expect(await screen.findByText(/Todo/)).toBeInTheDocument()
        expect(screen.getByText(/Add/)).toBeInTheDocument()
        expect(screen.getByText(/Edit/)).toBeInTheDocument()
    })

    it('should render todos', async () => {
        const testTodos = [generateTodo(), generateTodo(), generateTodo()]
        localStorage.setItem(TODO_ITEM_KEY, JSON.stringify(testTodos))

        render(
            <TodoProvider>
                <Todo />
            </TodoProvider>
        )

        expect(await screen.findByText(/Todo/)).toBeInTheDocument()
        expect(screen.getByText(/Add/)).toBeInTheDocument()
        expect(screen.getByText(/Edit/)).toBeInTheDocument()

        expect(await screen.findByText(testTodos[0].title)).toBeInTheDocument()

        testTodos.forEach((testTodo) =>
            expect(screen.getByText(testTodo.title)).toBeInTheDocument()
        )
    })

    it('should be editing', async () => {
        const testTodos = [generateTodo(), generateTodo(), generateTodo()]
        localStorage.setItem(TODO_ITEM_KEY, JSON.stringify(testTodos))

        render(
            <TodoProvider>
                <Todo />
            </TodoProvider>
        )

        const editButton = await screen.findByText(/Edit/)
        expect(screen.getByText(/Todo/)).toBeInTheDocument()
        expect(screen.getByText(/Add/)).toBeInTheDocument()
        expect(editButton).toBeInTheDocument()

        editButton.click()

        expect(await screen.findByText(/Done/)).toBeInTheDocument()
        expect(screen.getAllByText(/delete/)).toHaveLength(3)
    })

    it('should not show todo after delete', async () => {
        const testTodos = [generateTodo()]
        localStorage.setItem(TODO_ITEM_KEY, JSON.stringify(testTodos))

        render(
            <TodoProvider>
                <Todo />
            </TodoProvider>
        )

        const editButton = await screen.findByText(/Edit/)
        expect(editButton).toBeInTheDocument()
        expect(screen.getByText(testTodos[0].title)).toBeInTheDocument()

        editButton.click()

        const deleteButton = await screen.findByText(/delete/)
        expect(deleteButton).toBeInTheDocument()
        expect(screen.getByText(testTodos[0].title)).toBeInTheDocument()

        deleteButton.click()

        expect(
            await screen.findByText(testTodos[0].title)
        ).not.toBeInTheDocument()
    })

    it('should show todo after add', async () => {
        const todoToAdd = generateTodo()

        render(
            <TodoProvider>
                <Todo />
            </TodoProvider>
        )

        const addButton = await screen.findByText(/Add/)
        expect(addButton).toBeInTheDocument()
        expect(screen.queryByText(todoToAdd.title)).not.toBeInTheDocument()

        addButton.click()

        expect(
            await screen.findByText(/Create new Todo item/)
        ).toBeInTheDocument()
        const titleInput = screen.getByTestId('title-input')

        act(() => {
            fireEvent.change(titleInput, { target: { value: todoToAdd.title } })
            fireEvent.submit(titleInput)
        })

        expect(await screen.findByText(todoToAdd.title)).toBeInTheDocument()
    })
})
