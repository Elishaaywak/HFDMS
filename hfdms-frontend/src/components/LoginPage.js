import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // This hardcoded authentication should be replaced with an API call for authentication
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('token', 'fake-jwt-token');
            localStorage.setItem('role', 'admin'); // Set role in local storage
            navigate('/admindashboard'); // Redirect to the admin dashboard
        } else if (username === 'super_admin' && password === 'super_admin') {
            localStorage.setItem('token', 'fake-jwt-token');
            localStorage.setItem('role', 'super_admin'); // Set role in local storage
            navigate('/superadmindashboard'); // Redirect to the super admin dashboard
        } else if (username === 'worker' && password === 'worker') {
            localStorage.setItem('token', 'fake-jwt-token');
            localStorage.setItem('role', 'worker'); // Set role in local storage
            navigate('/workerdashboard'); // Redirect to the worker dashboard
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-100">
                <div className="d-flex justify-content-center align-items-center h30"><h1>Health Facility Data Management System (HFDMS) </h1></div>
                
                <div className="row d-flex justify-content-center align-items-center h-70">
                    <div className="col-md-6">
                        <img 
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" 
                            alt="Login"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="container mt-5">
                            <h2>Login</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
