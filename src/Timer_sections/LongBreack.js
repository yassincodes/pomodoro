import React, {useState, useEffect, useContext} from "react"
import {Context} from "../Context"
import sound_1 from "./notification_sounds/sound_1.mp3"
import sound_2 from "./notification_sounds/sound_2.mp3"
import sound_3 from "./notification_sounds/sound_3.mp3"
import sound_4 from "./notification_sounds/sound_4.mp3"

function LongBreack() {
  const {trackingNumber, setTrackingNumber, other} = useContext(Context)
  const [buttonName, setButtonName] = useState(false)
  const [audio] = useState(new Audio(sound_1))
  const [playing, setPlaying] = useState(false);
    function handleStart() {
         setButtonName(!buttonName)
    }
    const [ minutes, setMinutes ] = useState(0)
    const [seconds, setSeconds ] =  useState(1)
    
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
                  setSeconds(1)
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
         <div className="long_breack">
           <div style={{background:`${other}`, border:`${other}`}} className="clock">
           { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
           }
           </div>
           <button className="pushable" >
           <span className="front" style={{background:"white", color:other}}  onClick={handleStart}>{buttonName ? "pause" : "start"}</span>
          </button>
         </div>
        </>
    )
}

export default LongBreack