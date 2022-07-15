import { useState, useEffect } from 'react'
import '../App.css'
import Boxes from './Boxes'

export default function Main() {
  const [x, setX] = useState()
  const [y, setY] = useState()

  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )
  return (
    <div className="main-container">
      <div className="main-name">
        <h1>Hey There, <br/> I'm Ahmet</h1>
        <h3>I am a web developer</h3>
      </div>
        <div className='canvas-container'>
          <Boxes x={x} y={y} />
          </div>
    </div>
  )
}
