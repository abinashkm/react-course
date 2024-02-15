import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [number, setNumber] = useState(false);
  const [character,  setCharacter] = useState(false);
  const [password, setPassword] = useState('');

  // we have to create a method that provide logic whenever we change length or checkbox
  const getPassword = useCallback(()=>{
    let pass = " "
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq"

    if(number) str += "1234567890"
    if(character) str += "!@#$%^&*()*+,-./"

    for(let i=1;i<length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt[char]
    }

    setPassword(pass)

  },[length,number,character])


  useEffect(() => {
    getPassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[length, number, character])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          placeholder= "Generate password"
          className=' outline-none w-full py-1 px-3'
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name="" 
            id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev)
            }}
            name=""
            id="" />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={character}
            onChange={() => {
              setCharacter((prev) => !prev)
            }}
            name=""
            id="" />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
