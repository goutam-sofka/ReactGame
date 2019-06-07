import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from './drawerToggleButton';

const Toolbar = ({ openMenu, closeMenu }) => {
  return (
    <header className='toolbar'>
      <nav className='toolbar-navigation'>
        <div>
          <DrawerToggleButton openMenu={openMenu}/>
        </div>
        <div className='toolbar-logo'><NavLink to='/'>THE LOGO</NavLink></div>
        <div className='spacer' />
        <div className='toolbar-navigation-items'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/character-selection' >Avengers</NavLink></li>
            <li><NavLink to='/history' >History</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar