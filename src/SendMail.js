import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import './SendMail.css'
import { db } from './firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


function SendMail() { 
  const {register, handleSubmit, formState: {errors} } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message : formData.message,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    dispatch(closeSendMessage());
 }
 
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  type="email" placeholder='To' {...register('to', {required: true})} /> {errors.to && <p className='sendMail__error'>Email is Required</p>}
        <input   type="text" placeholder='Subject'   {...register('subject', {required: true})}/>{errors.subject && <p className='sendMail__error'>Subject is Required</p>}
        <input  type="text"   className='sendMail__message'   {...register('message', {required: true})}/>{errors.message && <p className='sendMail__error'>Message is Required</p>}

        <div className="sendMail__options">
          <Button className='sendMail__send'
          variant='contained' color='primary' type='submit'>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail