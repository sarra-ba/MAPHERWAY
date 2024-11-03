
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertsList = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const response = await axios.get('http://yourserver.com/alerts.php');
      setAlerts(response.data);
    };
    fetchAlerts();
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            {alert.type} - {alert.severity}: {alert.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsList;
