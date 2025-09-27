export interface Task {
    idTask: number;
    taskTitle: string;
    completed: boolean;
    description?: string;
}

export type ITaskForm = Omit<Task, 'idTask' | 'completed'>