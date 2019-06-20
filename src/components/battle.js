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