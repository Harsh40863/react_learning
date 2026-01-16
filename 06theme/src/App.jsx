import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  const [mode, setMode] = useState(true)

  const toggleMode = useCallback(()=>{
    if(mode===true){
      setColor("black")
      setMode(false)
    }
    else
      {
        setColor("white")
        setMode(true)
      } 
    },[mode])

  

  return (
    < div className='w-full h-screen' style={{backgroundColor:color}} >
      <div className='w-64 mx-auto bg-gray-800 text-white rounded-lg'>
        <div className='px-5 py-5 rounded-lg'>
          <button onClick={toggleMode}>theme</button>
        </div>
      </div>
    </div>
  )
}

export default App
