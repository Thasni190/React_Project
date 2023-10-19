import React from 'react'
import  { useState } from 'react';

function FirstBook() {
  // const task=['task1','task2','task3'];
  const task=[
    {name:"task1",id:1,status:"True"},
    {name:"task2",id:2,status:"false"},
    {name:"task3",id:3,status:"True"},
    {name:"task4",id:4,status:"false"},
  ]
  const[state,setState]=useState(task);

  function remove(){
    setState([]);
  }

  function refresh(){
    setState(task)
  }

  // function removeitem(id) {
  //   const updatedState = state.filter(item => item.id !== id);
  //   setState(updatedState);
  // }
  return (
    <div>
      {
        state.map(tsk=>{
          return(
            <div>
              <h1>Name: {tsk.name}</h1>
              <h2>Id: {tsk.id}</h2>
              <h3>Status: {tsk.status}</h3>
              {/* <button onClick={() => removeitem(tsk.id)}>Remove</button> */}
              </div>
          )
        })
      }
      
      <button onClick={remove}>Remove All</button>
      <button onClick={refresh}>Refresh</button>
    </div>
  )
}

export default FirstBook
