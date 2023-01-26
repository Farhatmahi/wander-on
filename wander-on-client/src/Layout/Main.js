import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SocialLinks from '../Components/SocialLinks';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <SocialLinks />
        </div>
    );
};

export default Main;