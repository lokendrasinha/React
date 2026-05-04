import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
            <img src={props.img} alt="" />
            <h1> {props.user} Sinha</h1>
            <p>Software Engineer</p>
            <p>Age: {props.age}</p>
            <button>View Profile</button>
          </div>
  )
}

export default Card