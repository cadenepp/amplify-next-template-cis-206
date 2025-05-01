'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './SeachStock.css';
// need to ask james why tailwind isn't working

interface StockInterface {
    high: number;
    low: number;
    symbol: string;
    date: string;
}

interface StockDataInterface {
    data: Array<StockInterface>;
}

export default function SearchStock() {

    const [inputSymbol, setInputSymbol] = useState('');
    const [symbol, setSymbol] = useState('');
    const [stockData, setStockData] = useState<StockDataInterface>({data: []});

    useEffect(() => {

        if (!symbol) {
            return;
        }

        async function fetchData() {
            const response = await fetch(`http://api.marketstack.com/v1/eod/latest?access_key=${process.env.NEXT_PUBLIC_API_KEY}&symbols=${symbol}`);
            const data = await response.json();
            setStockData(data);
        }

        fetchData();
    }, [symbol]);

    return (
        <>

        <nav className="about-navbar">
            <div className="navbar-brand">SwingInfo</div>
            <Link href="/" className="navbar-link">Home</Link>
        </nav>

        <div>

            <h1>Search Stock</h1>

            <input
                type="text"
                value={inputSymbol}
                onChange={(e) => setInputSymbol(e.target.value.toUpperCase())}
                placeholder="Enter stock symbol"
            />

            <button onClick={() => setSymbol(inputSymbol)}>Search</button>

            {stockData.data.map((d) => (
                <div key={d.date}>
                    <h2>{d.symbol}</h2>
                    <p>Date: {d.date}</p>
                    <p>Low: {d.low}</p>
                    <p>High: {d.high}</p>
                </div>
            ))}

        </div>
        
        </>
    );
}