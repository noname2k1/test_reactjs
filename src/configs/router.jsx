import { createBrowserRouter } from 'react-router-dom';
import { Home, Profile, SignIn } from '../pages';
import routes from './routes';
import RootLayout from '../layouts/RootLayout';
import App from '../App';

const router = createBrowserRouter([
    {
        path: routes.HOME,
        element: (
            <RootLayout>
                <App />
            </RootLayout>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: routes.SIGN_IN,
        element: <SignIn />,
    },
    {
        path: routes.PROFILE,
        element: <Profile />,
    },
]);

export default router;
