import React, {useState, useEffect, useContext} from "react"
import {Context} from "../Context"
import {Animated} from "react-animated-css";
import sound_1 from "./notification_sounds/sound_1.mp3"
import sound_2 from "./notification_sounds/sound_2.mp3"
import sound_3 from "./notification_sounds/sound_3.mp3"
import sound_4 from "./notification_sounds/sound_4.mp3"
function PomodoroTimer() {
    const {trackingNumber, setTrackingNumber} = useContext(Context)
    const array = ["the first one", "the second one", "the third one", "the forth one"] 
    const [buttonName, setButtonName] = useState(false)
    const [pomoTrack, setPomoTrack] = useState(false)
    // the code that is responsible for notifications
    const [audio] = useState(new Audio(sound_1))
    const [playing, setPlaying] = useState(false);
    function handleStart() {
         setButtonName(!buttonName)
         setPlaying(!playing)
         setPomoTrack(true)
    }

    // the code that is responsible for the timer
    const [ minutes, setMinutes ] = useState(0)
    const [seconds, setSeconds ] =  useState(3)
    let pomo = localStorage.getItem("pomo")

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
                  setPlaying(!playing)
                  setSeconds(3)
                  audio.play()
                  localStorage.setItem("pomo", pomo+1)
                  if (pomo) {
                    if (pomo.length/3 == 1) {
                      setTrackingNumber(3)
                   } else {
                      setTrackingNumber(2)
                   }
                  } else {
                    setTrackingNumber(2)
                  }
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
         <div className="pomodoro_timer">

            <div className="clock">
              { minutes === 0 && seconds === 0
                ? null
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
              }
            </div> 

            <button className="pushable">
             <span className="front" onClick={handleStart}>
              {buttonName ? "pause" : "start"}
             </span>
            </button>

            <div>
              {
                // here will be two condition .. array is empty and buttonName
              }
               {pomoTrack ? 
                array.map((ele, key) => {
                 return ( 
                  <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={700 + key*300} animationOutDuration={700 + key*300} isVisible={true}>
                    <div className="element">
                      {pomo ? 
                      (pomo.length % 4 == key ? <div>🍅 pomo number {key} is on track :)</div> 
                      : ((pomo.length % 4) < key ? <div>😓 pomo number {key} is waiting </div> : <div>🎉pomo number {key} is done</div>))
                      : (key == 0 ? <div>🍅 pomo number 1 is on track :)</div> : <div>😓 pomo number 1 is waiting </div>)}
                    </div>
                  </Animated>)
                  })
                : ""}
            </div>
         </div>
        </>
    )
}

export default PomodoroTimer