import './App.css'
import Accordian from './Components/Accordian'
import Bmi from './Components/Bmi'
import Wordcount from './Components/Wordcount'

function App() {


  return (
    <>
    <div className='accord'>
      <Accordian/>
    </div>

    <div className='bm'>
      <Bmi/>
    </div>

    
    <div className='wc'>
      <Wordcount/>
    </div>

    
    {/* <div className='wc'>
      <Imagegrid/>
    </div> */}

    </>
  )
}

export default App
