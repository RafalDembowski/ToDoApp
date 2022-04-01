import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Layout from './layout/Layout/Layout';
import 'antd/dist/antd.css';
import './index.css';
import TaskList from './layout/TaskList/TaskList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateTask from './layout/CreateTask/CreateTask';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>      
      <Router>
        <Layout>
        <NavigationBar />
          <Routes>     
              <Route path='*' element={<TaskList />} /> 
              <Route path="/" element={<TaskList />} />
              <Route path="/dodaj" element={<CreateTask />} />
              <Route path="/edytuj/:id" element={<CreateTask />} />      
          </Routes>
        </Layout>
      </Router>   
    </Provider>
  );
}

export default App;
