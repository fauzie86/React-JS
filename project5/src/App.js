import React, { useState } from 'react'
import Data from './App.css'
  

  function App() {
    //Belajar Hook
    //holding all the task 

    const [todos, setTodos] = useState([]);

    //hook for gtetting all the data input

    const [newTodo, setnewTodo] = useState([]);

    const Addtodo = () => {
      let newTodos = [...todos, {todo:newTodo.trim()}]
      setTodos(newTodos)
      setnewTodo(" ")
    }


    return (
    <>
    <center>
      <h1>Enter your task</h1>
      <input type='text' placeholder= 'Enter your task' value= {newTodo} onChange={(e)=> setnewTodo(e.target.value)}/>
      <br />
      <button onClick={Addtodo}>save task</button> 
    </center>
    <table>
      <tr>
        <th>All tasks</th>
      </tr>
      {
        todos.map((tod)=>(
          <tr>
            <td>{tod.todo}</td>
          </tr>

        ))
      } 
    </table>
      
    </>
  )  
  }  
  


export default App