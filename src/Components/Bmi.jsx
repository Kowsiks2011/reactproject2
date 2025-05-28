import { useState } from 'react';
import './Bmi.css'
const Bmi = () =>{
    const[Weight,setWeight] = useState('')
     const[Height,setHeight] = useState('')
     const[Bmi,setBmi] = useState(null)
     const[Status,setStatus] = useState('')
     const[Prev,setPrev] = useState('')
     const[Sp,setSp] = useState('')

     function Calculate(){
        if(!Weight || !Height || Weight<=0 || Height<=0 ){
            return alert("Please enter valid weight/height (greater than 0)")
        }
        else{
            const heightinmeter = Height/100;
            const BMI = (Weight / (heightinmeter*heightinmeter)).toFixed(1);
             setBmi(BMI)     
             
             if(Bmi<18.5) {
                setStatus('Underweight')

             }
              else if (Bmi>= 18.5 && Bmi< 25){
                 setStatus('Healthy Weight');
              } 
             else if (Bmi>= 25 && Bmi< 30){
                 setStatus('Overweight');

                } 
              else setStatus('Obesity');
        }

     }
     const clear = ()=>{
        setWeight('')
        setHeight('')
        setPrev(Bmi)
        setSp(Status)
        setBmi('')
        setStatus('')
     }

    return<>
    <div className='bmi-container'>
        <div className='bmi-title'>
            <p className='bmi-name'>BMI Calculator</p>
        </div>

        <div className='form'>
        <div> <label>Weight (kg)</label>
        <input type='number' placeholder='Enter Your Weight' id='weight-input' value={Weight} onChange={(e)=>setWeight(e.target.value)}></input>
        </div>
        <div><label>Height (cm)</label>
        <input type='number' placeholder='Enter Your Height in cm' id='height-input' value={Height} onChange={(e)=>setHeight(e.target.value)}></input>
        </div>
      </div>
      <div id='btndiv'> <button id='calcbtn' onClick={Calculate}>Calculate BMI</button></div>
       <div id='btndiv'> <button id='calcbtn' onClick={clear}>Clear</button></div>
     

        <div>
            <div id='status'>BMI Value is : <strong>{Bmi} {Status}</strong></div>
            <div>
                  <div id='status'>Last BMI Value you checked : <strong>{Prev} {Sp}</strong></div>
            </div>
        </div>
        </div></>
}
export default Bmi;