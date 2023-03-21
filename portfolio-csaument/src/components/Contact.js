import React from 'react'
import ContactForm from './ContactForm'
import gitHubIco from '../assets/github.png'
import linkedInIco from '../assets/linkedin.png'

const Contact = () => {
      return (
            <div className='contacts'>
                  <h2>Contact</h2>
                  <a href='https://github.com/csaument' target='_blank'>
                  <img
                        src={gitHubIco}
                        alt='GitHub Profile'
                        className='icon'/>
                  </a>
                  <a href='https://www.linkedin.com/in/chris-aument/' target='_blank'>
                  <img 
                        src={linkedInIco}
                        alt='LinkedIn Profile'
                        className='icon'/>
                  </a>
                  <ContactForm/>
            </div>
      )
}

export default Contact