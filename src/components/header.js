import React, { useState, Fragment } from 'react'
import Toolbar from './toolbar';
import SideDrawer from './sideDrawer';
import BackDrop from './backdrop';

const Header = () => {
  const [ isOpen, setOpen ] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  let backDrop = undefined;

  if(isOpen === true) {
    backDrop = <BackDrop closeMenu={closeMenu}/>
  }

  return (
    <Fragment>
      <Toolbar openMenu={openMenu} />
      <SideDrawer isOpen={isOpen}/>
      {backDrop}
    </Fragment>
  )
}

export default Header;