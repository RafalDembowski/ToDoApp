import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Layout from './layout/Layout/Layout';
import 'antd/dist/antd.css';
import './index.css';
import TaskList from './layout/TaskList/TaskList';

function App() {
  return (
    <>
      <Layout>
        <NavigationBar />
        <TaskList />
      </Layout>
    </>
  );
}

export default App;
