import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {  selectOpenMail } from './features/mailSlice';
import {Tooltip} from '@mui/material';
import './Mail.css';


function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail)
  return (
   <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsLeft">
       <Tooltip title='Back'> 
       <IconButton  onClick={() => history.push("/")}>
          <ArrowBack />
        </IconButton>
        </Tooltip>
        <Tooltip title='Inbox'> 
        <IconButton>
          <MoveToInbox />
        </IconButton>
        </Tooltip>
        <Tooltip title='Report'> 
        <IconButton>
          <Error />
        </IconButton>
        </Tooltip>
        <Tooltip title='Delete'> 
        <IconButton>
          <Delete />
        </IconButton>
        </Tooltip>
        <Tooltip title='Email'>
        <IconButton>
          <Email />
          </IconButton>
          </Tooltip>
          <Tooltip title='WatchLater'>
        <IconButton>
          <WatchLater />
        </IconButton>
        </Tooltip>
        <Tooltip title='Check'>
        <IconButton>
          <CheckCircle />
        </IconButton>
        </Tooltip>
        <Tooltip title='Important'>
        <IconButton>
          <LabelImportant />
        </IconButton>
        </Tooltip>
        <Tooltip title='More'>
        <IconButton>
          <MoreVert />
        </IconButton>
        </Tooltip>
        </div>
     <div className="mail__toolsRight">
     <Tooltip title='More'>
     <IconButton>
          <UnfoldMore />
        </IconButton>
        </Tooltip>
        <Tooltip title='Print'>
        <IconButton>
          <Print />
        </IconButton>
        </Tooltip>
        <Tooltip title='ExitToApp'>
        <IconButton>
          <ExitToApp />
        </IconButton>
        </Tooltip>
     </div>

      </div>
   <div className="mail__body">
    <div className="mail__bodyHeader">
      <h2>{selectedMail?.subject}</h2>
      <LabelImportant className='mail__important'/>
      <p>{selectedMail?.title}</p>
      <p className='mail__time'>{selectedMail?.time}</p>
    </div>
    <div className="mail__message">
    <p>{selectedMail?.description}</p>  
    </div>
   </div>
   </div>
   
  )
}

export default Mail