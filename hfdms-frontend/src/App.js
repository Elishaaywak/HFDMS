// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import WorkerDashboard from './components/WorkerDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import HealthFacilityList from './components/HealthFacilityList';
import HealthFacilityDetail from './components/HealthFacilityDetail';
import HealthWorkerList from './components/HealthWorkerList';
import HealthWorkerDetail from './components/HealthWorkerDetail';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Get the role from local storage

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/admindashboard" element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
                <Route path="/workerdashboard" element={isAuthenticated && role === 'worker' ? <WorkerDashboard /> : <Navigate to="/" />} />
                <Route path="/superadmindashboard" element={isAuthenticated && role === 'super_admin' ? <SuperAdminDashboard /> : <Navigate to="/" />} />
                <Route path="/healthfacilities" element={isAuthenticated ? <HealthFacilityList /> : <Navigate to="/" />} />
                <Route path="/healthfacilities/new" element={isAuthenticated ? <HealthFacilityDetail /> : <Navigate to="/" />} />
                <Route path="/healthfacilities/:id" element={isAuthenticated ? <HealthFacilityDetail /> : <Navigate to="/" />} />
                <Route path="/healthworkers" element={isAuthenticated ? <HealthWorkerList /> : <Navigate to="/" />} />
                <Route path="/healthworkers/new" element={isAuthenticated ? <HealthWorkerDetail /> : <Navigate to="/" />} />
                <Route path="/healthworkers/:id" element={isAuthenticated ? <HealthWorkerDetail /> : <Navigate to="/" />} />
                <Route path="/users" element={isAuthenticated ? <UserList /> : <Navigate to="/" />} />
                <Route path="/users/new" element={isAuthenticated ? <UserDetail /> : <Navigate to="/" />} />
                <Route path="/users/:id" element={isAuthenticated ? <UserDetail /> : <Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Handle 404 */}
            </Routes>
        </Router>
    );
};

export default App;
