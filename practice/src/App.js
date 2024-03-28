
//import React from 'react'
//import { useTimer } from 'use-timer'
//import './App.css'


//function App() {

  //const {time, start, pause, reset, status} = useTimer(); //syntax

  
  //return (
    //<>
    //<center>
    //<div>
    //<button onClick={start}>start</button>
    //<button onClick={pause}>pause</button>
    //<button onClick={reset}>reset</button>
    //</div>
    //<p>Start timer :{time}</p>
    //{status === 'Running' && <p>Running</p>}
    //</center>   
    //</>
  //)
//}

//export default App


import React from 'react';
import { useTimer } from 'use-timer';
import './App.css';

function App() {
  const { time, start, pause, reset, status } = useTimer({ interval: 10 }); // Set interval to 10 milliseconds

  const handleStop = () => {
    pause();
  };

  const formatTime = (milliseconds) => { 
    const seconds = Math.floor(milliseconds / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    return `${String(seconds).padStart(2, '0')}.${String(remainingMilliseconds).padStart(3, '0')}`;
  };

  return (
    <>
      <center>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
        <p>Time: {formatTime(time)}</p>
        {status === 'Running' && <p>Running</p>}
      </center>
    </>
  );
}

export default App;

// pastikan buka terminal baru dan taip npm i use-timer untuk dapatkan function timer


