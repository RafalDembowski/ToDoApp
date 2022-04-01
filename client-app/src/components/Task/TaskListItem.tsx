import React from "react";
import { Tag , Space , Card } from 'antd';
import './Task.css';
import IsDone from '../IsDoneTag/IsDone';
import IsNotDone from '../IsDoneTag/IsNotDone';
import { Tooltip , message } from 'antd';
import { Task, UpdateTask } from "../../models/Task";
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { deleteTask , updateTask  } from "../../redux/actions/taskActions";

interface Props {
    task: Task
}

export default function TaskListItem({ task } : Props){

    const disptach = useDispatch();
    const doneMark : JSX.Element = task.isComplete ? <IsDone /> : <IsNotDone />

    function translatePriorityName (numberOfPriority: number){
        switch(numberOfPriority){
            case 0:
                return "Niski priorytet";
            case 1:
                return "Średni priorytet";
            case 2:
                return "Wysoki priorytet";
            default:
                return "";
        }
    }

    function translateTypeName (numberOfType: number){
        switch(numberOfType){
            case 0:
                return "E-mail";
            case 1:
                return "Telefon";
            case 2:
                return "Zadanie";
            default:
                return "";
        }
    }

    function handleDeleteItem(id: string) {
        disptach(deleteTask(id));
    }

    function handleChangeTaskStatus(task: Task){
        try{
            const taskToUpdate = new UpdateTask(task.description , !task.isComplete , task.priority , task.type); 
            disptach(updateTask(taskToUpdate , task.id));
        }catch(error){
            message.error('Wystąpił błąd przy zmianie statusu zadania!');
        }
    }

    return(

        <React.Fragment>
            <Card className={task.isComplete ? "Task-space-bottom Task-Complete" : "Task-space-bottom"} onClick={() => handleChangeTaskStatus(task)}>
            <div className="Task-container">
                <div>
                    <h4>Opis:</h4>
                    <p>{task.description}</p>
                </div>
                <div className="Task-container">
                <Space size={"small"}>
                    <div>
                        <Tooltip placement="top" title={"Priorytet zadania"}>
                            <Tag>{translatePriorityName(task.priority)}</Tag>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip placement="top" title={"Typ zadania"}>
                            <Tag>{translateTypeName(task.type)}</Tag>
                        </Tooltip>
                    </div>
                    <div>
                        { doneMark }
                    </div>
                    <div>
                    <Tooltip placement="top" title={"Usuń zadanie"} >
                        <DeleteOutlined className="Delete-icon" onClick={() => handleDeleteItem(task.id)}/>
                    </Tooltip>
                    </div>
                </Space>
                </div>
            </div>
            </Card>
        </React.Fragment>
    )
}