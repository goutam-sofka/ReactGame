import React from 'react'
import Modal from 'react-modal';
import dp from './../images/deadpool.jpg'

const EasterEgg = ({ selected, closeModal, selectedVillains, history }) => {
  const easterEggBattle = () => {
    if (selectedVillains.length === 3) {
      history.push({
        pathname: 'easter-egg-battle',
        state: {selectedVillains}
      })
    }
  }  

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
    <button onClick={easterEggBattle}>Kick Ass</button>
    </Modal>
  )
}

export default EasterEgg;