import React from 'react';
import { Form, Input, message, Button, Space, Card , Select } from 'antd';
import './CreateTask.css';
import { useDispatch } from "react-redux";
import { postTask  } from "../../redux/actions/taskActions";
import { PostTask } from '../../models/Task';
import { useNavigate } from 'react-router-dom';

export default function CreateTask(){

    let navigate = useNavigate();
    const disptach = useDispatch();
    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinish = (values: any) => {

        try{
            let createdTask = new PostTask(values.description , parseInt(values.priority) , parseInt(values.type));
            disptach(postTask(createdTask));
        }catch(error){
            message.error('Wystąpił błąd przy tworzeniu zadania!');
        }
        navigate("/");
        
    };
    
    const onFinishFailed = () => {
        message.error('Nie udało się utworzyć!');
    };
    
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