
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Videos from './Videos'







function App() {

  return (
    <div>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path= '/' element={<Home/>} />
          <Route path= 'serve' element={<Services/>} /> 
          <Route path= 'abt' element={<About/>} /> 
          <Route path= 'contact' element={<Contact/>} />
          <Route path= 'videos' element={<Videos/>} />
                    
        </Routes>

       <Footer />
      </Router>
    </div>
  
    
  )
}

export default App