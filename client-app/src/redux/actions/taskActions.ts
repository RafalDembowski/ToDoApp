import { Dispatch } from "redux";
import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";

export const getAllTasks = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTasksTypes.GET_ALL_TASKS,
            payload : new Map<string , Task>()
        })
    }
}