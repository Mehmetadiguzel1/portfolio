import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {


    const form = useRef();
    const [ done, setDone ] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qj00cuy', 'template_45tgkmq', form.current, 'InX4ZiW4VH-8mThzz')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background: "ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message' />
                <input type="submit" value="Send" className="button" />
                <span>{done && "Thans for contating me!"}</span>
                <div className='blur c-blur1' style={{background: "rgb(252, 145, 252)"}} ></div>

            </form>
        </div>
    </div>

    





  )
}

export default Contact