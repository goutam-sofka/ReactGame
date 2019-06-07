import React from 'react'

const Villains = ({ villain }) => {
  return (
    <div className='villain'>
      <h3>{villain.name}</h3>
      <div className='stats'>
        <p>HP: {villain.hp}</p>
        <p>ATK: {villain.atq}</p>
        <p>DEF: {villain.def}</p>
      </div>
    </div>
  )
}

export default Villains;