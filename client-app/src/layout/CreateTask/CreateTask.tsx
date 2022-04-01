import React from 'react';
import { Form, Input, message, Button, Space, Card , Select } from 'antd';
import './CreateTask.css';

export default function CreateTask(){

    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinish = (values: any) => {
        message.success('Udało się utworzyć!');
        console.log(values);
    };
    
    const onFinishFailed = () => {
        message.error('Nie udało się utworzyć!');
    };

    const onPriorityChange = (value : string) => {
        alert(value);
    }
    
    return(
        <Card className="CreateTask-container">
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

            <Form.Item
                name="description"
                label="Opis"
                rules={[{ required: true , message: 'Opis nie może być pusty!' } ]}
            >
                <Input placeholder="Wpisz opis zadania" />
            </Form.Item>

            <Form.Item
                name="priority"
                label="Priorytet"
                rules={[{ required: true , message: 'Należy wybrać priorytet dla tworzonego zadania!' }]}
            >
            <Select
                placeholder="Wybierz priorytet"
                onChange={onPriorityChange}
                allowClear
            >
                <Option value="0">Niski priorytet</Option>
                <Option value="1">Średni priorytet</Option>
                <Option value="2">Wysoki priorytet</Option>
            </Select>
            </Form.Item>

            <Form.Item
                name="type"
                label="Typ"
                rules={[{ required: true , message: 'Należy wybrać typ dla tworzonego zadania!' }]}
            >
            <Select
                placeholder="Wybierz typ"
                onChange={onPriorityChange}
                allowClear
            >
                <Option value="0">E-mail</Option>
                <Option value="1">Telefon</Option>
                <Option value="2">Zadanie</Option>
            </Select>
            </Form.Item>
            

            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Zapisz
                    </Button>
                </Space>
            </Form.Item>

            </Form>
        </Card>
    )
}