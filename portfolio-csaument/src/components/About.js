import React from 'react'
import professionalPhoto from '../assets/professionalphoto.jpg'

const About = () => {
      return (
            <div className='about'>
                  <img src={professionalPhoto} alt='Photo' className='photo'></img>
                  <div className='aboutPara'>
                        <h2>Christopher S. Aument</h2>
                        <p>Passionate and self-driven engineer with a decade of military experience translating strategic vision into reality within volatile, uncertain, chaotic, and ambiguous environments. Interested in working with diverse, cross-functional teams of experts to expand the state-of-the-art and bring the future to all.</p>
                  </div>
            </div>
      )
}

export default About