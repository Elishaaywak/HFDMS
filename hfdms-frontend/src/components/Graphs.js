// src/components/Graphs.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const Graphs = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Number of Patients',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: '#42A5F5',
                tension: 0.1
            }
        ]
    };

    return (
        <div>
            <h3>Patient Statistics</h3>
            <Line data={data} />
        </div>
    );
};

export default Graphs;
