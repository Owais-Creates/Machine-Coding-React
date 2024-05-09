// CREATE A TIMER WHICH TAKES AN INPUT AND IMPLEMENT A TIMER OF IT. 
// INCLUDE START , STOP , RESUME AND STOP FUNCTIONALITY TOO.

import React, { useEffect, useState } from 'react'
import TimerInput from './components/TimerInput'
import CountDown from './components/CountDown';

const App = () => {

  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timerId, setTimerId] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  const handleStart = () => {
    if ((hours < 0 || isNaN(hours)) || (minutes < 0 || isNaN(minutes)) | (seconds < 0 || isNaN(seconds))) {
      alert('Please enter valid numbers')
      return;
    } else {
      setIsStart(prev => !prev);
    }
  }

  const handleInput = (e) => {
    let id = e.target.id;
    let value = parseInt(e.target.value);

    if (id === "hours") {
      setHours(value);

    } else if (id === "minutes") {
      setMinutes(value);

    } else {
      setSeconds(value);
    }
  }

  const timerReset = () => {
    clearInterval(intervalId);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  const runTimer = (sec, min, hr, intervalId) => {
    if (sec > 0) {
      setSeconds(prevSec => prevSec - 1);

    } else if (sec === 0 && min > 0) {
      setMinutes(prevMin => prevMin - 1);
      setSeconds(59);

    } else if (hr > 0) {
      setHours(prevHr => prevHr - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      timerReset();
      alert("timer completed");
      clearInterval(timerId)
      return;
    }
  }


  useEffect(() => {
    let intervalId;

    if (isStart) {
      intervalId = setInterval(() => {
        runTimer(seconds, minutes, hours, intervalId)
      }, 1000)
      setTimerId(intervalId);
    }

    return () => clearInterval(intervalId);

  }, [hours, minutes, seconds, isStart])

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours)
  }

  const handlePause = () => {
    setIsPaused(prev => !prev);
    clearInterval(timerId);
  }

  const handleReset = () => {
    clearInterval(timerId); 
    setIsStart(false); 
    setHours(0); 
    setMinutes(0); 
    setSeconds(0); 
  };
  

  return (
    <>
      <div className='flex justify-center items-center w-full h-screen bg-zinc-300 flex-col gap-5' >
        <h1 className='text-4xl font-bold font-sans text-zinc-700' >Countdown Timer</h1>
        {!isStart
          ?
          (<TimerInput handleStart={handleStart} handleInput={handleInput} />)
          :
          (<CountDown handlePause={handlePause} handleResume={handleResume} handleReset={handleReset} isPaused={isPaused} hours={hours} minutes={minutes} seconds={seconds} />)}

      </div>
    </>
  )
}

export default App