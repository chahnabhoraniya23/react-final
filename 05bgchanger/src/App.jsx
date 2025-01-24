import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')


  return (
    <>
       <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button 
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Yellow')}
              style={{backgroundColor:"Yellow"}}
              >Yellow</button>
              <button 
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Orange')}
              style={{backgroundColor:"Orange"}}
              >Orange</button>
              <button 
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('red')}
              style={{backgroundColor:"red"}}
              >Red</button>
              <button 
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('pink')}
              style={{backgroundColor:"pink"}}
              >pink</button>
              <button
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Purple')}
              style={{backgroundColor:"Purple"}}
              >Purple</button>
              <button
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Blue')}
              style={{backgroundColor:"Blue"}}
              >Blue</button>
              <button
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Green')}
              style={{backgroundColor:"Green"}}
              >Green</button>
              <button
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Brown')}
              style={{backgroundColor:"Brown"}}
              >Brown</button>
              <button
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              onClick={() => setColor('Gray')}
              style={{backgroundColor:"Gray"}}
              >Gray</button>
              
            </div>
          </div>
        </div>

    </>
  )
}

export default App
