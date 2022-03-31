import React from "react";
import { Select , Space } from 'antd';

export default function Filters(){

    const { Option } = Select;

    function handleChangeTaskPriorityFilter(value: string) {
        alert(`selected ${value}`);
    }

    function handleChangeIsDoneFilter(value: string) {
        alert(`selected ${value}`);
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