import React, { useState } from "react";
import firebase from 'firebase/app';

export default function Contact(){
    const[newMessage, setMessage] = useState(
    {   name: '',
        email: '',
        subject: '',
        message: '',
    })

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
            document.getElementById('messageStatus').textContent = 'message sent';
            clearForm();
        }catch(err){
            document.getElementById('messageStatus').textContent = 'message failed';
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
        <div id='contact' className="p-C-contact_wrapper">
            <form onSubmit={handleForm} method="POST" className="p-C-contact_form">
                <h1>Contact Info</h1>
                <p>In search of an engineer? Send us a message!</p>
                <input required type="text" id='name' placeholder="Name" autoComplete="off" value={newMessage.name} onChange={data}/>
                <input required type="email" id='email' placeholder="Email" autoComplete="off" value={newMessage.email} onChange={data}/>
                <input required type="text" id='subject' placeholder="Subject" autoComplete="off" value={newMessage.subject} onChange={data}/>
                <textarea id='message' placeholder="Message" autoComplete="off" value={newMessage.message} onChange={data}/>
                <input type="submit" value='SEND'/>
                <p id='messageStatus'></p>
            </form>
        </div>
    )
}