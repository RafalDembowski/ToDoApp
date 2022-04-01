import axios, { AxiosError, AxiosResponse } from 'axios';
import { Task } from "../models/Task";

axios.defaults.baseURL = 'https://localhost:44385'

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) => {
    return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody)
}

const Tasks = {
    list: (params: URLSearchParams) => axios.get<Task[]>('/api/Tasks', { params }).then(responseBody),
    get: (id: string) => requests.get<Task>(`api/Tasks/${id}`)
}

const agent = {
    Tasks
}

export default agent;