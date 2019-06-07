import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import dp from './../images/deadpool.jpg'

const EasterEgg = ({ selected, closeModal }) => {
  return (
    <Modal
      isOpen={!!selected}
      onRequestClose={closeModal}
      contentLabel='Instructions'
      ariaHideApp={false}
      className='Modal-egg'
      overlayClassName='Overlay'
    >
    <img src={dp} alt='dp' className='dp-modal'></img>
      <p>Chimichangas!! Looks like you found me. Click on the button so we can go kick some ass.</p>
    <Link to='easter-egg-battle' className='btn'>Kick Ass</Link>
    </Modal>
  )
}

export default EasterEgg;