import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import InstructionsModal from './instructionsModal';


const HomePage = () => {
  const [ selected, setSelected ] = useState(undefined);

  const openModal = () => setSelected(true);
  const closeModal = () => setSelected(undefined);

  return (
    <div className='home-page'>
      <div className='title'>
        <h1>Welcome to the Avengers Endgame... Game</h1>
        <Link className='btn' to='/character-selection'>Start Game</Link>
        <button onClick={openModal} className='btn-modal'>Instructions</button>
        <InstructionsModal closeModal={closeModal} selected={selected} />
      </div>
    </div>
  )
}

export default HomePage