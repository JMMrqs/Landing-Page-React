import './Dashboard.css';
import { useEffect, useState } from 'react';
import { DashboardForm } from '../../components/Dashboard/DashboardForm.jsx';
import { DashboardLanguages } from '../../components/Dashboard/DashboardLanguages';
import { fetchIntoState, dashboardLanguagesRoute } from '../../composables/DataRequests';
import { postFormData, dashboardFormRoute } from '../../composables/DataRequests.js';

export function Dashboard() {
    const [languages, setLanguages] = useState([{}]);
    const handleSubmit = (e) => {
        e.preventDefault();
        postFormData(e, dashboardFormRoute);
        e.target.reset();
    };
    useEffect(() => {
        fetchIntoState(dashboardLanguagesRoute, setLanguages);
    }, [handleSubmit]);
    return (
        <div className="dashboard">
            <DashboardForm handleSubmit={handleSubmit} />
            <DashboardLanguages languages={languages} />
        </div>
    );
}
