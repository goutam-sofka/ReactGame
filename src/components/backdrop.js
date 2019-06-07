import React from 'react'

const BackDrop = ({ closeMenu }) => {
  return (
    <div className='backdrop' onClick={closeMenu} />
  )
}

export default BackDrop