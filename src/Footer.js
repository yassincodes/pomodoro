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
           <li>number of pomos and working hours is stored on local storage</li>
           <br />
           <li>there is a notification sound 😁 <span style={{color:"blue", cursor:"pointer"}} onClick={() => audio.play()}>Listen</span></li>
           <br />
           <li>after each 25 minutes of work you'll get a 5 minutes of rest</li>
           <br />
           <li>after 4 pomos you'll get 15 minutes of rest</li>
           <br />
          </ul>
          <div>
            <h3>wann know more about how this web app works ?</h3>
            <p style={{marginBottom:"30px",paddingBottom:"30px", cursor: "pointer"}}>test it on a (5s, 1s, 3s)timer</p>
          </div>
         </div>
       </div>
      </>
  )  
}

export default Footer