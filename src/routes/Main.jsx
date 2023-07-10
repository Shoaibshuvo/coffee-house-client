import React from 'react';
import Navbar from '../components/pages/shared/Navbar/Navbar';

import Footer from '../components/pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;