import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [timerNum, setTimerNum] = useState(true)
    const [background, setBackground] = useState()
    const [other, setOther] = useState()
    const [coll, setColl] = useState("")
    // localStorage.setItem('colors_collection_1', JSON.stringify(colors_collection_1))
    // const retrievedCollection = localStorage.getItem("colors_collection_1")
    // background:`${JSON.parse(retrievedCollection)[1].other}`
    //JSON.parse(retrievedCollection)[0].background == null) 

    const [isChecked, setIsChecked] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)
  
    let retrievedCollection = localStorage.getItem("colors_palette")
    retrievedCollection === null && localStorage.setItem('colors_palette', 1)
    function handleChange() {
      setIsChecked(true)
      setIsChecked2(false)
      setIsChecked3(false)
      localStorage.setItem('colors_palette', 1)
    }
    function handleChange2() {
    setIsChecked(false)
    setIsChecked2(true)
    setIsChecked3(false)
    localStorage.setItem('colors_palette', 2)
    }
    function handleChange3() {
      setIsChecked(false)
      setIsChecked2(false)
      setIsChecked3(true)
      localStorage.setItem('colors_palette', 3)
    }
    function handleChangeFavSound(ss) {
      localStorage.setItem("fav_sound", ss)
    }
    
    // here is where you gonna paste
    // this section keeps track of changes
    useEffect(() => {
      setColl(retrievedCollection)
    }, [isChecked, isChecked2, isChecked3])
    
    // this section is responsible for changing the background, clock and line colors
    let colors_collection_number = localStorage.getItem("colors_palette")
    function handleBackground(number) { 
      if (colors_collection_number == 1) {
        
          if (number == 1) {
            setBackground("#CD6464")
            setOther("#DC7878")
          } else if (number == 2) {
            setBackground("#B76471")
            setOther("#FF7A91")
          } else if (number == 3) {
            setBackground("#B973AA")
            setOther("#C87DBE")
          }
        } else if (colors_collection_number == 2) {
          if (number == 1) {
            setBackground("#FF9696")
            setOther("#FFB0B0")
          } else if (number == 2) {
            setBackground("#F5965A")
            setOther("#F5A569")
          } else if (number == 3) {
            setBackground("#00A2A2")
            setOther("#02B4CE")
          }
        } else if (colors_collection_number == 3) {
             //https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    //https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
    //https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    //background: "url(https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"
    // background:`${background}`}}
          if (number == 1) {
            setBackground("url(https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed")
            setOther("#C9C9C9")
          } else if (number == 2) {
            setBackground("url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed")
            setOther("#C9C9C9")
        } else if (number == 3) {
            setBackground("url(https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed")
            setOther("#C9C9C9")
          }
        }
      }
    const [trackingNumber, setTrackingNumber] = useState(1)
    return (
        <Context.Provider value={{handleChangeFavSound, background,other, handleBackground, isChecked,setIsChecked, isChecked2, isChecked3, handleChange, handleChange2, handleChange3, retrievedCollection, coll, trackingNumber, setTrackingNumber}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}