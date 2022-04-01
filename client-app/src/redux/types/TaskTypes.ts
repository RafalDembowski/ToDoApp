import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";

export interface ITaskState {
    tasksList: Task[],
    taskTypeFilter: string | null,
    taskPriorityFilter: string | null;
    taskIsDoneFilter: string | null;
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

interface TaskTypeFilterAction{
    type: ActionTasksTypes.SET_TYPE_FILTER
    payload: string
}

interface TaskPriorityFilterAction{
    type: ActionTasksTypes.SET_PRIORITY_FILTER
    payload: string
}

interface TaskIsDoneFilterAction{
    type: ActionTasksTypes.SET_IS_DONE_FILTER
    payload: string
}

interface DeleteTaskAction{
    type: ActionTasksTypes.DELETE_TASK
    payload: Task[]
}

interface PostTaskAction{
    type: ActionTasksTypes.POST_TASK
    payload: Task[]
}

interface UpdateTaskAction{
    type: ActionTasksTypes.UPDATE_TASK
    payload: Task[]
}

export type Action = TasksAction | TaskAction | TaskTypeFilterAction | TaskPriorityFilterAction | TaskIsDoneFilterAction | DeleteTaskAction | PostTaskAction | UpdateTaskAction