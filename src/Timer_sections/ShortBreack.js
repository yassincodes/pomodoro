import React, {useState, useEffect, useContext} from "react"
import {Context} from "../Context"
import sound_1 from "./notification_sounds/sound_1.mp3"
import sound_2 from "./notification_sounds/sound_2.mp3"
import sound_3 from "./notification_sounds/sound_3.mp3"
import sound_4 from "./notification_sounds/sound_4.mp3"

function ShortBreack() {
  const {trackingNumber, setTrackingNumber} = useContext(Context)
  const [buttonName, setButtonName] = useState(false)
  function handleStart() {
       setButtonName(!buttonName)
  }
  const [ minutes, setMinutes ] = useState(0)
  const [seconds, setSeconds ] =  useState(2)
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
         <div className="clock">
           { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
           }
           </div>
           <button className="pushable">
           <span className="front" onClick={handleStart}>{buttonName ? "pause" : "start"}</span>
          </button>
         </div>
        </>
    )
}

export default ShortBreack