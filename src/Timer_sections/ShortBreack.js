import React, {useState, useEffect, useContext} from "react"
import {Context} from "../Context"
import sound_2 from "../sound_2.mp3"

function ShortBreack() {
  const {timeNum, setTrackingNumber, other} = useContext(Context)
  const [buttonName, setButtonName] = useState(false)
  const [audio] = useState(new Audio(sound_2))
  const [playing, setPlaying] = useState(false);
  function handleStart() {
       setButtonName(!buttonName)
  }
  const [ minutes, setMinutes ] = useState(timeNum ? 25 : 5)
  const [seconds, setSeconds ] =  useState(0)
  useEffect(()=>{
    if (buttonName) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(myInterval)
                setButtonName(false)
                setSeconds(2)
                setTrackingNumber(1)
                setPlaying(!playing)
                audio.play()
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      }
    }
  })
    return (
        <>
         <div className="short_breack">
         <div style={{background:`${other}`, border:`${other}`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}} className="clock">
           { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
           }
           </div>
           <button className="pushable">
           <span className="front" style={{background:"white", color:other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}  onClick={handleStart}>{buttonName ? "pause" : "start"}</span>
          </button>
         </div>
        </>
    )
}

export default ShortBreack