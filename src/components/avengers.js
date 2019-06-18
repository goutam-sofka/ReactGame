import React from 'react'

const Avengers = ({ avenger, pickAvenger, selectedAvengers }) => {
  return (    
    <div className='avenger'>
      <h3>{ avenger.name }</h3>
        <div className='stats'>
          <p>HP: { avenger.hp }</p>
          <p>ATK: { avenger.atq }</p>
          <p>DEF: { avenger.def }</p>
        </div>
      <button onClick={(e) => pickAvenger(avenger, e)} 
      disabled={selectedAvengers.length === 3 && !selectedAvengers.includes(avenger)} >
        {
          selectedAvengers.includes(avenger) ? 'Selected' : 'Select'
        }
      </button>
    </div>
  )
}

export default Avengers;