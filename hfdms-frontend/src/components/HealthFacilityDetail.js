// src/components/HealthFacilityDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HealthFacilityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [facility, setFacility] = useState(null);
    const [name, setName] = useState('');
    const [district, setDistrict] = useState('');
    const [region, setRegion] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchFacility = async () => {
            if (id) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/healthfacilities/${id}`);
                    setFacility(response.data);
                    setName(response.data.name);
                    setDistrict(response.data.district);
                    setRegion(response.data.region);
                    setState(response.data.state);
                    setCountry(response.data.country);
                } catch (error) {
                    console.error('Failed to fetch facility', error);
                }
            }
        };

        fetchFacility();
    }, [id]);

    const handleSave = async () => {
        try {
            const method = id ? 'put' : 'post';
            const url = id ? `http://localhost:5000/api/healthfacilities/${id}` : 'http://localhost:5000/api/healthfacilities';
            await axios[method](url, {
                name,
                district,
                region,
                state,
                country
            });
            navigate('/healthfacilities');
        } catch (error) {
            console.error('Failed to save facility', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/healthfacilities/${id}`);
            navigate('/healthfacilities');
        } catch (error) {
            console.error('Failed to delete facility', error);
        }
    };

    return (
        <div className="container">
            <h1>{id ? 'Edit Health Facility' : 'New Health Facility'}</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="district">District</label>
                    <input
                        type="text"
                        id="district"
                        className="form-control"
                        value={district || ''}
                        onChange={(e) => setDistrict(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="region">Region</label>
                    <input
                        type="text"
                        id="region"
                        className="form-control"
                        value={region || ''}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        className="form-control"
                        value={state || ''}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        className="form-control"
                        value={country || ''}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                {id && (
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                )}
            </form>
        </div>
    );
};

export default HealthFacilityDetail;
