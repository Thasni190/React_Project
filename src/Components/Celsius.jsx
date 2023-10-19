import React from 'react'
import  { useState } from 'react';

function Celsius() {
    const [celsius, setCelsius] = useState(10);


    const convertToFahrenheit = () => {
    const fahrenheit = (celsius * 9/5) + 32;
    setCelsius(fahrenheit);
    }
  return (
    <div>
       <p>Celsius: {celsius}°C</p>
      <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
    </div>
  )
}

export default Celsius
