import { Dispatch } from "redux";
import agent from "../../api/agent";
import { PostTask, Task } from "../../models/Task";
import { ActionTasksTypes } from "../constants/action-types";
import store from '../store';
import { message } from 'antd';

export const getAllTasks = () => async (dispatch: Dispatch) => {

    let tasks: Task[] = [];
    const params = new URLSearchParams();
    const taskIsDoneFilter = store.getState().tasks.taskIsDoneFilter;
    const taskPriorityFilter = store.getState().tasks.taskPriorityFilter;
    const taskTypeFilter = store.getState().tasks.taskTypeFilter;

    if(taskIsDoneFilter != null){
        params.append("IsComplete" , taskIsDoneFilter.toString())
    }

    if(taskPriorityFilter != null){
        params.append("Priority" , taskPriorityFilter)
    }

    if(taskTypeFilter != null){
        params.append("Type" , taskTypeFilter.toString())
    }

    try{
        tasks = await agent.Tasks.list(params);
    }catch(error){
        console.log(error)
    }
    
    console.log(tasks);

    dispatch({
        type: ActionTasksTypes.GET_ALL_TASKS,
        payload : tasks
    })
    
}

export const setPriorityFilter = (priorityFilter : string | null) => {

    if(priorityFilter === "Wszystkie")
        priorityFilter = null;

    return({
        type: ActionTasksTypes.SET_PRIORITY_FILTER,
        payload: priorityFilter
    })
}

export const setIsDoneFilter = (isDoneFilter : string | null) => {

    if(isDoneFilter === "Wszystkie")
        isDoneFilter = null;

    return({
        type: ActionTasksTypes.SET_IS_DONE_FILTER,
        payload: isDoneFilter
    })
}

export const setTypeFilter = (typeFilter : string) => {

    return({
        type: ActionTasksTypes.SET_TYPE_FILTER,
        payload: typeFilter
    })
}

export const deleteTask = (id : string) => async (dispatch: Dispatch) => {

    const tasksList = store.getState().tasks.tasksList;

    try{
        await agent.Tasks.delete(id);
    }catch(error){
        message.error('Wystąpił błąd przy kasaowaniu zadania!');
        console.log(error)
    }

    message.success('Poprawnie skasowano zadanie!');
    
    let newTasksList = tasksList.filter(task => task.id !== id);


    dispatch({
        type: ActionTasksTypes.DELETE_TASK,
        payload : newTasksList
    })
    
}

export const postTask = (postTask : PostTask) => async (dispatch: Dispatch) => {

    const tasksList = store.getState().tasks.tasksList;
    const createdTask: Task | null = null;
    let newTasksList: Task[] = [];

    try{
        const createdTask = await agent.Tasks.create(postTask);
    }catch(error){
        message.error('Wystąpił błąd przy tworzeniu zadania!');
        console.log(error)
    }

    message.success('Poprawnie utworzono zadanie!');

    if(createdTask !== null){
        tasksList.push(createdTask);
    }
       
    newTasksList = [ ...tasksList];

    dispatch({
        type: ActionTasksTypes.DELETE_TASK,
        payload : newTasksList
    })
    
}