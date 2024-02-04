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
                <span>
                    <label>Name:</label>
                    <input required type="text" id='name' />
                </span>
                <span>
                    <label>Email:</label>
                    <input required type="email" id='email'/>
                </span>
                <span>
                    <label>Subject:</label>
                    <input required type="text" id='subject'/>
                </span>
                <span>
                    <label>Message:</label>
                    <textarea id='message'/>
                </span>
                <input type="submit"/>
            </form>
        </div>
    )
}