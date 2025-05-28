import { useState } from 'react'
import './Wordcount.css'
const Wordcount = () =>{
    const[Input,setInput] = useState('')
    const count = Input.trim().length;
    return<>
    <div className='wccontainer'>
    <p className='word-title'>Word Counter</p>

    <div className='count-container'>
        <textarea type='text' value={Input} onChange={(e)=>setInput(e.target.value)}></textarea>
       <div> 
        <p id='count-value'>Count is : {count}</p>
        </div>
        
        <button className='clearbtn' onClick={()=>setInput('')}>Clear</button>

        </div>

        </div></>
}
export default Wordcount;