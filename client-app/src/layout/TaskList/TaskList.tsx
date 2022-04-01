import React , { useEffect , useState } from "react";
import Filters from "../../components/Filters/Filters";
import TaskListItem from "../../components/Task/TaskListItem";
import TaskTypes from "../../components/TaskTypes/TaskTypes";
import './TaskList.css';
import { useDispatch , useSelector } from "react-redux";
import { getAllTasks } from "../../redux/actions/taskActions";
import { State } from "../../redux/reducers";
import { Empty } from 'antd';


export default function TaskList(){

    const disptach = useDispatch();
    const tasksList = useSelector((state: State) => state.tasks.tasksList);

    useEffect(() => {
        disptach(getAllTasks())
    },[])

    return(
        <React.Fragment>
            <div className="TaskList-container">
                <TaskTypes />
                <Filters />          
            </div>
            <div className="Tasks-container" >
                {
                    tasksList.length === 0 
                    &&
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="Empty-center" />
                }
                {
                    tasksList.length !== 0 
                    &&
                    tasksList.map(task => (
                        <TaskListItem key={task.id} task={task}/>
                    ))
                }
            </div>
            
        </React.Fragment>
    )
}