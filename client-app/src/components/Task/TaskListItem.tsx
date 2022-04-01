import React from "react";
import { Tag , Space , Card } from 'antd';
import './Task.css';
import IsDone from '../IsDoneTag/IsDone';
import IsNotDone from '../IsDoneTag/IsNotDone';
import { Tooltip } from 'antd';
import { Task } from "../../models/Task";

interface Props {
    task: Task
}


export default function TaskListItem({ task } : Props){

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

    return(

        <React.Fragment>
            <Card className="Task-space-bottom">
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
                </Space>
                </div>
            </div>
            </Card>
        </React.Fragment>
    )
}