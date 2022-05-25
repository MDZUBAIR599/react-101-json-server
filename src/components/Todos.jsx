import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Todos() {
    const[newtodo, setnewtodo]=useState('');
    const [todos, setTodos]=useState([]);
    const saveinfo=()=>{
        fetch("https://m6g3bt.sse.codesandbox.io/Todos",{
            method: "POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({
                text:newtodo,
                isComplete: false,
            })
        })
        .then((r)=> r.json())
        .then((d)=>{
            setnewtodo("");
        });
    };

    useEffect(()=>{
        fetch("https://m6g3bt.sse.codesandbox.io/Todos?_page=1&_limit=4")
        .then((r)=> r.json())
        .then((d)=>{
          setTodos(d);
        });
      },[]);
  return (
    <div>
       <div>
         <input 
         value ={newtodo}
         onChange={({target})=>setnewtodo(target.value)}/>
         <button onClick={saveinfo}>+</button>
         {todos.map((todo)=>(
           <div key={todo.id}>{todo.text}</div>
           ))}
       </div>
    </div>
  )
}

export default Todos
