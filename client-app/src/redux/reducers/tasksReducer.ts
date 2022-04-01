import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";
import { ITaskState, Action } from "../types/TaskTypes";

const initialState : ITaskState = {
    tasksList : new Map<string , Task>(),
    task : null
}

export const tasksReducer = (state : ITaskState = initialState , action: Action  )  => {
    switch (action.type){
        case ActionTasksTypes.GET_ALL_TASKS:
            return {
                ...state,
                tasksList: action.payload
            }
        default:
            return state
    }
}
