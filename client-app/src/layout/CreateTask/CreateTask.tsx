import React , { useEffect , useState } from 'react';
import { Form, Input, message, Button, Space, Card , Select , Spin } from 'antd';
import './CreateTask.css';
import { useDispatch , useSelector } from "react-redux";
import { postTask , updateTask , getTaskById  } from "../../redux/actions/taskActions";
import { PostTask, Task, UpdateTask } from '../../models/Task';
import { useNavigate , useParams } from 'react-router-dom';
import { State } from '../../redux/reducers';
import { LoadingOutlined } from '@ant-design/icons';

export default function CreateTask(){

    let navigate = useNavigate();
    const disptach = useDispatch();
    const task = useSelector((state: State) => state.tasks.task);
    const [form] = Form.useForm();
    const { Option } = Select;
    const { id } = useParams<{ id: string }>();
    const [ activeTask , setActiveTask ] = useState<Task>(new Task("" , "" , false , 1 , 1));
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ editMode, setEditMode ] = useState<boolean>(false);
    const [ isGetFromApi , setIsGetFromApi] = useState<boolean>(false);
    
    const tasksList = useSelector((state: State) => state.tasks.tasksList);
    
    useEffect(() => {
        if(id){
            setLoading(true);
            setEditMode(true);
            let task = tasksList.find(t => t.id === id);
            if(task){
                setActiveTask(task);
            }else{
                disptach(getTaskById(id));
                setIsGetFromApi(true);
            }
            form.setFieldsValue({
                description: task?.description,
                priority: task?.priority.toString(),
                type: task?.type.toString()

            })
            setLoading(false)
        }else{
            form.setFieldsValue({
                description: null,
                priority: null,
                type: null
            })
            setEditMode(false);
        }
    } , [id])

    useEffect(() => {
    } , [activeTask])

    useEffect(() => {
        if(isGetFromApi){
            if(task != null){
                console.log(task);
                setActiveTask(task);
                form.setFieldsValue({
                    description: task?.description,
                    priority: task?.priority.toString(),
                    type: task?.type.toString()
    
                })
            }else{
                message.error('Nie znaleziono podanego zadania!');
                navigate("/");
            }
        }
    }, [task])

    const onFinish = (values: any) => {

        try{

            if(!editMode){
                let createdTask = new PostTask(values.description , parseInt(values.priority) , parseInt(values.type));
                disptach(postTask(createdTask));
            }else{
                const taskToUpdate = new UpdateTask(values.description , activeTask.isComplete , parseInt(values.priority) , parseInt(values.type)); 
                disptach(updateTask(taskToUpdate , activeTask.id));
            }

        }catch(error){
            message.error('Wystąpił błąd!');
        }
        navigate("/");
        
    };
    
    const onFinishFailed = () => {
        message.error('Wystąpił błąd!');
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    if(loading) return <Spin indicator={antIcon} />
    
    return(
        <> 
        {
            loading &&
            <Spin indicator={antIcon} />
        }
        {
        !loading &&
        
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
                <Input placeholder="Wpisz opis zadania"/>
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
                    {
                    !editMode &&
                    <Button type="primary" htmlType="submit">
                        Zapisz
                    </Button>
                    }
                    {
                    editMode &&
                    <Button type="primary" htmlType="submit">
                        Zaaktualizuj
                    </Button>
                    }
                </Space>
            </Form.Item>

            </Form>
        </Card>
        }
        </>
    )
}