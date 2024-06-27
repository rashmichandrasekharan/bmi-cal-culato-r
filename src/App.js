import './App.css';
import './index.css'
import React from 'react';
import { useState } from 'react';
function App() {

const [weight,setWeight]=useState(0)
const [height,setHeight]=useState(0)
const [bmi,setBmi]=useState('')
const [message,setMessage]=useState('')




let calcBmi=(event)=>{
event.preventDefault()


if(weight===0 || height===0){
  alert('please enter a valid weight and height')
} 
else{
  let bmi=(weight/ (height*height)*703)
  setBmi(bmi.toFixed(1))

  if(bmi<25){
    setMessage('You are underweight')
  }
  else if(bmi>=25 && bmi<30){
setMessage('You are healthy')
  }
  else{
    setMessage('You are overweight')
  }

}


}
let imgsrc;
if(bmi<1){
  imgsrc=null
} else{
  if(bmi<25){
    imgsrc=require('../src/assets/skinny.webp')
  }
  else if(bmi>=25 && bmi<30){
    imgsrc=require('../src/assets/healthy.png')
  }
  else{
    imgsrc=require('../src/assets/overweight.jpg')
  }
}



let reload=()=>{
  window.location.reload()
}


  return (
    <div className="App align-items-center justify-content-center" style={{marginLeft:'420px', marginTop:'50px'}}>
    <div className='container'>
<h2 className='center'>BMI Calculator</h2>
   <form onSubmit={calcBmi}>
    <div>
      <label>Weight (lbs) </label>
      <input value={weight} onChange={(event)=>setWeight(event.target.value)}/>
    </div>
    <div>
      <label>Height (in) </label>
      <input value={height} onChange={(event)=>setHeight(event.target.value)}/>
    </div>
    <div className='d-flex '>
    <div >
      <button className='btn  ' type='submit'  style={{marginLeft:'120px'}}>Submit</button>
      <button className='btn btn-outline' onClick={reload} style={{marginLeft:'250px', marginTop:'-50px'}} type='submit'>Reload</button>
    </div>
    </div>
   </form>
   <div className='center'>
    <h3>Your BMI is:{bmi}</h3>
    <p>{message}</p>
   </div>
   <div className='img-container'>
    <img src={imgsrc} alt=''/>

   </div>
    </div>
    </div>
  );
}

export default App;
