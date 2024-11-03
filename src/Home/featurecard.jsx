import React from 'react';
import './featurecard.css';

const FeatureCard = ({ title, children, icon, photo }) => {
    return (
        <div className="feature-card">
            {photo && (
                <div className="photo">
                    <img src={photo} alt={`${title} photo`} />
                </div>
            )}
            <div className="icon">
                <i className={icon}></i>
            </div>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default FeatureCard;
