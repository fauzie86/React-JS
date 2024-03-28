import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {
  // hook for getting the api
     const [data, setData]= useState([]);

  // hook for running he api   

  useEffect(() =>{ // Belajar ambil data dari API
    //now getting the API
    fetch("https://fakestoreapi.com/products").then((response) =>response.json()).then((data) => {
      setData(data);
    }).catch((e) => {
      console.log("There is something wrong")
    })

  }, [])
  return (
    <>
      <table>
         <tr>
           <th>id</th>
           <th>title</th>
           <th>price</th>
           <th>description</th>
           <th>category</th>
           <th>image</th>
           <th colSpan={2}>rating</th>  
         </tr>
         {
          data.map((ecom)=>(
            <tr>
              <td>{ecom.td}</td>
              <td>{ecom.title}</td>
              <td>{ecom.price}</td>
              <td>{ecom.description}</td>
              <td>{ecom.category}</td>
              <td><img src={ecom.image} width={"40px"}/></td>
              <td>{ecom.rating.rate}</td>
              <td>{ecom.rating.count}</td>
            </tr>

          ))
         }
      </table>

    </>
  )
}

export default App

