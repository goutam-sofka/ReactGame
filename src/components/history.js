import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  const battles = JSON.parse(window.localStorage.getItem('battles'));

  return (
    <div className='battles'>
      {
        battles === null ? 
        <h2>No battles yet</h2>
        : 
        battles.map((battle, i) => {
          return (
            <Link key={battle.id} to={{ pathname: `/battle/${battle.id}`, state: [battle.selectedAvengers, battle.selectedVillains] }} className='battle'>
              Battle:{i+1}
            </Link>
          )
        })
      }
    </div>
  )
}

export default History