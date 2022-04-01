import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Layout from './layout/Layout/Layout';
import 'antd/dist/antd.css';
import './index.css';
import TaskList from './layout/TaskList/TaskList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateTask from './layout/CreateTask/CreateTask';

function App() {
  return (
    <>      
    <Router>
      <Layout>
      <NavigationBar />
        <Routes>     
            <Route path="/" element={<TaskList />} />
            <Route path="/dodaj" element={<CreateTask />} />
            <Route path="/edytuj" element={<TaskList />} />
            <Route path="/:id" element={<TaskList />} />    
        </Routes>
      </Layout>
    </Router>   
    </>
  );
}

export default App;
