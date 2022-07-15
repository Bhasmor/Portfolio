import React from 'react'
import '../App.css'

export default function Header() {

  const [windowWidth, setWindowWidth] = React.useState()

  React.useEffect(
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
    <div className="header">
        <div className='logo'>
            Ahmet
        </div>
        {window.innerWidth > 900 && <div className='nav'>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>}
    </div>
  )
}
