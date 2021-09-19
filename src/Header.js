import React, {useState, useContext} from "react"
import Modal from 'react-modal'
import {Context} from "./Context"
function Header() {
  let pomo = localStorage.getItem("pomo")
  let hours = pomo && ~~((pomo.length * 25)/60)
  let minutes = hours % 60
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)
  const {isChecked,
         isChecked2,
         isChecked3,
         handleChange,
         handleChange2,
         handleChange3,
         retrievedCollection, other, handleChangeFavSound} = useContext(Context)
  function closeModal() {
    setIsOpen(false);
    setIsOpen2(false)
  }
  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:"55vw",
    height:"90vh",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color:"black",
    textAlign:"start"
  },
}
  const [favSound, setFavSound] = useState("sound_number_1")
  function handleFavSound(event) {
    setFavSound(event.target.value)
  }
  handleChangeFavSound(favSound) 
  return (
      <>
       <div className="header" style={{borderBottom: "3px solid" + other, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
         <div className="header_title">pomodoro</div>
         <div className="header_buttons">
           <div className="header_buttons_settings" style={{background:other}} onClick={() => setIsOpen(true)}>styling</div>
           <div className="header_buttons_statics" style={{background:other}} onClick={() => setIsOpen2(true)}>statitcs</div>
         </div>
       </div>
        {
         // localStorage.getItem('Name')
        }
       
        {
          // settings part
        }
       <Modal
         ariaHideApp={false}
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
         contentLabel="Example Modal"
        >
        <div>
          <h3 style={{color:other}}>time to choose your best style !</h3>
          <div><input type="checkbox" name="isChecked" checked={(retrievedCollection == 1 || retrievedCollection == null)? true : isChecked} onChange={handleChange}/>#colors_palette_number_1</div>
          <div><input type="checkbox" name="isChecked" checked={retrievedCollection == 2 ? true : isChecked2} onChange={handleChange2}/>#colors_palette_number_2</div>
          <div><input type="checkbox" name="isChecked" checked={retrievedCollection == 3 ? true : isChecked3} onChange={handleChange3}/>#colors_palette_number_3</div>
        </div>
           {
           // <div>
           //     <select 
           //       value={favSound}           
           //       onChange={handleFavSound}
           //       name="favSound"
           //   >
           //       <option value="sound_number_1">#first_number_1</option>
           //       <option value="sound_number_2">#sound_number_2</option>
           //       <option value="sound_number_3">#sound_number_3</option>
           //       <option value="sound_number_4">#sound_number_4</option>
           //     </select>
           //    </div>
           }
        <button className="header_buttons_settings" style={{background:other, border:other, margin:"30px auto 0 auto", display:"flex", alignItems:"center"}} onClick={() => setIsOpen(false)}>close me</button>
      
       </Modal>
        
       {
          // statics part
       }
        
       <Modal
         ariaHideApp={false}
         isOpen={modalIsOpen2}
         onRequestClose={closeModal}
         style={customStyles}
         contentLabel="Example Modal"
        >
        <h2 style={{color:other}}>hi I'm statics</h2>
        <div>
          <p>total number of finished pomodoros :</p>
          {pomo ? pomo.length + " pomos 🍅" : 0 + "you didn't finish a pomo yet 🍅"}
          <p>total number of working hours :</p>
          {pomo && (pomo.length *25 > 60) ? ~~((pomo.length * 25)/60) + " hours" + (~~((pomo.length * 25)/60) % 60 !== 0 ? " and " + ~~((pomo.length * 25))%60 + " minutes 🕖" : "") : "you didn't finish an hour yet" }
        </div>
        <button className="header_buttons_settings" style={{background:other, border:other, margin:"30px auto 0 auto", display:"flex", alignItems:"center"}} onClick={() => setIsOpen2(false)}>close me</button>
       </Modal>
      </>
  )  
}

export default Header