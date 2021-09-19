import React, {useContext, useState} from "react"
import PomodoroTimer from "./Timer_sections/PomodoroTimer"
import ShortBreack from "./Timer_sections/ShortBreack"
import LongBreack from "./Timer_sections/LongBreack"
import {Context} from "./Context"

function Timer() {
    const {background, handleBackground, trackingNumber, setTrackingNumber} = useContext(Context)
    handleBackground(trackingNumber)
    return (
        <>
         <div className="timer">
          <div onClick={() => setTrackingNumber(1)}>work time</div>
          <div onClick={() => setTrackingNumber(2)}>short breack</div>
          <div onClick={() => setTrackingNumber(3)}>long breack</div>
         </div>
         <div>
          {trackingNumber === 1 && <PomodoroTimer />}
          {trackingNumber === 2 && <ShortBreack />}
          {trackingNumber === 3 && <LongBreack />}
         </div>
        </>
    )
}

export default Timer