import {useState, useEffect, useCallback, useRef} from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  // ref hook
  const passwordRef = useRef(null)

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  const passwordGenerator = useCallback(()=>{
    let p = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num){
      str += "0123456789"
    }
    if(char){
      str += "?!@#$%^&*()~/-+_="
    }
    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )
      p += str.charAt(char)     
    }
    setPassword(p)
  },[len,num,char,setPassword])
  
  useEffect(()=>{
    passwordGenerator()
  },[len,num,char,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto my-10 rounded-xl bg-gray-900 shadow-xl border border-gray-700 p-6">
        <h1 className="text-center text-2xl font-semibold text-orange-500 mb-6">
          Password Generator
        </h1>

        <div className="flex items-center rounded-lg overflow-hidden border border-gray-600 focus-within:ring-2">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Generated password"
            className="w-full px-4 py-3 text-gray-900 font-mono text-lg outline-none bg-gray-100"
            ref={passwordRef}
          />
          <button onClick={copyPassword} className='outline-none text-white font-mono px-3 py-0.5 text-lg shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {6}
            max = {50}
            value = {len}
            className='cursor-pointer py-1' 
            onChange={(e)=>{setLen(Number(e.target.value))}}
            />
            <label className='text-white font-mono px-2'>Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={num}
            id='numberInput'
            onChange={()=>{
              setNum((prev)=>!prev)
            }} 
            />
            <label className='text-white font-mono px-1' htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={()=>{
              setChar((prev)=>!prev)
            }} 
            />
            <label className='text-white font-mono px-1' htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
