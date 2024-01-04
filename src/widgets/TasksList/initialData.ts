export interface InitialData {
    tasks: {
        [key: string]: {id: string, content: string},
    },
    columns: {
        [key: string]: {
            id: string,
            title: string,
            taskIds: Array<string>,
        }
    },
    columnsOrder: Array<string>,
}

export const initialData: InitialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'play guitar'},
        'task-2': {id: 'task-2', content: 'style app'},
        'task-3': {id: 'task-3', content: 'clean room'},
        'task-4': {id: 'task-4', content: 'go to sleep'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'to Do',
            taskIds: ['task-1', 'task-2', 'task-4'],
        }
    },
    columnsOrder: ['column-1'],
}