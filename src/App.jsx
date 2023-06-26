import { useState } from 'react'
import './App.css'
import Card from './components/card'
import phrases from "./data/phrases.json"

function App() {

  const imagenes = ["/public/imagenes/fondo1.jpg", "/public/imagenes/fondo2.jpg", "/public/imagenes/fondo3.jpg", "/public/imagenes/fondo4.jpg"]
  const [index, useIndex] = useState(0)
  const [img, useImg] = useState(0)

  const changePhrases = () => {
    if (img < imagenes.length - 1) {
      useImg(img + 1)
    } else {
      useImg(0)
    }

    useIndex(Math.floor(Math.random() * phrases.length))
  }

  document.body.style = `background-image: url(${imagenes[img]})`

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
