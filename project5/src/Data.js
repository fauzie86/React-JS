import React from 'react'

function Data(props) {
  return (
    <div>
        <h1>{props.names}</h1>

        <button onClick={()=> props.chk()}>click me</button></div>
    </div>
  )
}

export default Data