import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Layout, Spin, Alert } from 'antd'; 
import Sidebar from './Sidebar/Sidebar';
import Welcome from './Welcome/Welcome';
import { useGetUserDetailQuery } from '../Redux/ApiSlice'; 
import MainContent from './MainContent';
const { Sider, Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [userName, setUserName] = useState('');

  const user_id = localStorage.getItem('userId'); 
  const { data, error, isLoading } = useGetUserDetailQuery(user_id, {
    skip: !user_id, 
  });

  useEffect(() => {
    if (data) {
      setUserName(data.name); 
    }
  }, [data]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const welcomeMessage = `Welcome back, ${userName}`;

  if (isLoading) {
    return <Spin size="large" tip="Loading user details..." />;
  }

  if (error) {
    return <Alert message="Error loading user details" description={error.message} type="error" />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider'>
        <Sidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />
      </Sider>
      <Layout>
        <Header className="header">
          <Welcome message={welcomeMessage} /> 
          <MainContent/>
        </Header>
        <Content className="content">
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
