import React from 'react';
import images from '../assets/images';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { routes } from '../configs';
import useAuthContext from '../hooks/useAuthContext';

const TBODY_LIST = [
    {
        id: 0,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 1,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 2,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 3,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 4,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 5,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 6,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 7,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 8,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 9,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
    {
        id: 10,
        title: 'ABC',
        description: 'Description',
        tags: 'HTML,CSS',
    },
];

const Profile = () => {
    const navigate = useNavigate();
    const { handleSetUser } = useAuthContext();
    const [params, setSetParams] = useSearchParams();
    const handleSetParams = (content) => {
        setSetParams({ content });
    };
    const handleLogout = () => {
        handleSetUser({ username: '' });
        navigate(routes.SIGN_IN);
    };
    return (
        <div className='flex'>
            <aside className='bg-[#D9D9D9] fixed top-0 bottom-0 left-0 w-[320px]'>
                <header className='flex justify-center pt-[60px]'>
                    <Link to={routes.HOME}>
                        <img src={images.logo} alt='logo' />
                    </Link>
                </header>
                <div className='mt-3'>
                    <ul className='text-heading pl-[40px]'>
                        <li
                            className='cursor-pointer text-[20px] leading-8'
                            onClick={() => handleSetParams('posts')}
                        >
                            Posts
                        </li>
                        <li
                            className='cursor-pointer text-[20px] leading-8'
                            onClick={handleLogout}
                        >
                            Logout
                        </li>
                    </ul>
                </div>
            </aside>
            <main className='flex flex-col items-center flex-1 px-[6.25%] ml-[320px]'>
                <header className='mt-[120px] flex items-center justify-between w-full'>
                    <button className='bg-primary font-bold text-base py-[14px] px-[90px] rounded-[50px] text-white shadow-lg hover:bg-opacity-80 duration-150'>
                        Add new
                    </button>
                    <div className='flex items-center'>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='title'
                            className='outline-none rounded-[6px] border border-black p-3 min-w-[20vw] mr-10'
                        />
                        <div className='relative outline-none rounded-[6px] border border-black p-3 min-w-[20vw] flex items-center'>
                            <input
                                type='text'
                                name='username'
                                id='username'
                                placeholder='tags'
                                className='flex-1 outline-none'
                            />
                            <button className='pl-3'>
                                <img src={images.down_arrow} alt='down-arrow' />
                            </button>
                        </div>
                    </div>
                </header>
                {/* table */}
                <table className='w-full mt-9'>
                    <thead className='bg-[#D9D9D9]'>
                        <tr>
                            <th className='text-[20px] font-bold py-[10px] border border-black'>
                                ID
                            </th>
                            <th className='text-[20px] font-bold py-[10px] border border-black'>
                                Title
                            </th>
                            <th className='text-[20px] font-bold py-[10px] border border-black'>
                                Desciption
                            </th>
                            <th className='text-[20px] font-bold py-[10px] border border-black'>
                                Tags
                            </th>
                            <th className='text-[20px] font-bold py-[10px] border border-black'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <div className='bg-transparent h-2.5'></div>
                    <tbody>
                        {TBODY_LIST.map((item) => (
                            <tr>
                                <td className='text-[20px] font-bold py-[10px] border border-black bg-[#D9D9D9] text-center'>
                                    {item.id}
                                </td>
                                <td className='text-[20px] font-bold py-[10px] border border-black bg-[#D9D9D9] text-center'>
                                    {item.title}
                                </td>
                                <td className='text-[20px] font-bold py-[10px] border border-black bg-[#D9D9D9] text-center'>
                                    {item.description}
                                </td>
                                <td className='text-[20px] font-bold py-[10px] border border-black bg-[#D9D9D9] text-center'>
                                    {item.tags}
                                </td>
                                <td className='text-[20px] font-bold py-[10px] border border-black bg-[#D9D9D9] text-center'>
                                    <button className='mr-5'>
                                        <img
                                            src={images.edit_icon}
                                            alt='edit-icon'
                                        />
                                    </button>
                                    <button>
                                        <img
                                            src={images.delete_icon}
                                            alt='delete-icon'
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='bg-[#D9D9D9] py-[13px] px-[81px] ml-auto mt-[26px] mb-[250px]'>
                    Phần phần trang
                </button>
            </main>
        </div>
    );
};

export default Profile;
