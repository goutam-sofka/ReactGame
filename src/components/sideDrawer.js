import React from 'react';
import { NavLink } from 'react-router-dom';

const SideDrawer = ({ isOpen }) => {
  let drawerClasses = 'side-drawer';
  if (isOpen) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/character-selection'>Avengers</NavLink></li>
        <li><NavLink to='/history'>History</NavLink></li>
      </ul>
    </nav>
  )
}

export default SideDrawer