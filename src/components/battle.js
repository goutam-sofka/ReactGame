import React, { Fragment } from 'react';

const Battle = ({ match }) => {
  const battles = JSON.parse(window.localStorage.getItem('battles'));
  const battleId = battles.find((battle) => battle.id === match.params.id)
  const avenger = battleId.selectedAvengers;
  const villain = battleId.selectedVillains;

  
 
  // Better example
  const battle = [
    {
      round: 1,
      attacker: avenger[0].name,
      attacked: villain[0].name,
      attackedHp: villain[0].hp -= avenger[0].atq
    },
    {
      round: 2,
      attacker: villain[1].name,
      attacked: avenger[1].name,
      attackedHp: avenger[1].hp -= villain[1].atq
    },
    {
      round: 3,
      attacker: avenger[2].name,
      attacked: villain[2].name,
      attackedHp: villain[2].hp -= avenger[2].atq
    },
    {
      round: 4,
      attacker: villain[0].name,
      attacked: avenger[0].name,
      attackedHp: avenger[0].hp -= villain[0].atq
    },
  ]

  const avengerStats = avenger.map((avenger, i) => {
    return <p className='battle-stats' key={i+5}>{avenger.name} : {avenger.hp} {avenger.hp <= 0 ? 'dead' : 'alive'}</p>
  })

  const villainStats = villain.map((villain, i) => {
    return <p className='battle-stats' key={i + 20}>{villain.name} : {villain.hp} {villain.hp <= 0 ? 'dead' : 'alive'} </p>
  })


  let outcome;
  // if (avenger[0].hp === 0 && avenger[1].hp === 0 && avenger[2].hp === 0) {
  //   outcome = <div className='battle'>Villains won the game</div>
  // } else if (villain[0].hp === 0 && villain[1].hp === 0 && villain[2].hp === 0) {
  //   outcome = <div className='battle'>Avengers won the game</div>
  // } else if (avengerHp !== 0 && villainHp !== 0) {
  //   outcome = <div className='battle'>The game is a draw</div> 
  // }

  const villainWin = avenger[0].hp <= 0 && avenger[1].hp <= 0 && avenger[2].hp <= 0;
  const avengerWin = villain[0].hp <= 0 && villain[1].hp <= 0 && villain[2].hp <= 0;
  const drawGame = (avenger[0].hp > 0 || avenger[1].hp > 0 || avenger[2].hp > 0) && (villain[0].hp > 0 || villain[1].hp > 0 || villain[2].hp > 0);

  if (avengerWin) {
    outcome = <div className='battle'>Villains won the game</div>
  } else if (villainWin) {
    outcome = <div className='battle'>Avengers won the game</div>
  } else if (drawGame) {
    outcome = <div className='battle'>The game is a draw</div>
  }

  
  console.log(villain[0].hp > 0 && villain[1].hp > 0 && villain[2].hp > 0);
  
  
  
  return (
    <div className='battles'>
    
      {
        battle.map((battle, i) => {
          return (
            <Fragment key={i}>
              <h2>Round {battle.round}</h2>
              <div className='battle'>
                <p><b>{battle.attacker}</b> attacks <b>{battle.attacked}</b>.
                <br /><b>{battle.attacked}'s</b> HP is now <b>{battle.attackedHp}</b>. </p>
              </div>
            </Fragment>
          )
        })
      }

      {outcome}

      <div className="fixed-results">
        {avengerStats}
        <p>VS</p>
        {villainStats}
      </div>
      
    </div>
  )
}

export default Battle











  // First and bad example
  // const battle = [
  //   {
  //     num:1,
  //     round: `${avenger[0].name} attacks ${villain[0].name},\n ${villain[0].name}'s HP is now ${villain[0].hp = villain[0].hp - avenger[0].atq}`
  //   },
  //   {
  //     num: 2,
  //     round: `${villain[1].name} attacks ${avenger[1].name}, \n ${avenger[1].name}'s HP is now ${avenger[1].hp = avenger[1].hp - villain[1].atq}`
  //   },
  //   {
  //     num:3,
  //     round: `${avenger[2].name} attacks ${villain[2].name}, \n ${villain[2].name}'s HP is now ${villain[2].hp = villain[2].hp - avenger[2].atq} `
  //   }
  // ]