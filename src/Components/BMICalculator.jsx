import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue);
  };

  return (
    <div>
      <label>Height (cm): </label>
      <input type="number" 
      value={height}
       onChange={(e) => setHeight(e.target.value)} />

      <label>Weight (kg): </label>
      <input type="number" 
      value={weight} 
      onChange={(e) => setWeight(e.target.value)} />

      <button onClick={calculateBMI}>Calculate BMI</button>

      {/* {bmi !== null && <p>Your BMI is: {bmi.toFixed(2)}</p>} */}
      <p>{bmi}</p>
    </div>
  );
}

export default BMICalculator;
