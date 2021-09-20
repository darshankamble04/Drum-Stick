import React ,{useState} from 'react'
import './App.css';

const ban1 = {
  audio7 : new Audio("https://cutt.ly/yEw6VOu"),
  audio8 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"),
  audio9 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"),
  audio4 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"),
  audio5 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
  audio6 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
  audio1 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"),
  audio2 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"),
  audio3 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
}

export default function App() {

const [info, setInfo] = useState("")
const [power, setPower] = useState("Power Off")
const [val, setVal] = useState(0.5)

const slider = (e) => {
    setVal(((e.target.value) / 100).toPrecision(3));
    setInfo("Volume")
}
const enginOn = () => {
  if (power === "Power Off") {
    setPower("Power On")
  } else {
    setPower("Power Off")
  }
  setInfo("")
}
const toggleColor = (btn)=>{
  setTimeout(() => {
    btn.style.boxShadow = "7px 7px 10px 0px black"
    btn.style.backgroundColor = "rgb(141, 141, 141)"
  }, 150);
}
const togglePlay7 = () => {
  ban1.audio7.play()
  setInfo("Heater-1")
  const btn7 = document.getElementById('btn7') 
  btn7.style.boxShadow = "inset 7px 7px 10px 0px black"
  btn7.style.backgroundColor = "orange"
  toggleColor(btn7)
  
}
const togglePlay8 = () => {
    ban1.audio8.play()
    setInfo("Heater-2")
    const btn8 = document.getElementById('btn8') 
    btn8.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn8.style.backgroundColor = "orange"
    toggleColor(btn8)
}
const togglePlay9 = () => {
    ban1.audio9.play()
    setInfo("Heater-3")
    const btn9 = document.getElementById('btn9') 
    btn9.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn9.style.backgroundColor = "orange"
    toggleColor(btn9)
}
const togglePlay4 = () => {
    ban1.audio4.play()
    setInfo("Heater-4")
    const btn4 = document.getElementById('btn4') 
    btn4.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn4.style.backgroundColor = "orange"
    toggleColor(btn4)
}
const togglePlay5 = () => {
    ban1.audio5.play()
    setInfo("Heater-5")
    const btn5 = document.getElementById('btn5') 
    btn5.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn5.style.backgroundColor = "orange"
    toggleColor(btn5)
}
const togglePlay6 = () => {
    ban1.audio6.play()
    setInfo("Heater-6")
    const btn6 = document.getElementById('btn6') 
    btn6.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn6.style.backgroundColor = "orange"
    toggleColor(btn6)
}
const togglePlay1 = () => {
    ban1.audio1.play()
    setInfo("Kick n Hat")
    const btn1 = document.getElementById('btn1') 
    btn1.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn1.style.backgroundColor = "orange"
    toggleColor(btn1)
}
const togglePlay2 = () => {
    ban1.audio2.play()
    setInfo("RP4 KICK 1")
    const btn2 = document.getElementById('btn2') 
    btn2.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn2.style.backgroundColor = "orange"
    toggleColor(btn2)
}
const togglePlay3 = () => {
    ban1.audio3.play()
    setInfo("Cev H2")
    const btn3 = document.getElementById('btn3') 
    btn3.style.boxShadow = `inset 7px 7px 10px 0px black`
    btn3.style.backgroundColor = "orange"
    toggleColor(btn3)
}


  window.addEventListener("keydown",(e)=>{
      const keyVal = e.key;
      switch(keyVal){
        case "7":
          togglePlay7();
          break;
        case "8":
          togglePlay8();
          break;
        case "9":
          togglePlay9();
          break;
        case "4":
          togglePlay4();
          break;
        case "5":
          togglePlay5();
          break;
        case "6":
          togglePlay6();
          break;
        case "1":
          togglePlay1();
          break;
        case "2":
          togglePlay2();
          break;
        case "3":
          togglePlay3();
          break;
        default:
          break;
      }
    });

    for(let audio in ban1){
      ban1[audio].volume = val
    }
    const togglePower = power === "Power Off"? true : false
   
  
  return (
      <div className="body flex-box">
          <div className="container flex-box">
            <div className="keyboard flex-box">
              <div className="keys">
                  <button id="btn7" onClick={togglePlay7} disabled={togglePower} >7</button>
                  <button id="btn8" onClick={togglePlay8} disabled={togglePower} >8</button>
                  <button id="btn9" onClick={togglePlay9} disabled={togglePower} >9</button>
                  <button id="btn4" onClick={togglePlay4} disabled={togglePower} >4</button>
                  <button id="btn5" onClick={togglePlay5} disabled={togglePower} >5</button>
                  <button id="btn6" onClick={togglePlay6} disabled={togglePower} >6</button>
                  <button id="btn1" onClick={togglePlay1} disabled={togglePower} >1</button>
                  <button id="btn2" onClick={togglePlay2} disabled={togglePower} >2</button>
                  <button id="btn3" onClick={togglePlay3} disabled={togglePower} >3</button>
              </div>
            </div>
            <div className="funcs">
              
              <h4 style={{margin: "42px auto"}} className="m-auto">{power}</h4>
              <label className="switch m-auto">
                <input type="checkbox" onChange={enginOn} />
                <span className="slider"></span>
              </label>
              <input type="text" className="m-auto" id="info" value={info} disabled/>
              <input type="range"className="m-auto" id="volume"step=".01" onChange={slider} />
              </div>
          </div>
        </div>      
       
  )
}






