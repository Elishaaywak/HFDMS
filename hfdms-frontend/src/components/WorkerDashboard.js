// src/components/WorkerDashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const WorkerDashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        localStorage.removeItem('role');  // Clear role
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <h1>Worker Dashboard</h1>
            <p>Welcome, Health Worker!</p>
            <div className="list-group">
                <Link to="/profile" className="list-group-item list-group-item-action">View Profile</Link>
                <Link to="/tasks" className="list-group-item list-group-item-action">View Assigned Tasks</Link>
                {/* Add other links or sections as needed */}
            </div>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default WorkerDashboard;
