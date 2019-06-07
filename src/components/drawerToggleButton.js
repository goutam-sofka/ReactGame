import React from 'react'

const DrawerToggleButton = ({ openMenu }) => {
  return (
    <button className='toggle-button' onClick={openMenu}>
      <div className='toggle-button-line'></div>
      <div className='toggle-button-line'></div>
      <div className='toggle-button-line'></div>
    </button>
  )
}

export default DrawerToggleButton