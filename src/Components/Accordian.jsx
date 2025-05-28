import { useState } from 'react'
import './Accordian.css'
const Accordian = () =>{
    const QA = [
        {id:1 ,question:"Q: What is React's component architecture?" , answer:"A: React applications are built using reusable, isolated pieces called components that manage their own state and UI."  },
        {id:2 ,question:"Q: Can child components modify their props?",answer:"A: No, props are immutable - children cannot modify the props they receive."},
        {id:3 ,question:"Q: What is state in React?",answer:"A: State is mutable data that belongs to a component and can change over time, triggering re-renders."},
        {id:4 ,question:"Q: What is the Virtual DOM?",answer:"A: React's in-memory representation of the actual DOM for efficient updates."},
        {id:5 ,question:"Q: Why is Virtual DOM important?",answer:"A: It minimizes direct DOM manipulations through a diffing algorithm."},
        {id:6 ,question:"Q: Which is preferred in modern React?",answer:"A: Function components with Hooks (since React 16.8)."}
        
    ]
   const[Visible,setVisible] = useState (null)

    function dropdown(id){
    setVisible(Visible === id ? null : id)

    }

    return<>
    <div className="container">
    <h1>FAQs</h1>
    <div className="sub-container">
        {QA.map((qa)=>(
            <div className={`section ${Visible === qa.id ? "active" : ''}`} key={qa.id}>
                {/* dont use Question inside - because each question has different */}
                <div className="Q" onClick={()=>dropdown(qa.id)}>{qa.question}</div>
                <div className="A">{qa.answer}</div>
            </div>
        ))}
    </div>
    </div>

    </>
}

export default Accordian;