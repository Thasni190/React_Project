import React from 'react'
import { useState } from 'react';

function MapOption() {

    const exchangeRates = [
        { from: "USD", to: "EUR", rate: 0.85, },
        {from: "USD",to: "JPY",rate: 110.25, },
        {from: "EUR",to: "GBP",rate: 0.72,  },
        ]


        const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    function tochange(e){
        setToCurrency(e.target.value)
    }
  return (
    <div>

<label>From Currency:</label>
          <select id="fromCurrency"
           value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}>
            {exchangeRates.map((rate,index) => (
                <option key={index} value={rate.from}>
                {rate.from}
              </option>
            ))}
          </select>

       <br />
       <br />
          <label htmlFor="">To Currency</label>
          <select value={toCurrency}  onChange={tochange}>
            {
                exchangeRates.map((arr,index)=>(
                    <option key={index} value={arr.to}>
                        {arr.to}
                    </option>
                ))
            }
          </select>
      
    </div>
  )
}

export default MapOption
