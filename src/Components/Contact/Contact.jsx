import './Contact.scss'
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../Context'
import {useContext} from "react";

const Contact = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const [done, setDone] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yufu56c', 'template_tn8f5dl', form.current, 'koXz6izZj_IfuYOGR')
      .then((result) => {
        setDone(true)
      }, (error) => {
        alert(error.text);
      });
  };
  return (
    <div className="contact" id='Contact'>
      <div className='contact-left'>
        <div className="contact-left_side">
          <span className='contact-left_side_one' style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
          <span className='contact-left_side_two'>Contact me</span>
          <div className='contact-left_side__blur blur' style={{background: '#abf1ff94'}}/>
        </div>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' className='contact-right_input' placeholder='Name'/>
          <input type="email" name='user_email' className='contact-right_input' placeholder='Email'/>
          <textarea name="message" className='contact-right_input' placeholder='text...'/>
          <input type="submit" className='contact-right_button button' value='Send'/>
          <span>{done && 'Thanks for contacting me!'}</span>
          <div className='blur contact-right_blur' style={{background: 'var(--purple'}} />
        </form>
      </div>
    </div>
  )
}
export default Contact