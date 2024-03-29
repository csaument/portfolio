import React from 'react'
import ContactForm from './ContactForm'
import gitHubIco from '../assets/github.png'
import linkedInIco from '../assets/linkedin.png'
import ega from '../assets/ega.png'
import qr from '../assets/QR.svg'

const Contact = () => {
      return (
            <div className='contact'>
            <div className='contacts'>
                  <h2>Contact</h2>
                  <div style={{flexDirection: 'row'}}>
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
                  <a href='https://www.marforres.marines.mil/Units/4th-Marine-Division/23rd-Marine-Regiment/2nd-Battalion/Weapons-Company/' target='_blank'>
                  <img 
                        src={ega}
                        alt='Unit Page'
                        className='icon'/>
                  </a>
                  {/* <img 
                        src={qr}
                        alt='vCard'
                        className='icon'/> */}
                  </div>
                  <ContactForm/>
            </div>
            </div>
      )
}

export default Contact