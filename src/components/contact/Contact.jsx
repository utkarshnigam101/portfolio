import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail}  from "react-icons/md"
import {RiMessengerLine } from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from'emailjs-com'

const Contact = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_554f069', 'template_pg3ic6v', form.current, 'gEpvglPEAj-hXpCDx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section  id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/> 
          <h4>Email</h4>
          <h5>utkarshnigam101@gmail.com</h5>
          <a href='mailto:utkarshnigam101@gmail.com' target="_blank">Send A Message</a>

        </article>
        <article className='contact__option'>
          <RiMessengerLine  className='contact__option-icon'/> 
          <h4>FaceBook</h4>
          <h5>Utkarsh</h5>
          <a href='' target='_blank'>Send A Message</a>

        </article>
        <article className='contact__option'>
          <BsWhatsapp  className='contact__option-icon'/> 
          <h4>Whatsapp</h4>
          <h5>7428053214</h5>
          <a href='https://api.whatsapp.com/send?phone=7428053214' target='_blank'>Send A Message</a>

        </article>
      </div>
      {/* END OF SENDING OPTIONS */}
      <form ref={form} onSubmit= {sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Enter Your Email' required/>
            <textarea name='messege' rows='7' placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
         </div>
    </section>
  )
}

export default Contact