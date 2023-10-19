import React from 'react'
import { useState } from 'react';
function GuessNumber() {
    
    const randomNum=Math.floor(Math.random() * 20) + 1;
     console.log(randomNum);
      const [randomNumber, setRandomNumber] = useState(randomNum);
      const [enteredNumber, setEnteredNumber] = useState('');
      const [message, setMessage] = useState('');
    
      const handleInputChange = (event) => {
        setEnteredNumber(event.target.value);
      }

      function handleSubmit()  {
    
        if (enteredNumber === '') {
          setMessage('Please enter a number.');
        } else {
        //   const guess = parseInt(enteredNumber, 10);
    
          if (enteredNumber > randomNumber) {
            setMessage('Number is too large. Try again.');
          } else if (enteredNumber < randomNumber) {
            setMessage('Number is too small. Try again.');
          } else {
            setMessage('Congratulations! You guessed the correct number!');
          }
        }
      }
  return (
    <div>

<h1>Number Guessing Game</h1>
      <p>{message}</p>
     
        <input
          type="number"
          value={enteredNumber}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Guess</button>
    </div>
  )
}

export default GuessNumber
