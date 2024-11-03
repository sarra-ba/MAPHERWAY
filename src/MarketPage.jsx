import React, { useState } from 'react';
import MarketPlace from "./marketplace";
import Sidebar from "./Dashboard/Sidebar/Sidebar";
import Welcome from './Dashboard/Welcome/Welcome';
import { Layout } from 'antd';
import './EmergencyPage.css';

export const MarketPage = () => {
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
          <Welcome message="Market Place" /> 
        </Header>
        <Content style={{ padding: '20px', textAlign: 'center' }}>
          <p className="market-paragraph">

          </p>
          <div className="emergency-container">
            <MarketPlace/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
