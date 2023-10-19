import React from 'react'
import { useState } from 'react';

function Todo() {

    const [todos, setTodos] = useState([]);
    const [inpvalue, setInpvalue] = useState('');

    const handleTaskChange = (e) => {
      setInpvalue(e.target.value);
      };
  
    const addTodo = () => {
   
        setTodos([...todos, inpvalue]);
        setInpvalue('');

    };
  
    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  return (
    <div>
        <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inpvalue}
          onChange={handleTaskChange} // Use the external function
        //   onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Todo
