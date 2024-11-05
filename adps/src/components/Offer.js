import React from 'react'

function Offer({name,type,picture,quantity,price}) {
  return (
    <div className="offer">
        <img src={picture} alt="offerImage" />
      <h2> {name} </h2>
      <p> {type}</p>
        <p> {quantity}</p>
<p>{price}</p>
    </div>
  )
}

export default Offer