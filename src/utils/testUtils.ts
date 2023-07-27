import { faker } from '@faker-js/faker'
import { TodoItem } from '../pages/Todo/useTodoContext'

type TodoOverrides = {
    id?: number
    title?: string
    createdAt?: Date
    isCompleted?: boolean
}

export function generateTodo(overrides?: TodoOverrides): TodoItem {
    return {
        id: overrides?.id ?? faker.number.int(),
        title: overrides?.title ?? faker.lorem.words(),
        createdAt:
            overrides?.createdAt ??
            faker.date.recent({ days: 7, refDate: '07-23-2023' }),
        isCompleted: overrides?.isCompleted ?? faker.datatype.boolean(),
    }
}
