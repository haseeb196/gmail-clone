import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material'
import { Button, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<Add  fontSize='large' />}  className='sidebar__compose'
      onClick={() => dispatch(openSendMessage())}>Compose</Button>
   
   <SidebarOption  Icon={Inbox} title='Inbox' number={54} selected={true} />
   <SidebarOption  Icon={Star} title='Starred' number={54}/>
   <SidebarOption  Icon={AccessTime} title='Snoozed' number={54}/>
   <SidebarOption  Icon={LabelImportant} title='Important' number={54}/>
   <SidebarOption  Icon={NearMe} title='Sent' number={54}/>
   <SidebarOption  Icon={Note} title='Drafts' number={54}/>
   <SidebarOption  Icon={ExpandMore} title='More' number={54}/>
   <div className="sidebar__footer">
    <div className="sidebar__footerIcons">
    <Tooltip title='Person'>
      <IconButton>
      
        <Person />
       
      </IconButton>
      </Tooltip>
      <Tooltip title='Duo'>
      <IconButton>
      
      <Duo />
  
      </IconButton>
      </Tooltip>
      <Tooltip title='Phone'>
      <IconButton>
        <Phone />
      </IconButton>
      </Tooltip>
    </div>
   </div>
    </div>
  )
}

export default Sidebar