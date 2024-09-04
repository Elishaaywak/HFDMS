// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic, e.g., clearing token
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        </div>
    );
};

export default Dashboard;
