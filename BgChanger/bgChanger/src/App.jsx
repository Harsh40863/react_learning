import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor]=useState("olive");
  return (
    <div className="h-screen w-full" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className='fixed flex flex-wrap justify-center gap-8 shadow-lg bg-white px-3 py-2  rounded-3xl text-black'>
          <button onClick={()=>{setColor("Red")}} className="text-white rounded-3xl px-4 py-1 shadow-lg"style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=>{setColor("Green")}} className="text-white rounded-3xl px-4 py-1 shadow-lg"style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>{setColor("Blue")}} className="text-white rounded-3xl px-4 py-1 shadow-lg"style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>{setColor("Orange")}} className="text-white rounded-3xl px-4 py-1 shadow-lg"style={{backgroundColor:"Orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}




export default App
