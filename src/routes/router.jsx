import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/Home.jsx';
import { AboutPage } from '../Pages/AboutPage.jsx';
import { App } from '../App.jsx';
import { Dashboard } from '../Pages/Dashboard/Dashboard.jsx';

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <div style={{ color: 'red' }}>Essa Pagina nao existe</div>,
        children: [
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
        ],
    },
    {
        path: '/',
        element: <Home />,
    },
]);
