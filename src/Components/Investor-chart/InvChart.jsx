import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
const InvChart = ({ data, symbol, interval }) => {
    if (!data || data.length === 0) {
        return <p>No data to display. Please select a valid stock symbol or interval.</p>;
    }

    const chartData = {
        labels: data.map((point) => point.time),
        datasets: [
            {
                label: `${symbol} Stock Prices (${interval})`,
                data: data.map((point) => point.close),
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                tension: 0.4, // Smooth line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: `Stock Prices for ${symbol}`,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price (USD)',
                },
            },
        },
    };

    return (
        <Line data={chartData} options={options} />
    );
}

export default InvChart