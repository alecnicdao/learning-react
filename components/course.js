import React from 'react'
export function Course(props){
    const c = props.course
    return (
      <div className="card">
        <img src={c.posterImage} alt={c.title}/>
        <h2>{c.title}</h2>
        <p>{c.description}</p>
        <ul className="extra">
          <li><strong>{c.crn}</strong></li>
          <li><strong>{c.instructor}</strong></li>
          <li><strong>{c.semester}</strong></li>
          <li><strong>{c.creditHours}</strong> Credit Hours</li>
          <li><button className="secondary">Select</button></li>
        </ul>
      </div>
    )
  }