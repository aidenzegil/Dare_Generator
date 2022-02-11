import {useState} from 'react'
import Popup from './Popup'
import './boxStyles.css'
import {getDatabase, ref, update, onValue } from "firebase/database"
import '../../config'
import dareGrabber from '../../Utils/DareGrabber'

const Box = () => {
  const [HomeDivShown, setHomeDivShown] = useState(true)
  
  const [popupOpen, setPopupOpen] = useState(false);
  
  const [daresList, setDaresList] = useState({})
  
  const [newDare, setNewDare] = useState("")

  const [dare, setDare] = useState('Try Again')

  const db = getDatabase();
  const daresRef = ref(db, 'dares')

   window.onload = 
    function getDaresList() {
      onValue(daresRef, (snapshot) => {
        const newDaresList = Object.values(snapshot.val())
        console.log(newDaresList)
        setDaresList(newDaresList)
      })
    }



    const togglePopup = () => {
      setPopupOpen(!popupOpen);
    }
    function divSwitch() {
      if(HomeDivShown !== true) 
      setHomeDivShown(true)
      else
      setHomeDivShown(false)
    }

    function writeDare() {
      update(daresRef, {
        [newDare]:newDare
      })
      setNewDare("")
    }

    function readDare() {
      const newDare = dareGrabber(daresList)
      setDare(newDare)
    }


    const handleInput = (event) => {
      setNewDare(event.target.value)
    }

    const DareAndPopup = () => {
        const newDare = dareGrabber(daresList)
        setDare(newDare)
        setPopupOpen(!popupOpen)
      }
    


      return (
        <div>
          {HomeDivShown ? 
             (<div id="HomeDiv" className="Container">
              <header className="Words"> Click below to Generate a Dare! </header>
              <button onClick={DareAndPopup} className="GoBtn"> GO! </button>
              <button className="SubmitDareBtn" onClick={divSwitch}> Submit Dare </button>
              {popupOpen && <Popup
              content={<div className="container">   
                <div className="TextWrap"><header className="GetDaredBro"><i> I Dare You to </i></header></div>
                <div className="TextWrap2"><p className="DisplayedDare">{dare}</p></div>
                <button className="NDBtn" onClick={readDare}> New Dare! </button>
                <div className="closeBtnWrap">
                <button className="close-button" onClick={togglePopup}>Back</button>
                </div>
                </div>}
                />}
             </div>) 
             : 
             (<div id="SubmitPage" className="Container2">
                <header className="Words"> Write your Dare Below! </header>
                <input className="Input" maxLength={90} placeholder="Press submit when done =>" onChange={handleInput} value={newDare}/>
                <button className="SubmitBtn" onClick={writeDare}> Submit </button>
                <button className="SubmitDareBtn" onClick={divSwitch}> Back </button>
             </div>)
          }
        </div>
      );
    }

export default Box


