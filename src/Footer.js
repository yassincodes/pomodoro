import React, {useContext} from "react"
import {Context} from "./Context"

function Footer() {
  const {other} = useContext(Context)
  return (
      <>
       <div className="footer" style={{borderTop: "3px solid" + other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}> 
         <div><h3>pomodoro timer features</h3></div>
         <div>
          <ul>
           <li>Item One</li>
           <li>Item Two</li>
           <li>Item Thre</li>
           <li>Item One</li>
           <li>Item Two</li>
           <li>Item Thre</li>
           <li>Item One</li>
           <li>Item Two</li>
           <li>Item Thre</li>
          </ul>
         </div>
         <div><h3>how does it work</h3></div>
         <div>
           first you gonna do ..
         </div>
       </div>
      </>
  )  
}

export default Footer