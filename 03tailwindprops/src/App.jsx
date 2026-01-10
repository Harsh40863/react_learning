import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white rounded-xl mb-4'>Tailwind test</h1>
      <Cards username="harshu"/>
      <Cards username="abhimanyu"/>
              </>
  )
}

export default App
