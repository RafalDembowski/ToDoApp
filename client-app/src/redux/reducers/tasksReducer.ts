import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";
import { ITaskState, Action } from "../types/TaskTypes";

const initialState : ITaskState = {
    tasksList : [],
    taskPriorityFilter: null,
    taskTypeFilter: null,
    taskIsDoneFilter: null,
    task: null
}

export const tasksReducer = (state : ITaskState = initialState , action: Action  )  => {

    switch (action.type){     
        case ActionTasksTypes.GET_ALL_TASKS:
            return {
                ...state,
                tasksList: action.payload
            }
        case ActionTasksTypes.SET_PRIORITY_FILTER:
            return{
                ...state,
                taskPriorityFilter: action.payload
            }
        case ActionTasksTypes.SET_IS_DONE_FILTER:
            return{
                ...state,
                taskIsDoneFilter: action.payload
            }
        case ActionTasksTypes.SET_TYPE_FILTER:
            return{
                ...state,
                taskTypeFilter: action.payload
            }
        case ActionTasksTypes.DELETE_TASK:
            return{
                ...state,
                tasksList: action.payload
            }
        case ActionTasksTypes.POST_TASK:
            return{
                ...state,
                tasksList: action.payload
            }
        case ActionTasksTypes.UPDATE_TASK:
            return{
                ...state,
                tasksList: action.payload
            }
        case ActionTasksTypes.GET_TASK:
            return{
                ...state,
                task: action.payload
            }
        default:
            return state
    }

}
