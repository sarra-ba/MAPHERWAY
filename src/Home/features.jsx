import React from 'react';
import FeatureCard from './featurecard';
import './features.css';

const FeaturesList = () => {
    return (
        
            <div className="features-list">
                <FeatureCard 
                    title="Interactive Threat Map" 
                    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vqYO20ax72dPpnt6v2EphOY2RgEyChGaKA&s"
                    icon="fas fa-map"
                >
                    <ul>
                        <li>AI-powered map</li>
                        <li>Guides you through streets</li>
                    </ul>
                </FeatureCard>
                <FeatureCard 
                    title="Emergency Button" 
                    photo="https://media.istockphoto.com/id/1209130995/photo/red-emergency-button.jpg?s=612x612&w=0&k=20&c=WRyp5l1NiR6_NWynJal3Yb-E_yxdeArDBnYe1xwONgg=" 
                    icon="fas fa-exclamation-triangle"
                >
                    <ul>
                        <li>Reports alerts instantly</li>
                    </ul>
                </FeatureCard>
                <FeatureCard 
                    title="Marketplace" 
                    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WuWmGV6inCCte6-dpc3Wxn8VMJnSFtODYQ&s"
                    icon="fas fa-shopping-cart"
                >
                    <ul>
                        <li>Self-defense tools available</li>
                    </ul>
                </FeatureCard>
                <FeatureCard 
                    title="Voice Assistance" 
                    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlnEDXLy_mBw_gPKQjdkdIxhuNusRVgsCaQ&s" 
                    icon="fas fa-comments"
                >
                    <ul>
                        <li>Provides companionship</li>
                    </ul>
                </FeatureCard>
            </div>
       
    );
};

export default FeaturesList;
