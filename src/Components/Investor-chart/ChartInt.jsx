import React, { useState } from 'react';
import axios from 'axios';
import InvChart from './InvChart';
const ChartInt = () => {
    const [symbol, setSymbol] = useState('AAPL'); // Default symbol
    const [interval, setInterval] = useState('5min'); // Default interval
    const [stockData, setStockData] = useState([]);
    const [error, setError] = useState(null);

    const fetchStockData = async () => {
        // const symbol = "AAPL"; 
        // const interval = "5min";
        const apiKey = 'TAUVU8GNGAAT40NE'; // Replace with your API key
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;
    
        try {
          const response = await axios.get(url);
          const timeSeries = response.data[`Time Series (${interval})`];
    
          if (timeSeries) {
            const formattedData = Object.entries(timeSeries).map(([time, values]) => ({
              time,
              open: parseFloat(values['1. open']),
              high: parseFloat(values['2. high']),
              low: parseFloat(values['3. low']),
              close: parseFloat(values['4. close']),
              volume: parseFloat(values['5. volume']),
            }));
            setStockData(formattedData);
            setError(null);
          } else {
            setError('No data found. Please check the stock symbol or interval.');
            setStockData([]);
          }
        } catch (err) {
          setError('Error fetching data. Please try again later.');
          setStockData([]);
        }
      };
    

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Stock Chart Viewer</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter Stock Symbol (e.g., IBM)"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <select value={interval} onChange={(e) => setInterval(e.target.value)} style={{ padding: '10px' }}>
          <option value="1min">1 Minute</option>
          <option value="5min">5 Minutes</option>
          <option value="15min">15 Minutes</option>
          <option value="30min">30 Minutes</option>
          <option value="60min">1 Hour</option>
        </select>
        <button onClick={fetchStockData} style={{ padding: '10px', marginLeft: '10px' }}>
          Fetch Data
        </button>
      </div>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <InvChart data={stockData} symbol={symbol} interval={interval} />}
    </div>
  )
}

export default ChartInt