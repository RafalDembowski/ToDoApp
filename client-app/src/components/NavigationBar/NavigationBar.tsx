import React from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import './NavigationBar.css';
import { Button } from 'antd';

export default function NavigationBar(){
    return(
        <React.Fragment>
            <div className="NavigationBar-Container">
                <div className="Icon-container">
                    <CheckCircleOutlined className="Icon"/>
                    <h2>To do app</h2>
                </div>
                <>
                    <Button type="primary">Utwórz nowę zadanie</Button>
                </>
            </div>
        </React.Fragment>
    )
}