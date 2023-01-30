import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import {  IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow'
import {Tooltip} from '@mui/material';
import { db } from './firebase';

function EmailList() {
const [emails, setEmails] = useState([]);

useEffect(() => {
 db.collection('emails').orderBy('timestamp','desc').onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => ({
  id : doc.id,
  data : doc.data()
 }))))
}, [])

  return (
  <div className="emailList">
    <div className="emailList__settings">
      <div className="emailList__settingsLeft">
      <Tooltip title='Select'>
       <IconButton>
 
       <CheckBoxOutlineBlankIcon />
      
       </IconButton>
       </Tooltip>
       
       <Tooltip title='Select'>
        <IconButton>
       
          <ArrowDropDown />
        
        </IconButton>
        </Tooltip>
        <Tooltip title='Redo'>
        <IconButton>
       
          <Redo />
        
        </IconButton>
        </Tooltip>
        <Tooltip title='More'>
        <IconButton>
      
          <MoreVert />
         
        </IconButton>
        </Tooltip>
      </div>
      <div className="emailList__settingsRight">
      
      <Tooltip title='Newer'>
      <IconButton>
          <ChevronLeft />
          </IconButton>
          </Tooltip>
          <Tooltip title='Older'>
        <IconButton>
       
         <ChevronRight />
       
        </IconButton>
        </Tooltip>
        <Tooltip title='Input Options'>
        <IconButton>
       
          <KeyboardHide />
         
        </IconButton>
        </Tooltip>
        <Tooltip title='Settings'>
        <IconButton>
       
          <Settings />
        
        </IconButton>
        </Tooltip>
      </div>
    </div>
    <div className="emailList__sections">
      <Section Icon={Inbox} title='Primary' color='red' selected />
      <Section Icon={People} title='Social' color='#1A73E8'  />
      <Section Icon={LocalOffer} title='Promotions' color='green'  />
    </div>
    <div className="emailList__list">
    {emails.map(({id, data}) => (
      <EmailRow  id={id} key={id}  title={data.to} subject={data.subject} description={data.message} time={new Date(data.timestamp?.seconds * 1000).toUTCString()} />
    ))   }
    
    </div>
  </div>
  )
}

export default EmailList