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
      <button onClick={(e) => pickAvenger(avenger.id, e)} 
      disabled={selectedAvengers.length === 3 && !selectedAvengers.includes(avenger.id)} >
        {
          selectedAvengers.includes(avenger.id) ? 'Selected' : 'Select'
        }
      </button>
    </div>
  )
}

export default Avengers;