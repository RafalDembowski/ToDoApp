import React , { useEffect , useState } from "react";
import Filters from "../../components/Filters/Filters";
import TaskListItem from "../../components/Task/TaskListItem";
import TaskTypes from "../../components/TaskTypes/TaskTypes";
import './TaskList.css';
import { useDispatch , useSelector } from "react-redux";
import { getAllTasks } from "../../redux/actions/taskActions";
import { State } from "../../redux/reducers";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function TaskList(){

    const disptach = useDispatch();
    const tasksList = useSelector((state: State) => state.tasks.tasksList);
    const [loading , setLoading] = useState<boolean>(true);

    useEffect(() => {
        disptach(getAllTasks())
        console.log(tasksList.length)
    },[])

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
                    <Spin indicator={antIcon} className="Spinner-center" />
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