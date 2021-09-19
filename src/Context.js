import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [background, setBackground] = useState("rgb(216, 120, 116)")
    const [coll, setColl] = useState("")

    const colors_collection_1 = [
        {background:"#CD6464", other:"#DC7878"},
        {background:"#B76471", other:"#FF7A91"},
        {background:"#B973AA", other:"#C87DBE"}
    ]
    const colors_collection_2 = [
        {background:"#FF4B4B", other:"#FF5A5A"},
        {background:"#F5965A", other:"#F5A569"},
        {background:"#B9D1F2", other:"#B9EBF0"}
    ]
    // localStorage.setItem('colors_collection_1', JSON.stringify(colors_collection_1))
    // const retrievedCollection = localStorage.getItem("colors_collection_1")
    // background:`${JSON.parse(retrievedCollection)[1].other}`
    //JSON.parse(retrievedCollection)[0].background == null) 

    const [isChecked, setIsChecked] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)
  
    let retrievedCollection = localStorage.getItem("colors_palette")
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
    
    // this section keeps track of changes
    useEffect(() => {
      setColl(retrievedCollection)
    }, [isChecked, isChecked2, isChecked3])
    
    // this section is responsible for changing the background, clock and line colors
    function handleBackground(number) { 
      if (isChecked) {
          if (number == 1) {
            setBackground("red")
          } else if (number == 2) {
            setBackground("blue")
          } else if (number == 3) {
            setBackground("purple")
          }
        } else if (isChecked2) {
          if (number == 1) {
            setBackground("black")
          } else if (number == 2) {
            setBackground("white")
          } else if (number == 3) {
            setBackground("yellow")
          }
        } else if (isChecked3) {
          if (number == 1) {
            setBackground("green")
          } else if (number == 2) {
            setBackground("pink")
        } else if (number == 3) {
            setBackground("silver")
          }
        }
      }
    const [trackingNumber, setTrackingNumber] = useState(1)
    return (
        <Context.Provider value={{background, handleBackground, isChecked, isChecked2, isChecked3, handleChange, handleChange2, handleChange3, retrievedCollection, coll, trackingNumber, setTrackingNumber}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}