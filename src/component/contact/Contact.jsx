import React, { useRef, useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import {BsMessenger} from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Result =() =>{
  return(
    <p>your message has been successfully sent. I will contact you soon.</p>
  )
}

function Contact(props) {
  const [result, showResult] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', "template_1dl424o", form.current, 'bc6AX7Fnm1ZqOrQg4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <section className="contact-section">
      
      <div className="contact-upper">
           <h2 className='section-title'>Get in Touch</h2>
          <p className="section-sub-title">Contact Me</p>
      </div>

      <div className="container-contact">
        <div className="content-section">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">

            <div className="contact-card">

              <FaWhatsapp className='contact-icons'/>

              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">+2547 ** *** ***</span>

              <a href="https://api.whatsapp.com/send?
              phone=62214408789&text=hello, more information!" className="contact-button">Write me{""}<AiOutlineArrowRight/></a>

            </div>

            <div className="contact-card">
              <BsMessenger className='contact-icons'/>

              <h3 className="contact-card-title">messenger</h3>
              <span className="contact-card-data">user.123</span>

              <a href="https://m.me/crypticalcoder" className="contact-button">Write me{""}<AiOutlineArrowRight/></a>

            </div>
          </div>
        </div>

        <div className="content-section">
          <h3 className="contact-title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-tag">name</label>
              <input type="text" name='name' placeholder='insert your name' className='contact-form-input'/>
            </div>

            <div className="contact-form-div">
              <label className="contact-tag">email</label>
              <input type="email" name='email' placeholder='insert your email' className='contact-form-input'/>
            </div>

            <div className="contact-form-div">
            <div className="contact-form-div">
              <label className="contact-tag">project</label>
              
              <textarea name="project" cols="30" rows="10" className='contact-form-input' placeholder='write your message'></textarea>
              </div>
            </div>
            <a href="/" className="btn">Submit</a>
            <div className="row"> {result ? <Result/> : null}</div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact