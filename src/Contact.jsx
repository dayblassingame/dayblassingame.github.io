import React, { useState } from "react";
import firebase from 'firebase/app';

export default function Contact(){
    const[newMessage, setMessage] = useState(
    {   name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [messageStatus, setMessageStatus] = useState('');

    async function handleForm(e){
        e.preventDefault();

        const {name, email, subject, message} =  newMessage;

        const options = {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, subject, message})
        }

        try{
            const res = await fetch('https://portfolio-62020-default-rtdb.firebaseio.com/messages.json', options)
            setMessageStatus('message sent successfully')
            clearForm();
        }catch(err){
            setMessageStatus('message failed')

        } 

    }

    const clearForm =()=>{
        setMessage({
            name: '',
            email: '',
            subject: '',
            message:''
        })
    }

    const data =(e)=>{
        const attr = e.target.id;
        const value = e.target.value;
        
        setMessage({
            ...newMessage, [attr]: value
        })
    }

    return(
        <div id='contact' className="p-L-section_wrapper">
            <div  className="p-C-contact">
                <div className="p-L-heading_border p-L-contact_heading">
                    <h4 className='p-L-section_h4'>/contact</h4>
                </div>
                <p>Need a well constructed, responsive webpage. Leave me a message!</p>

                <form onSubmit={handleForm} method="POST" className="p-C-contact_form">
                    <input required type="text" id='name' placeholder="Name" autoComplete="off" value={newMessage.name} onChange={data}/>
                    <input required type="email" id='email' placeholder="Email" autoComplete="off" value={newMessage.email} onChange={data}/>
                    <input required type="text" id='subject' placeholder="Subject" autoComplete="off" value={newMessage.subject} onChange={data}/>
                    <textarea id='message' placeholder="Message" autoComplete="off" value={newMessage.message} onChange={data}/>
                    <button className="p-L-section_button" type="submit" value='SEND'>submit</button>
                    <p className={messageStatus==='message failed' ? 'red': 'green'} id='messageStatus'>{messageStatus}</p>

                </form>
            </div>
        </div>
        
    )
}