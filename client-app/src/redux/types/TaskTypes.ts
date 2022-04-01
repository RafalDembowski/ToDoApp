import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";

export interface ITaskState {
    tasksList: Map<string, Task>,
    task : Task | null
}

interface TasksAction {
    type: ActionTasksTypes.GET_ALL_TASKS
    payload: Map<string, Task>
}

interface TaskAction {
    type: ActionTasksTypes.GET_TASK
    payload: Task
}

export type Action = TasksAction | TaskAction