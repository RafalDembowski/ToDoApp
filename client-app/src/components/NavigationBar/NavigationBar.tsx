import React from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import './NavigationBar.css';
import { Button } from 'antd';
import { Link } from "react-router-dom";

export default function NavigationBar(){
    return(
        <React.Fragment>
            <div className="NavigationBar-Container">
                <Link to="/" className="Icon-container">
                    <CheckCircleOutlined className="Icon"/>
                    <h2>To do app</h2>
                </Link>
                <Link to="/dodaj">
                    <Button type="primary">Utwórz nowę zadanie</Button>
                </Link>
            </div>
        </React.Fragment>
    )
}