import React from 'react'
import '../App.css'

export default function Header() {
  return (
    <div className="header">
        <div className='logo'>
            <h2>Ahmet</h2>
        </div>
        <div className='nav'>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
