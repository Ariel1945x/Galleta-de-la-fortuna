import { useState } from 'react'
import './App.css'
import Card from './components/card'
import phrases from "./data/phrases.json"

function App() {

  const [index, useIndex] = useState(0)

  const changePhrases = () => {
    useIndex(Math.floor(Math.random() * phrases.length))
  }

  return (
    <>
      <Card
      data = {phrases[index]}
      />

      <div className='container'>
        <button className="boton" onClick={changePhrases}>Ver otro</button>
      </div>
    </>
  )
}

export default App
