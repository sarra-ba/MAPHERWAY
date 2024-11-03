import React, { useState } from 'react';
import EmergencyButton from "./EmergencyButton";
import Sidebar from "./Dashboard/Sidebar/Sidebar";
import Welcome from './Dashboard/Welcome/Welcome';
import { Layout } from 'antd';
import './EmergencyPage.css';

export const EmergencyPage = () => {
  const { Sider, Header, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className='sider'>
        <Sidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />
      </Sider>
      <Layout>
        <Header className="header">
          <Welcome message="Emergency Page" /> 
        </Header>
        <Content style={{ padding: '20px', textAlign: 'center' }}>
          <p className="emergency-paragraph">
            If you feel threatened just click here and help will be sent to you in a few minutes.
          </p>
          <div className="emergency-container">
            <EmergencyButton />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
