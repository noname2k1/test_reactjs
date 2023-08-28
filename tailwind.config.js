/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#9C69E2',
                paginate: '#F063B8',
                heading: '#212353',
                desciption: '#4B5D68',
            },
            width: {
                primary: '1120px',
            },
            keyframes: {
                'right-slide': {
                    '0%': {
                        transform: 'translateX(0)',
                    },
                    '100%': {
                        transform: 'translateX(10%)',
                    },
                },
                'left-slide': {
                    '0%': {
                        transform: 'translateX(0)',
                        rotate: '180deg',
                    },
                    '100%': {
                        transform: 'translateX(10%)',
                        rotate: '180deg',
                    },
                },
            },
            animation: {
                'right-slide': 'right-slide 1s linear infinite',
                'left-slide': 'left-slide 1s linear infinite',
            },
        },
    },
    plugins: [],
};
