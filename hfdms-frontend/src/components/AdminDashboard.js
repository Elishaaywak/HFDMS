// src/components/AdminDashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AdminDashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        localStorage.removeItem('role');  // Clear role
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin!</p>
            <div className="list-group">
                <Link to="/healthfacilities" className="list-group-item list-group-item-action">Manage Health Facilities</Link>
                <Link to="/healthworkers" className="list-group-item list-group-item-action">Manage Health Workers</Link>
                {/* Add other links or sections as needed */}
            </div>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AdminDashboard;
