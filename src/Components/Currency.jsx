import React from 'react'
import { useState } from 'react';

function Currency() {
    const exchangeRates = [
            {
              from: "USD",
              to: "EUR",
              rate: 0.85, 
            },
            {
              from: "USD",
              to: "JPY",
              rate: 110.25, 
            },
            {
              from: "EUR",
              to: "GBP",
              rate: 0.72,  },
            {
              from: "GBP",
              to: "AUD",
              rate: 1.79,
            },
            {
              from: "JPY",
              to: "CNY",
              rate: 0.065, 
            },
            {
              from: "EUR",
              to: "CHF",
              rate: 1.09,
            },
            {
              from: "USD",
              to: "CAD",
              rate: 1.25,
            },
            {
              from: "AUD",
              to: "NZD",
              rate: 1.06,
            },
          ];
    
   
console.log(exchangeRates);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');


    const handleConvert = () => {

        const fromRate = exchangeRates.find(rate => rate.from === fromCurrency);
        const toRate = exchangeRates.find(rate => rate.to === toCurrency);
    
        if (!fromRate || !toRate) {
          alert('Currency conversion not supported.');
          return;
        }
        const amountValue = parseFloat(amount);
    
        if (isNaN(amountValue)) {
          alert('Please enter a valid amount.');
          return;
        }
    
        const convertedAmount = (amountValue * (toRate.rate / fromRate.rate)).toFixed(2);
    
        setResult(`${amountValue} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      };
  return (
    <div>

<h1>Currency Converter</h1>
      <div className="converter">
        <div>
          <label htmlFor="fromCurrency">From Currency:</label>
          <select id="fromCurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {exchangeRates.map((arr,index) => (
                <option key={index} value={arr.from}>
                {arr.from}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="toCurrency">To Currency:</label>
          <select id="fromCurrency" value={fromCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {exchangeRates.map((arr,index) => (
                <option key={index} value={arr.to}>
                {arr.to}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button id="convert" onClick={handleConvert}>
            Convert
          </button>
        </div>
      </div>
      {result && (
        <div className="result" id="result">
          <p id="conversionResult">{result}</p>
        </div>
      )}
      
    </div>
  )
}

export default Currency
