import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";

export interface ITaskState {
    tasksList: Task[],
    task : Task | null
}

interface TasksAction {
    type: ActionTasksTypes.GET_ALL_TASKS
    payload: Task[]
}

interface TaskAction {
    type: ActionTasksTypes.GET_TASK
    payload: Task
}

export type Action = TasksAction | TaskAction