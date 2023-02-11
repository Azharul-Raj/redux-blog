import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../../pages/Shared/CustomHeader';
import Footer from '../../pages/Shared/Footer';
import Header from '../../pages/Shared/Header';

const Main = () => {
    return (
        <>
            {/* <CustomHeader/> */}
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
};

export default Main;