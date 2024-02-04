import React, { useState } from "react";

export default function Contact(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[subject, setSubject] = useState('');
    const[message, setMessage] = useState('');

    const handleForm =(e)=>{
        e.preventDefault();
    }

    return(
        <div id='contact' className="p-C-contact_wrapper">
            <form onSubmit={handleForm} className="p-C-contact_form">
                <h1>Contact Info</h1>
                <p>In search of a developer? Leave me a message!</p>
                <input required type="text" id='name' placeholder="Name"/>
                <input required type="email" id='email' placeholder="Email"/>
                <input required type="text" id='subject' placeholder="Subject"/>
                <textarea id='message' placeholder="Message"/>
                <input type="submit" value='SEND'/>
            </form>
        </div>
    )
}