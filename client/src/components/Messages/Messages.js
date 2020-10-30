import React from 'react'
import SrollToBottom from 'react-scroll-to-bottom'
import './Messages.css'
import Message from '../Message/Message'

const Messages = ({messages,name})=>(
    <SrollToBottom className="messages " >
        {messages.map((message,i)=> <div key={i}><Message message={message} name={name} /></div>)}

    </SrollToBottom>

)
export default Messages