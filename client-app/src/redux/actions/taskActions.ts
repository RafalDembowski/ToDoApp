import { Dispatch } from "redux";
import agent from "../../api/agent";
import { Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";

export const getAllTasks = () => async (dispatch: Dispatch) => {

    const tasks = await agent.Tasks.list(new URLSearchParams());
    
    console.log(tasks);

    dispatch({
        type: ActionTasksTypes.GET_ALL_TASKS,
        payload : tasks
    })
    
}
