import React from 'react'
import Modal from 'react-modal';

const InstructionsModal = ({ selected, closeModal }) => {
  return (
    <Modal
    isOpen={!!selected}
    onRequestClose={closeModal}
    contentLabel='Instructions'
    ariaHideApp={false}
    className='Modal'
    overlayClassName='Overlay'
    >
    <h3>Instructions</h3>
    <p>The player creates a team of 3 Avengers. A team of 3 Supervillain is then randomly created. During a turn, one team attacks the other, and the other will attack during the next turn, and so on.
        For each turn, the AI chooses for each team player, which opponent it has to attack, so the AI makes all decisions, no player input is required. Each player has 3 properties: Attack, Defense, and Health Points.  
        A player loses points of life after an opponent attack, and dies when there is no life point left. </p>
    <button onClick={closeModal}>Okay</button>
    </Modal>
  )
}

export default InstructionsModal;
