// src/components/HealthFacilityList.js

import React, { useState, useEffect } from 'react';
import { getHealthFacilities, deleteHealthFacility } from '../services/Api';
import { Link } from 'react-router-dom';

const HealthFacilityList = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        const fetchFacilities = async () => {
            const data = await getHealthFacilities();
            setFacilities(data);
        };
        fetchFacilities();
    }, []);

    const handleDelete = async (id) => {
        await deleteHealthFacility(id);
        setFacilities(facilities.filter(facility => facility.id !== id));
    };

    return (
        <div>
            <h2>Health Facilities</h2>
            <Link to="/healthfacilities/new" className="btn btn-primary mb-3">Add New Facility</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {facilities.map(facility => (
                        <tr key={facility.id}>
                            <td>{facility.id}</td>
                            <td>{facility.name}</td>
                            <td>{facility.location}</td>
                            <td>
                                <Link to={`/healthfacilities/${facility.id}`} className="btn btn-info btn-sm">Edit</Link>
                                <button onClick={() => handleDelete(facility.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HealthFacilityList;
