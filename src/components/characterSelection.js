import React, {useState, useEffect, useRef, Fragment} from 'react';
import Avengers from './avengers';
import Villains from './villains';
import EasterEgg from './easterEgg';

import dp from './../images/dp.png';

const CharacterSelection = () => {
  // All hooks (setState alternatives)
  const [ avengers, setAvengers ] = useState([]);
  const [ villains, setVillains ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ selectedAvengers, setSelectedAvengers ] = useState([]);
  const [ selectedVillains, setSelectedVillains ] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const isInitialMount = useRef(true);

  // Functions for opening and closing the React Modal
  const openModal = () => setSelected(true);
  const closeModal = () => setSelected(undefined);
  
  const token = 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ';
  const getOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  const postOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(selectedAvengers, selectedVillains)
  }

  const postCharacters = async () => {
    try {
      const uri = 'http://localhost:3000/battles';
      const req = new Request(uri, postOptions);
      const response = await fetch(req);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log('Error:', error)
    }
  }

  //----------Testing the fetch-----------
  // const getBattle = async () => {
  //   try {
  //     const uri = 'http://localhost:3000/battles';
  //     const req = new Request(uri, getOptions);
  //     const response = await fetch(req);
  //     const json = await response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.log('Error:', error)
  //   }
  // }

  
  //Fetch the avengers 
  const fetchAvengers = async () => {
    try {
      const uri = 'http://localhost:3000/avengers';
      const req = new Request(uri, getOptions);
      const response = await fetch(req);
      const json = await response.json();
      setAvengers(json);
      setLoading(false);
    } catch (error) {
      console.log('Error:', error)
    }
  }

  // Fetch the villains
  const fetchVillains = async () => {
    try {
      let uri = 'http://localhost:3000/villains';
      const req = new Request(uri, getOptions);
      const response = await fetch(req);
      const json = await response.json();
      setVillains(json);
      setLoading(false);
    } catch (error) {
      console.log('Error:', error)
    }
  }

  // Function for randomly selecting 3 villains
  const randomVillains = () => {
    const villainsID = villains.map((villain) => villain.id);
    const random = Math.floor(Math.random() * villainsID.length);

    if (!selectedVillains.includes(villainsID[random]) && selectedVillains.length !== 3 && villains.length > 0) {
      setSelectedVillains([...selectedVillains, villainsID[random]]);
    }
  }

  // Selecting the avengers
  const pickAvenger = (id) => {
    if (!selectedAvengers.includes(id) && selectedAvengers.length < 3) {
      setSelectedAvengers([...selectedAvengers, id])
    } else if (selectedAvengers.length === 1) {
      setSelectedAvengers([]);
    } else if (selectedAvengers.includes(id)) {
      const newAvengers = [...selectedAvengers];
      newAvengers.splice(id, 1)
      setSelectedAvengers(newAvengers);
    }
  }

  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetchAvengers();
      fetchVillains();
    }, 2000);
  }, [])

  // componentDidUpdate
  useEffect (() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      randomVillains();
    }
  })

  console.log(selectedVillains);

  return (
    <div className={loading ? 'characters height-100' : 'characters'}>
      {
        loading ? 
        <p className='loading'>loading...</p> 
        : 
        <Fragment>
          <h2 className='heading'>Select a team of 3 Avengers to engage into the battle againts the villains</h2>
          <h3>Avengers</h3>
          <div className="character-grid">
              {
                avengers.map((avenger) => <Avengers avenger={avenger} key={avenger.id} pickAvenger={pickAvenger} selectedAvengers={selectedAvengers}/>)
              }
          </div>
          <h2>You can't select villains they are here for you to know what you are up againts</h2>
          <h3>Villains</h3>
          <div className="character-grid">
            {villains.map((villain) => <Villains villain={villain} key={villain.id} />)}
          </div>
        </Fragment>
      }
      <div className="start-game margin-bottom-small">
        <button className='btn' onClick={postCharacters}>To Battle!</button>
      </div>
      <img alt='dp' className='dp' src={dp} onClick={openModal}></img>
      <EasterEgg selected={selected} closeModal={closeModal} />
    </div>
  )
}

export default CharacterSelection;