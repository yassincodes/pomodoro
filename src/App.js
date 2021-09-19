import React, {useContext, useState, useEffect} from "react"
import Header from "./Header"
import Timer from "./Timer"
import Footer from "./Footer"
import {Context} from "./Context"
function App() {
    const {background, coll} = useContext(Context)
    //https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    //https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
    //https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    //background: "url(https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"
    return (
        <div style={{height:"130vh", background:`${background}`}}>
           <Header />
           <Timer />
           <Footer />
        </div>
    )
}

export default App