import { useState, useEffect } from 'react'
import '../App.css'
import Boxes from './Boxes'

export default function Main() {
  const [x, setX] = useState()
  const [y, setY] = useState()
  const [windowWidth, setWindowWidth] = useState()
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
  useEffect(
    () => {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    },
    [setWindowWidth]
  )
  function handleResize() {
    setWindowWidth(window.innerWidth)
  }
  
  return (
    <div className="main-container">
      <div className="main-name">
        <h1>Hey There, <br/> I'm Ahmet</h1>
        <h3>I am a web developer</h3>
      </div>
        { window.innerWidth > 1100 && <div className='canvas-container'>
          <Boxes x={x} y={y} />
        </div>}
    </div>
  )
}
