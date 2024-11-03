import React from 'react';
import { useDispatch } from 'react-redux';
import { sendAlert } from './Redux/alertsSlice'; 
const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
};

const EmergencyButton = () => {
    const dispatch = useDispatch();

    const handleEmergency = async () => {
        try {
            const location = await getUserLocation();
            console.log('User location:', location);

            
            const alertData = {
                
                latitude: location.latitude,
                longitude: location.longitude,
                status: 'active',
            };

            
            const resultAction = await dispatch(sendAlert(alertData));

            if (sendAlert.fulfilled.match(resultAction)) {
                console.log('Alert sent successfully:', resultAction.payload);
            } else {
                console.error('Failed to send alert:', resultAction.error.message);
            }
        } catch (error) {
            console.error('Error getting location or sending to backend:', error);
        }
    };

    return (
        <button onClick={handleEmergency}>
            Emergency Alert
        </button>
    );
};

export default EmergencyButton;
