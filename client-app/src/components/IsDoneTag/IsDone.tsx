
import React from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export default function IsDone(){

    const text : JSX.Element = <span>Ukończone</span>;

    return(
        <React.Fragment>         
            <Tooltip placement="top" title={text}>
                <CheckCircleOutlined className="IsDone-icon"/>   
            </Tooltip>     
        </React.Fragment>
    )
}