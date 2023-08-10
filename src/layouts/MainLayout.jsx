import React, { useEffect } from 'react'
import Header from './../components/Header.jsx';

import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
    // const navigate = useNavigate()
    // const location = useLocation()
    // console.log(location);
    // useEffect(() => {
    //     if (location.pathname === '/') navigate('/home')
    // }, [])

    return (
<div className='w-full min-h-screen flex flex-col items-center bg-gray-900 bg-opacity-80'>
            <Header />

            <Outlet />

            <Footer />

        </div>
    )
}
export default MainLayout