import React, {useContext, useState} from "react"
import {Context} from "./Context"
import sound_2 from "./sound_2.mp3"
function Footer() {
  const {other} = useContext(Context)
  const [audio] = useState(new Audio(sound_2))

  return (
      <>
       <div className="footer" style={{borderTop: "3px solid" + other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}> 
         <div><h3>pomodoro timer features</h3></div>
         <div>
          <ul>
           <li>customize the look of the web app as you want</li>
           <br />
           <li>number of pomos and working hours is stored in local storage</li>
           <br />
           <li>there is a notification sound 😁 <span style={{color:"blue", cursor:"pointer"}} onClick={() => audio.play()}>Listen</span></li>
           <br />
           <li>after each 25 minutes of work you'll get a 5 minutes of rest</li>
           <br />
           <li>after 4 pomos you'll get 15 minutes of rest</li>
          </ul>
         </div>
       </div>
      </>
  )  
}

export default Footer