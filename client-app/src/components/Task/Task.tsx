import React from "react";
import { Tag , Space , Card } from 'antd';
import './Task.css';
import IsDone from '../IsDoneTag/IsDone';
import IsNotDone from '../IsDoneTag/IsNotDone';
import { Tooltip } from 'antd';

export default function Task(){
    return(
        <React.Fragment>
            <Card>
            <div className="Task-container">
                <div>
                    <h4>Opis:</h4>
                    <p></p>
                </div>
                <div className="Task-container">
                <Space size={"small"}>
                    <div>
                        <Tooltip placement="top" title={"Priorytet zadania"}>
                            <Tag>Wysoki</Tag>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip placement="top" title={"Typ zadania"}>
                            <Tag>Telefon</Tag>
                        </Tooltip>
                    </div>
                    <div>
                        <IsDone />
                        <IsNotDone />
                    </div>
                </Space>
                </div>
            </div>
            </Card>
        </React.Fragment>
    )
}