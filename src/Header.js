import React, {useState, useContext} from "react"
import Modal from 'react-modal'
import {Context} from "./Context"
function Header() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)
  const {isChecked,
         isChecked2,
         isChecked3,
         handleChange,
         handleChange2,
         handleChange3,
         retrievedCollection} = useContext(Context)
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
    width:"85vw",
    height:"70vh",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color:"black",
    textAlign:"start"
  },
}
  return (
      <>
       <div className="header">
         <div className="header_title">pomodoro</div>
         <div className="header_buttons">
           <div className="header_buttons_settings" onClick={() => setIsOpen(true)}>settings</div>
           <div className="header_buttons_statics" onClick={() => setIsOpen2(true)}>statitcs</div>
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
          <h3>choose your best style</h3>
          <div><input type="checkbox" name="isChecked" checked={retrievedCollection == 1 ? true : isChecked} onChange={handleChange}/>coulor one</div>
          <div><input type="checkbox" name="isChecked" checked={retrievedCollection == 2 ? true : isChecked2} onChange={handleChange2}/>coulor two</div>
          <div><input type="checkbox" name="isChecked" checked={retrievedCollection == 3 ? true : isChecked3} onChange={handleChange3}/>coulor three</div>
        </div>
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
        <div>hi I'm statics</div>
       </Modal>
      </>
  )  
}

export default Header