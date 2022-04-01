import React from "react";
import { Button , Space } from 'antd';
import './TaskTypes.css';
import { useDispatch } from "react-redux";
import { setTypeFilter , getAllTasks } from "../../redux/actions/taskActions";

export default function TaskTypes(){
    
    const disptach = useDispatch();

    function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
        const button : HTMLButtonElement = event.currentTarget;
        disptach(setTypeFilter(button.value));
        disptach(getAllTasks());
    }

    return(
        <Space size={"small"} className={"TaskTypes-container"}>
            <Button value="" onClick={handleOnClick}>Wszystkie</Button>
            <Button value="0" onClick={handleOnClick}>E-maile</Button>
            <Button value="1" onClick={handleOnClick}>Telefony</Button>
            <Button value="2" onClick={handleOnClick}>Zadanie</Button>
        </Space>
    )
}