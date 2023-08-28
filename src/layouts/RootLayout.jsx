import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const RootLayout = ({ children }) => {
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <div className='w-primary pb-[88px]'>{children}</div>
            <Footer />
        </div>
    );
};

export default RootLayout;
