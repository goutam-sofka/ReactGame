import React, { Fragment } from 'react'

const EasterEggBattle = ({ history }) => {
  const villain = history.location.state.selectedVillains;

  const deadpool = {
    name: 'Deadpool',
    hp: 1000000,
    def: 100,
    atq: 100
  }

  const battle =[
    {
      round: 1,
      attacker: deadpool.name,
      attacked: villain[0].name,
      method: 'runs him over with a zamboni, haha',
      attackedHp: villain[0].hp -= deadpool.atq
    },
    {
      round: 2,
      attacker: deadpool.name,
      attacked: villain[1].name,
      method: 'fills him with holes like swiss cheese',
      attackedHp: villain[1].hp -= deadpool.atq
    },
    {
      round: 3,
      attacker: deadpool.name,
      attacked: villain[2].name,
      method: 'cuts his head off',
      attackedHp: villain[2].hp -= deadpool.atq
    }
  ]
  
  return (
    <div className='battles'>
      {
        battle.map((battle, i) => {
          return (
            <Fragment key={i}>
              <h2>Round {battle.round}</h2>
              <div className='battle'>
                <p><b>{battle.attacker}</b> attacks <b>{battle.attacked}</b> and {battle.method}.
                 <b>{battle.attacked}</b>'s hp is now {battle.attackedHp}.</p>
              </div>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default EasterEggBattle;