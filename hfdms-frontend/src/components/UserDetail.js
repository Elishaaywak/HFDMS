// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details', error);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>User Details</h2>
            <dl className="row">
                <dt className="col-sm-3">Name</dt>
                <dd className="col-sm-9">{user.name}</dd>

                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">{user.email}</dd>

                <dt className="col-sm-3">Phone Number</dt>
                <dd className="col-sm-9">{user.phoneNumber}</dd>

                <dt className="col-sm-3">Role ID</dt>
                <dd className="col-sm-9">{user.roleId}</dd>

                <dt className="col-sm-3">Assigned Facility ID</dt>
                <dd className="col-sm-9">{user.assignedFacilityId}</dd>
            </dl>
            <Link to="/users" className="btn btn-primary">Back to List</Link>
        </div>
    );
};

export default UserDetail;
