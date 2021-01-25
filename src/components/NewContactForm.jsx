import React, {useState} from 'react'
import emailjs from 'emailjs-com'
// import Button from "@material-ui/core/Button";
import { Button } from 'reactstrap'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/contact-form.scss'

// toast.configure() 

export default function ContactForm() {

  const [opacityState, setOpacityState] = useState(0)

  async function sendEmail(e) {
    e.preventDefault()
    await emailjs.sendForm('service_1zy4bex', 'template_bsdnx1q', e.target, 'user_zTtYQZEhcFOIsiUKK8gwl')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
      document.getElementById("form").reset()
    setOpacityState(1)
    setTimeout(() => setOpacityState(0), 3500)
  }

  return (
    <div style={{ width: "100%" }}>

      <div className="success" style={{
        opacity: opacityState
      }}>
        Email sent!
      </div>

      <form className="contact-form" id="form" onSubmit={sendEmail} style={{ width: "100%" }}>
        <input type="hidden" name="contact_number" />
        <label className="form-label">Name</label>
        <input type="text" name="user_name" className="form-input" required/>
        <label className="form-label">Email</label>
        <input type="email" name="user_email" className="form-input" required/>
        <label className="form-label">Message</label>
        <textarea name="message" className="form-input form-text-area" required/>
        {/* <input type="submit" value="Send" className="form-submit"/> */}
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          className="form-button"
        >
          Send Email
        </Button>
      </form>
    </div>
  );
}