import React from 'react';
import images from '../assets/images';

const FEATURE_LIST = [
    {
        id: 0,
        title: 'Search Data',
        description:
            'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.',
        subImage: images.image_2,
        image: images.rectangle_1,
    },
    {
        id: 1,
        title: '24 Hours Access',
        description:
            'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
        subImage: images.image_3,
        image: images.rectangle_2,
    },
    {
        id: 2,
        title: 'Print Out',
        description:
            'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
        subImage: images.image_4,
        image: images.rectangle_3,
    },
    {
        id: 3,
        title: 'Security Code',
        description:
            'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
        subImage: images.image_5,
        image: images.rectangle_4,
    },
];

const Home = () => {
    return (
        <div>
            <section className='mt-[130px] relative'>
                <img
                    src={images.image_1}
                    alt='home_image_1'
                    className='absolute right-0 -bottom-10'
                />
                <h1 className='text-[80px] font-bold max-w-[640px] leading-[88px] text-heading'>
                    Save your data storage here.
                </h1>
                <p className='max-w-[370px] mt-[50px] text-[18px] leading-7 text-desciption'>
                    Data Warehouse is a data storage area that has been tested
                    for security, so you can store your data here safely but not
                    be afraid of being stolen by others.
                </p>
                <button className='bg-primary mr-[30px] mt-[50px] font-bold text-base py-[16px] px-[38px] rounded-[50px] text-white shadow-lg hover:bg-opacity-80 duration-150'>
                    Learn more
                </button>
            </section>
            <section className='text-center mt-[170px] flex flex-col items-center mb-[120px]'>
                <h2 className='text-[40px] leading-[52px] font-bold text-heading'>
                    Features
                </h2>
                <p className='mt-[50px] mb-[100px] max-w-[560px] leading-7 text-lg text-desciption'>
                    Some of the features and advantages that we provide for
                    those of you who store data in this Data Warehouse.
                </p>
                <div className='grid grid-cols-2 grid-rows-2 w-full gap-x-5 gap-y-10'>
                    {FEATURE_LIST.map((feature) => (
                        <div
                            className='relative flex items-center justify-end'
                            key={feature.id}
                        >
                            <img src={feature.image} alt='rectangle' />
                            <img
                                src={feature.subImage}
                                alt='sub-image'
                                className='absolute left-3'
                            />
                            <div className='absolute left-[52%]'>
                                <h3 className='text-2xl leading-8 text-left text-heading'>
                                    {feature.title}
                                </h3>
                                <p className='max-w-[220px] text-left leading-[26px] text-base font-normal my-5 text-desciption'>
                                    {feature.description}
                                </p>
                                <button className='flex items-center font-semibold group text-heading'>
                                    Learn more
                                    <img
                                        src={images.right_arrow}
                                        alt='right_arrow'
                                        className='ml-[20px] group-hover:ml-[25px] duration-150'
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className='bg-primary rounded-[50px] px-[90px] pb-[100px]'>
                    <h2 className='text-[40px] leading-[52px] text-white font-bold pt-[100px] pb-[80px]'>
                        Testimonials
                    </h2>
                    <div className='rounded-[20px] relative bg-white px-[100px] py-[50px]'>
                        <button>
                            <img
                                src={images.white_arrow}
                                alt='white-arrow'
                                className='absolute -left-16 top-1/2 transform -translate-y-1/2 animate-left-slide'
                            />
                        </button>
                        <button>
                            <img
                                src={images.white_arrow}
                                alt='white-arrow'
                                className='absolute -right-16 top-1/2 transform -translate-y-1/2 animate-right-slide'
                            />
                        </button>
                        <div className='absolute -bottom-14 transform left-1/2 -translate-x-1/2 flex items-center gap-x-2.5'>
                            <div className='w-2.5 h-2.5 rounded-full bg-paginate'></div>
                            <div className='w-1 h-1 rounded-full bg-white'></div>
                            <div className='w-1 h-1 rounded-full bg-white'></div>
                            <div className='w-1 h-1 rounded-full bg-white'></div>
                        </div>
                        <div className='flex items-start'>
                            <img src={images.avatar} alt='avatar' />
                            <div className='flex flex-col ml-[40px] py-6'>
                                <h3 className='text-[18px] leading-[28px] font-bold text-heading'>
                                    John Fang
                                </h3>
                                <p className='text-[14px] leading-[22px] text-primary'>
                                    wordfaang.com
                                </p>
                                <p className='mt-5 text-lg leading-8 font-normal max-w-[382px] text-desciption'>
                                    Suspendisse ultrices at diam lectus nullam.
                                    Nisl, sagittis viverra enim erat tortor
                                    ultricies massa turpis. Arcu pulvinar aenean
                                    nam laoreet nulla.
                                </p>
                            </div>
                        </div>
                        <div className='shadow-[0_20px_0_0_#9C69E24D] mix-blend-multiply absolute w-full h-full rounded-[20px] bottom-0 left-0'></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
