// src/components/HealthWorkerList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HealthWorkerList = () => {
    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        const fetchWorkers = async () => {
            try {
                const response = await axios.get('/api/healthworkers');
                setWorkers(response.data);
            } catch (error) {
                console.error('Error fetching health workers', error);
            }
        };

        fetchWorkers();
    }, []);

    return (
        <div className="container">
            <h2>Health Workers</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map(worker => (
                        <tr key={worker.workerId}>
                            <td>{worker.workerId}</td>
                            <td>{worker.name}</td>
                            <td>{worker.designation}</td>
                            <td>{worker.email}</td>
                            <td>{worker.phoneNumber}</td>
                            <td>
                                <Link to={`/healthworkers/${worker.workerId}`} className="btn btn-info">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HealthWorkerList;
