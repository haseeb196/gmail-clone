import React from 'react'
import './Header.css';

import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import { Apps, ArrowDropDown,  Notifications, Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
const user = useSelector(selectUser);
const dispatch = useDispatch();
const signOut = () => {
  auth.signOut().then(() => {
    dispatch(logout)
  })

}

  return (
    <div className="header">
     <div className="header__left">
    <IconButton><Tooltip title='Main menu'>
    <MenuIcon /></Tooltip>
    </IconButton>
    <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
     
     </div>
     <div className="header__middle">
    <Tooltip title='Search'> 
    <Search />
    </Tooltip>
     <input type="text" placeholder='Search mail' />
     <Tooltip title='Select'>
     <ArrowDropDown className='header__inputCaret' />
     </Tooltip>
     </div>
   <div className="header__right">
   <Tooltip title='Apps'> 
     <IconButton>
   <Apps />
  
   </IconButton>
   </Tooltip>
   <Tooltip title='Notifications'>
   <IconButton>
   <Notifications />
   </IconButton>
   </Tooltip>
   <Tooltip   title={`Google Account  ${user?.displayName}  ${user?.email}`} placement='bottom'>
   <Avatar  style={{cursor: 'pointer'}} src={user?.photoUrl}  onClick={signOut}/>
   </Tooltip>
   
   </div>
    </div>
  )
}

export default Header