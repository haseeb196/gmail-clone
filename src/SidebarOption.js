import { Tooltip } from '@mui/material'
import React from 'react'
import './SidebarOption.css'
function SidebarOption({Icon, title, number, selected }) {
  return (
    <Tooltip title={title} placement='right'>
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
    
     <Icon />
     <h3>{title}</h3>
     <p>{number}</p>
    
    </div>
    </Tooltip>
  )
}

export default SidebarOption