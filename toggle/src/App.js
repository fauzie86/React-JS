import React, { useEffect, useState }from 'react' //Pastikan import kena tulis sesuai function yang di gunakan
import './App.css'

function App() {
  const [isDark, setisDark] = useState(false);

  useEffect(()=>{
    document.body.classList.toggle('dark-mode' , isDark);
  },[isDark])

  function togglemode(){
    setisDark(!isDark)
  }
  return (
    <>
    <h1>Dark/light mode toggle</h1>
    <button onClick={togglemode}>{isDark ? 'switch to light mode' : 'switch to dark mode'}</button>

    </>

  )
}

export default App
