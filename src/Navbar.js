import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

function Navbar() {
  return (
    <div>
      <div className='container'>
        <ol>
          <li><Link to={'/'}> Home</Link></li>
          <li><Link to ={'serve'}> Services</Link></li>
          <li><Link to={'abt'}> About</Link></li>
          <li><Link to={'contact'}> Contact</Link></li>
          <li><Link to={'videos'}> Videos</Link></li>

          
        </ol>

      </div>
    </div>
  )
}

export default Navbar