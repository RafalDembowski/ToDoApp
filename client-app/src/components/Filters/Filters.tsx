import React from "react";
import { Select , Space } from 'antd';
import { useDispatch } from "react-redux";
import { setPriorityFilter , setIsDoneFilter , getAllTasks } from "../../redux/actions/taskActions";

export default function Filters(){

    const disptach = useDispatch();
    const { Option } = Select;

    function handleChangeTaskPriorityFilter(value: string) {
        disptach(setPriorityFilter(value));
        disptach(getAllTasks());
    }

    function handleChangeIsDoneFilter(value: string) {
        disptach(setIsDoneFilter(value));
        disptach(getAllTasks());
    }

    return(
        <Space size={"small"} className={"TaskTypes-container"}>
            <Select defaultValue="" style={{ width: 150 }} onChange={handleChangeTaskPriorityFilter}>
                    <Option value="">Wszystkie</Option>
                    <Option value="0">Niski priorytet</Option>
                    <Option value="1">Średni priorytet</Option>
                    <Option value="2">Wysoki priorytet</Option>
            </Select>
            <Select defaultValue="" style={{ width: 150 }} onChange={handleChangeIsDoneFilter}>
                    <Option value="">Wszystkie</Option>
                    <Option value="true">Ukończone</Option>
                    <Option value="false">Nie ukończone</Option>
            </Select>
        </Space>
    )
}