import React from 'react'
import '../App.css'
import Info from './info.json'

export default function About() {


    const info = Info.map((info, index) => {
        const skills = info.languages.map((skill, index) => {
            return <li key={index}>{skill}</li>
        })
        const programs = info.programs.map((program, index) => {
            return <li key={index}>{program}</li>
        })

        return (
            <div className='about-container'>
            <div key={index} className="about-info">
                <h2>My name is {info.name}</h2>
                <p>{info.dream}</p>
                <div className='skills'>
                    <ul>
                        <h2>Skills</h2>
                        <div className='hr'></div>
                        {skills}
                    </ul>
                </div>
                <div className='skills'>
                    <ul>
                        <h2>Programs</h2>
                        <div className='hr'></div>
                        {programs}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
    )



  return (
    <div className='about-container'>
        {info}
    </div>
  )
}
