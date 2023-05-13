import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(false);
    
    let interval = useRef();;
    useEffect(()=>{
        if(timer){
            interval.current = setInterval(()=>{
                setTime(prec=>prec+10);
            },10)
        }else{
            clearInterval(interval.current);
        }
        return () =>{console.log("stop timer"); clearInterval(interval.current);}
    },[timer])

  return (
    <div>
        <div>
            <span> {("0" + Math.floor( (time / 60000) % 60)).slice(-2)}</span>
            <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            <span> {("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <button onClick={()=>{setTimer(true)}}>start</button>
        <button onClick={()=>{setTimer(false)}}>pause</button>
        <button onClick={()=>{setTimer(true)}}>resume</button>
        <button onClick={()=>{setTime(0);setTimer(false)}}>reset</button>
    </div>
  )
}

export default Stopwatch
