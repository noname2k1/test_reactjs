import React, { useEffect } from 'react';
import Header from '../partials/Header';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { routes } from '../configs';

const SignIn = () => {
    const navigate = useNavigate();
    const { user, handleSetUser, loading, setLoading } = useAuthContext();
    const handleSignIn = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        handleSetUser({ username });
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(routes.HOME);
        }, 2000);
    };
    useEffect(() => {
        if (user.username && !loading) {
            navigate(routes.HOME);
        }
    }, [user]);

    return (
        <div className='flex justify-center flex-col items-center h-screen'>
            <Header isShowButtons={false} />
            <form
                className='flex-1 flex items-center flex-col justify-center -translate-y-[10%]'
                onSubmit={handleSignIn}
            >
                <h1 className='text-[64px] leading-[100px] text-center'>
                    Sign In
                </h1>
                <div className='flex flex-col'>
                    <label htmlFor='username' className='mb-3'>
                        Username
                    </label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Enter your username'
                        required
                        pattern='[A-Za-z0-9]{6,}'
                        title='Username must be at least 6 characters long and contain only letters and numbers'
                        className='outline-none rounded-[6px] border border-black p-4 w-[407px] mb-[46px]'
                    />
                    <button
                        type='submit'
                        className='bg-primary font-bold text-base py-[18px] px-[80px] rounded-[50px] text-white shadow-lg hover:bg-opacity-80 duration-150'
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
