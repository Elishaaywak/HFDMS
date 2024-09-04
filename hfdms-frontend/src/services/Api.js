// src/services/api.js

const API_URL = 'http://localhost:5000/api';

const fetchWithToken = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };

    return fetch(url, { ...options, headers });
};

export const authenticateUser = async (credentials) => {
    const response = await fetchWithToken(`${API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials)
    });
    return response.json();
};

// Health Facilities
export const getHealthFacilities = async () => {
    const response = await fetchWithToken(`${API_URL}/healthfacilities`);
    return response.json();
};

export const getHealthFacilityById = async (id) => {
    const response = await fetchWithToken(`${API_URL}/healthfacilities/${id}`);
    return response.json();
};

export const createHealthFacility = async (facility) => {
    const response = await fetchWithToken(`${API_URL}/healthfacilities`, {
        method: 'POST',
        body: JSON.stringify(facility)
    });
    return response.json();
};

export const updateHealthFacility = async (id, facility) => {
    const response = await fetchWithToken(`${API_URL}/healthfacilities/${id}`, {
        method: 'PUT',
        body: JSON.stringify(facility)
    });
    return response.json();
};

export const deleteHealthFacility = async (id) => {
    await fetchWithToken(`${API_URL}/healthfacilities/${id}`, {
        method: 'DELETE'
    });
};

// Health Workers
export const getHealthWorkers = async () => {
    const response = await fetchWithToken(`${API_URL}/healthworkers`);
    return response.json();
};

export const getHealthWorkerById = async (id) => {
    const response = await fetchWithToken(`${API_URL}/healthworkers/${id}`);
    return response.json();
};

export const createHealthWorker = async (worker) => {
    const response = await fetchWithToken(`${API_URL}/healthworkers`, {
        method: 'POST',
        body: JSON.stringify(worker)
    });
    return response.json();
};

export const updateHealthWorker = async (id, worker) => {
    const response = await fetchWithToken(`${API_URL}/healthworkers/${id}`, {
        method: 'PUT',
        body: JSON.stringify(worker)
    });
    return response.json();
};

export const deleteHealthWorker = async (id) => {
    await fetchWithToken(`${API_URL}/healthworkers/${id}`, {
        method: 'DELETE'
    });
};

// Users
export const getUsers = async () => {
    const response = await fetchWithToken(`${API_URL}/users`);
    return response.json();
};

export const getUserById = async (id) => {
    const response = await fetchWithToken(`${API_URL}/users/${id}`);
    return response.json();
};

export const createUser = async (user) => {
    const response = await fetchWithToken(`${API_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(user)
    });
    return response.json();
};

export const updateUser = async (id, user) => {
    const response = await fetchWithToken(`${API_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user)
    });
    return response.json();
};

export const deleteUser = async (id) => {
    await fetchWithToken(`${API_URL}/users/${id}`, {
        method: 'DELETE'
    });
};
