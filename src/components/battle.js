import React, { Fragment } from 'react';

const Battle = ({ match, history }) => {
  // const rounds = Battles.map((battle) => battle.rounds);
  // const battle = rounds.map((round) => round)
  // const battleId = battle.find((battl) => battl.id === match.params.id)

  const avenger = history.location.state.selectedAvengers
  const villain = history.location.state.selectedVillains
  
  const battle = [
    {
      num:1,
      round: `${avenger[0].name} attacks ${villain[0].name},\n ${villain[0].name}'s HP is now ${villain[0].hp = villain[0].hp - avenger[0].atq}`
    },
    {
      num: 2,
      round: `${villain[1].name} attacks ${avenger[1].name}, \n ${avenger[1].name}'s HP is now ${avenger[1].hp = avenger[1].hp - villain[1].atq}`
    },
    {
      num:3,
      round: `${avenger[2].name} attacks ${villain[2].name}, \n ${villain[2].name}'s HP is now ${villain[2].hp = villain[2].hp - avenger[2].atq} `
    }
  ]
  
  return (
    <div className='battles'>
      {
        battle.map((battle, i) => {
          return (
            <Fragment>
              <h2>Round {battle.num}</h2>
              <div className='battle' key={i}>
                <p>{battle.round}</p>
              </div>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Battle