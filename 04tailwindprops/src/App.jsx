import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-container">
        <Card username = "chahna" post = "intern" />

        <Card username='chahu'/>

        <Card />
      </div>
    </>
  )
}

export default App



