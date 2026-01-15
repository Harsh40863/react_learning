import { useState ,useCallback,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+="0123456789"
    }
    if(specialCharAllowed){
      str+="!@#$%^&*()_+"
    }
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length);
      pass+=str.charAt(index);
    }
    setPassword(pass);
  },[length,numberAllowed,specialCharAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,specialCharAllowed,passwordGenerator])

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl p-6 space-y-4">

        <h1 className="text-2xl font-semibold text-center text-orange-500">
  Password Generator
</h1>

<input
  type="text"
  readOnly
  value={Password}
  placeholder="Generated password"
  className="w-full h-12 px-4 rounded-lg bg-gray-100 text-black focus:outline-none"
/>

{/* Length slider */}
<div className="flex flex-col space-y-2">
  <label className="text-white font-medium">
    Length: <span className="text-orange-500">{length}</span>
  </label>
  <input
    type="range"
    min="6"
    max="20"
    className="w-full accent-orange-500"
    onChange={(e)=>{setLength(e.target.value)}}
  />
</div>

{/* Checkboxes */}
<div className="flex flex-col space-y-2 text-white">

  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="accent-orange-500 w-4 h-4"
      onChange={()=>{setNumberAllowed((prev)=>!prev)}}
    />
    <span>Include Numbers</span>
  </label>

  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="accent-orange-500 w-4 h-4"
      onChange={()=>{setSpecialCharAllowed((prev)=>!prev)}}
    />
    <span>Include Special Characters</span>
  </label>

</div>



      </div>
    </div>

    </>
  )
}

export default App
