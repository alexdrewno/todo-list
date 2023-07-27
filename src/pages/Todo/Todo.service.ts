import { TodoItem } from './useTodoContext.tsx'

export const TODO_ITEM_KEY = 'todoItems'

export function fetchTodos() {
    const todosJson = localStorage.getItem(TODO_ITEM_KEY)
    if (!todosJson) return []

    const todoItems: TodoItem[] = (JSON.parse(todosJson) as TodoItem[]).map(
        (item) => ({
            ...item,
            createdAt: new Date(item.createdAt),
        })
    )

    return todoItems
}

export function saveTodos(todoItems: TodoItem[]) {
    const todosJson = JSON.stringify(todoItems)
    localStorage.setItem(TODO_ITEM_KEY, todosJson)
}
