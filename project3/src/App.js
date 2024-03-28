
import React, { useState } from 'react'
import userData from './data' //untuk mengambil data API dari data.js
import './App.css'

function App() {
  const [users, setusers] = useState(userData); 

  // ()=> to pass the initial value
  // frst variable is responsible to hold all the data
  // second variable is responsible to manipulate or change the data
  return (
    <>
      {/* <center>
        <h1>You click this  {press}  button times</h1>
        <button onClick={()=> setpress(press + 1)}>Click me!</button>
      </center> */}
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
      </tr>
      {
        users.map((used) =>(
          <tr>
            <td>{used.id}</td>
            <td>{used.name}</td>
            <td>{used.email}</td>
            <td>{used.city}</td>
          </tr>
        ))
      }
    </table>
     
    </>
  )
}

export default App