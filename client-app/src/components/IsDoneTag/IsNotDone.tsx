
import React from "react";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import './Done.css';

export default function IsNotDone(){

    const text : JSX.Element = <span>Nie ukończone</span>;

    return(
        <React.Fragment>            
            <Tooltip placement="top" title={text}>
                <ExclamationCircleOutlined className="IsNotDone-icon"/>    
            </Tooltip>      
        </React.Fragment>
    )
}