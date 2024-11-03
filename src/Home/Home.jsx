import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Header from './Header';
import Explore from './Explore';
import FeaturesList from './features';
import ContactUsForm from './contact';

const Home = () => {
    return (
        <React.Fragment>
            <section>
                <div className='Wrapper'>
                    <Navbar />
                    <Header />

                    <div id="Explore">
                        <Explore />
                    </div>
                    <div id="FeaturesList">
                        <FeaturesList />
                    </div>
                    <div id="Contact">
                        <ContactUsForm />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
