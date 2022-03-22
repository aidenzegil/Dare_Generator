import {useState} from 'react'
import Popup from './Popup'
import {getDatabase, ref, update, onValue } from "firebase/database"
import '../../config'
import dareGrabber from '../../Utils/DareGrabber'

const Box = () => {
  const [HomeDivShown, setHomeDivShown] = useState(true);

  const [popupOpen, setPopupOpen] = useState(false);

  const [daresList, setDaresList] = useState({});

  const [newDare, setNewDare] = useState("");

  const [dare, setDare] = useState("Try Again");

  const db = getDatabase();
  const daresRef = ref(db, "dares");

  window.onload = function getDaresList() {
    onValue(daresRef, (snapshot) => {
      const newDaresList = Object.values(snapshot.val());
      console.log(newDaresList);
      setDaresList(newDaresList);
    });
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  function divSwitch() {
    if (HomeDivShown !== true) setHomeDivShown(true);
    else setHomeDivShown(false);
  }

  function writeDare() {
    update(daresRef, {
      [newDare]: newDare,
    });
    setNewDare("");
  }

  function readDare() {
    const newDare = dareGrabber(daresList);
    setDare(newDare);
  }

  const handleInput = (event) => {
    setNewDare(event.target.value);
  };

  const DareAndPopup = () => {
    const newDare = dareGrabber(daresList);
    setDare(newDare);
    setPopupOpen(!popupOpen);
  };

return (
        <div style={{maxWidth: '100%'}}>
          {HomeDivShown ? 
            (<div id="HomeDiv" className="Container">
              <header className="TitleText" style={{flex: 2}}> Click below to Generate a Dare! </header>
              <button style={{flex: 2, width: '50%'}} onClick={DareAndPopup} className="Btn"> GO! </button>
              <div style={{flex: 1}} className ="NavBtnWrap">
                <button className="Btn" onClick={divSwitch}> Submit Dare </button>
              </div>
              {popupOpen && <Popup content={
                <div>   
                  <div>
                    <header className="Text"><i> I Dare You to... </i></header>
                  </div>
                  <div className="DareWrap">
                    <p className="GeneratedDareText">{dare}</p>
                  </div >
                  <div className="PopupBtnWrap">
                    <button className="Btn" onClick={readDare}> New Dare! </button>
                    <button style={{marginLeft: '5vw'}}className="Btn" onClick={togglePopup}>Back</button>
                  </div>
                </div>}
              />}
            </div>) 
              : 
              (<div id="SubmitPage" className="Container">
                <header className="TitleText" style={{flex: 2}}> Write your Dare Below! </header>
                <div style={{flex: 2}}>
                  <input className="Input" maxLength={90} placeholder="Press submit when done =>" onChange={handleInput} value={newDare}/>
                  <button className="SubmitBtn" onClick={writeDare}> Submit </button>
                </div>
                <div className="NavBtnWrap">
                  <button style={{flex: 1}} className="Btn" onClick={divSwitch}> Back </button>
                </div>
              </div>)}
            </div>
        )
      }

export default Box;
