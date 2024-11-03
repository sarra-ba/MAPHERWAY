import React, { useState, useEffect } from "react";
import { Menu, Button } from 'antd';
import { LuLayoutDashboard } from "react-icons/lu";
import { PoweroffOutlined } from '@ant-design/icons';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { MdEmergencyShare } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
const Sidebar = ({ collapsed, toggleCollapse }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    const pathToKey = {
      '/Dashboard': '1',
      '/marketpage': '5',
      '/EmergencyPage': '3',
      '/RecordPage': '10',
    };
    const currentPath = location.pathname;
    const matchedKey = pathToKey[currentPath];
    if (matchedKey) {
      setActiveKey(matchedKey);
    } else {
      setActiveKey('');
    }
  }, [location.pathname]);

  const handleMenuClick = (e) => {
    setActiveKey(e.key);
    switch (e.key) {
      case '1':
        navigate('/Dashboard');
        break;
      case '3':
        navigate('/EmergencyPage');
        break;
      case '10':
        navigate('/RecordPage');
        break;
      case '5':
        navigate('/marketpage');
        break;
      default:
        break;
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
      </div>
      <Menu 
        mode='inline' 
        selectedKeys={[activeKey]} 
        className="menu-bar" 
        onClick={handleMenuClick}
        style={{ height: '100%', borderRight: 0 }} 
      >
        <Menu.Item key='1' icon={<LuLayoutDashboard />}>Dashboard</Menu.Item>
        <Menu.Item key='3' icon={<MdEmergencyShare />}>EmergencyPage</Menu.Item>
        <Menu.Item key='5' icon={<SiMarketo />}>Market page</Menu.Item>
        <Menu.Item key='10' icon={<PoweroffOutlined />}>RecordPage</Menu.Item>
      </Menu>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapse}
        className="trigger-btn"
      />
    </div>
  );
};

export default Sidebar;

