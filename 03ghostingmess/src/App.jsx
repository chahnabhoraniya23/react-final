import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)

  function addvalue(){
    setcounter((perv) => perv+1)
    setcounter((perv) => perv+1)
  }

  function removevalue(){
    setcounter((perv) => perv-1)
    setcounter((perv) => perv-1)
    setcounter((perv) => perv-1)
  }

  return (
    <>
     <h1>facebook message {counter}</h1>
     <h2>ghosting mess {counter}</h2>
     <button onClick={addvalue}>add</button>{" "}
     <button onClick={removevalue}>remove</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
