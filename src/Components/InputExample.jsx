import React, { useState } from 'react';

function InputExample() {

  const [inputValue, setInputValue] = useState('');

  // Create a function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Input Example</h1>
      <input
        type="text"
        value={inputValue}    // Use the state variable as the value
        onChange={handleInputChange} // Call the handler on change
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default InputExample;
