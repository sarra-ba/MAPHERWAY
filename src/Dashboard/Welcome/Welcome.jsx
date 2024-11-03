import React, { useState } from 'react';
import { Typography, Input, Avatar, Badge, Drawer } from 'antd';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Notifications from '../../notifications'; 
import './Welcome.css';

const Welcome = ({ message }) => {
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [messagesVisible, setMessagesVisible] = useState(false);

  const showNotifications = () => {
    setNotificationsVisible(true);
  };

  const showMessages = () => {
    setMessagesVisible(true);
  };

  const onCloseNotifications = () => {
    setNotificationsVisible(false);
  };

  const onCloseMessages = () => {
    setMessagesVisible(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px' }}>
      <Typography.Title level={3} className="welcome-message" style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
        {message}
      </Typography.Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <Input.Search placeholder='Search Dashboard' allowClear />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Badge dot>
            <MessageOutlined 
              className='header-icon'
              onClick={showMessages} 
            />
          </Badge>
          <Badge dot>
            <NotificationOutlined
              className="notification"
              onClick={showNotifications}
            />
          </Badge>
          <Avatar icon={<UserOutlined />} className="custom-avatar-icon" />
        </div>
      </div>
      
      <Drawer
        title="Notifications"
        placement="right"
        closable={true}
        onClose={onCloseNotifications}
        visible={notificationsVisible}
      >
        <Notifications /> {}
      </Drawer>
      
      <Drawer
        title="Messages"
        placement="right"
        closable={true}
        onClose={onCloseMessages}
        visible={messagesVisible}
      >
     
        <p>No messages available.</p>
      </Drawer>
    </div>
  );
};

export default Welcome;
