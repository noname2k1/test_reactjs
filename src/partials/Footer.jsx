import React from 'react';
import images from '../assets/images';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { routes } from '../configs';

const ITEMS = [
    {
        title: 'About',
        links: [
            {
                name: 'Profile',
                route: '/profile',
            },
            {
                name: 'Features',
                route: '/features',
            },
            {
                name: 'Careers',
                route: '/careers',
            },
            {
                name: 'DW News',
                route: '/news',
            },
        ],
    },
    {
        title: 'Help',
        links: [
            {
                name: 'Support',
            },
            {
                name: 'Sign up',
            },
            {
                name: 'Guide',
            },
            {
                name: 'Reports',
            },
            {
                name: 'Q&A',
            },
        ],
    },

    {
        title: 'Social Media',
        links: [
            {
                name: 'Facebook',
                route: '/facebook',
                icon: images.elipse,
            },
            {
                name: 'Twitter',
                route: '/twitter',
                icon: images.elipse,
            },
            {
                name: 'Instagram',
                route: '/instagram',
                icon: images.elipse,
            },
        ],
    },
];
const Footer = () => {
    return (
        <footer className='max-w-[1600px] flex justify-center border-t-2 border-primary border-opacity-20 pb-[125px] text-heading'>
            <div className='grid grid-cols-5 font-normal w-primary mt-[100px]'>
                <div className='flex flex-col col-span-2'>
                    <Link
                        to={routes.HOME}
                        className='flex items-center gap-x-5'
                    >
                        <img src={images.logo} alt='footer-logo' />
                        <h2 className='font-bold text-xl leading-8'>
                            DataWarehouse
                        </h2>
                    </Link>
                    <address className='mt-[66px] text-base font-semibold leading-7 not-italic'>
                        Warehouse Society, 234
                    </address>
                    <address className='text-base font-semibold leading-7 not-italic'>
                        Bahagia Ave Street PRBW 29281
                    </address>
                    <Link
                        to='mailto:info@warehouse.project'
                        className='mt-2.5 leading-7 font-normal'
                    >
                        info@warehouse.project
                    </Link>
                    <Link to='tel:+1-232-3434 leading-7 font-normal'>
                        1-232-3434 (Main)
                    </Link>
                    <p className='mt-[120px] text-xs leading-5'>
                        © Datawarehouse™, 2020. All rights reserved.
                    </p>
                    <p className='text-xs leading-5'>
                        Company Registration Number: 21479524.
                    </p>
                </div>
                {ITEMS.map((item, index) => {
                    return (
                        <div key={item.title}>
                            <h2 className='font-bold text-base'>
                                {item.title}
                            </h2>
                            <ul
                                className={classnames('mt-[40px]', {
                                    'flex gap-x-[14px]':
                                        item.title === 'Social Media',
                                })}
                            >
                                {item.links.map((link, index) => {
                                    if (item.title === 'Social Media') {
                                        return (
                                            <li key={link.name}>
                                                <Link to={link.route}>
                                                    <img
                                                        src={link.icon}
                                                        alt='social-media-icon'
                                                    />
                                                </Link>
                                            </li>
                                        );
                                    }
                                    return (
                                        <li
                                            className='mt-[20px]'
                                            key={link.name}
                                        >
                                            <Link
                                                to={link.route}
                                                className='text-base leading-7'
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
