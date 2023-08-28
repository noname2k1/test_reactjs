import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../configs';
import images from '../assets/images';
import useAuthContext from '../hooks/useAuthContext';
import classNames from 'classnames';

const Header = ({ isShowButtons = true }) => {
    const navigate = useNavigate();
    const { user, handleSetUser } = useAuthContext();
    const handleRedirectToOtherPage = (routeName) => {
        navigate(routeName);
    };
    const handleLogout = () => {
        handleSetUser({ username: '' });
    };

    return (
        <header
            className={classNames(
                'w-primary flex items-center justify-between',
                {
                    'mt-[44px]': isShowButtons,
                    'mt-[55px]': !isShowButtons,
                }
            )}
        >
            <Link to={routes.HOME}>
                <img src={images.logo} alt='web-logo' />
            </Link>
            {isShowButtons && (
                <>
                    {!user.username ? (
                        <button
                            className='bg-primary font-bold text-base py-[18px] px-[80px] rounded-[50px] text-white shadow-lg hover:bg-opacity-80 duration-150'
                            onClick={() =>
                                handleRedirectToOtherPage(routes.SIGN_IN)
                            }
                        >
                            Sign In
                        </button>
                    ) : (
                        <div className='flex items-center'>
                            <button
                                className='bg-primary mr-[30px] font-bold text-base py-[18px] px-[80px] rounded-[50px] text-white shadow-lg hover:bg-opacity-80 duration-150'
                                onClick={() =>
                                    handleRedirectToOtherPage(routes.PROFILE)
                                }
                            >
                                Profile
                            </button>
                            <button
                                className='bg-primary font-bold text-base py-[18px] px-[80px] rounded-[50px] text-white shadow-lg hover:bg-opacity-80 duration-150'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </>
            )}
        </header>
    );
};

export default Header;
