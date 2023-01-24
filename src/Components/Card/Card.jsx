import React from 'react'
import './Card.css'
function Card({emoji,heading,detial}) {
  return (
   <div className="card">
   <img src={emoji} alt="" />
   <span>{heading}</span>
   <span>{detial}</span>
   <div className="c-button">
    Learn More
   </div>
   </div>
  )
}

export default Card;