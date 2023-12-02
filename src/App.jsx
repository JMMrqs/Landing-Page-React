import './views/Views.css';
import { Outlet } from 'react-router-dom';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';

export function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
