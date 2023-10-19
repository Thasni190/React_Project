import React from 'react'
import { useState } from 'react';

function Second() {
const [value,setValue]=useState('');
const [todo,settodo]=useState([])

function valuechange(e){
  setValue(e.target.value)
}
  
function additem(){
settodo([...todo,value])

}


 

  

  return (
    <div>
      <input type="text"
      value={value}
      onChange={valuechange} />

      <button onClick={additem}>Add</button>
      {
        todo.map(item=>{
          return(
            <div>{item}</div>
          )
        })
      }

      
    </div>
  )
}

export default Second
