import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color,setColor] = useState("bg-black")
  useEffect(()=>{
    document.body.className = ''
    document.body.classList.add(Color);
  },[Color])
  return (
      <div className="flex flex-wrap gap-3 p-4" style={{backgroundColor : Color}}>
        <button className="bg-black text-white px-4 py-2 rounded" onClick={()=>setColor("bg-black")}>Black</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setColor("bg-red-500")}>Red</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setColor("bg-blue-500")}>Blue</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setColor("bg-green-500")}>Green</button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded" onClick={() => setColor("bg-yellow-500")}>Yellow</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded" onClick={() => setColor("bg-pink-500")}>Pink</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => setColor("bg-purple-500")}>Purple</button>
        <button className="bg-white text-black px-4 py-2 rounded border" onClick={() => setColor("bg-white")}>White</button>
      </div>
  )
}

export default App
