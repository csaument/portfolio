import React, { useState } from 'react'
import MenuItem from './MenuItem'
import about from '../assets/coding.png'
import projects from '../assets/fullstack.png'
import history from '../assets/quire.png'
import contact from '../assets/email.png'

const Header = () => {
      const [menuItems, setMenuItems] = useState([
            {title: 'About', photo: {about}, href: '#about'},
            {title: 'Projects', photo: {projects}, href: '#projects'},
            {title: 'Experience', photo: {history}, href: '#experience'},
            {title: 'Contact', photo: {contact}, href: '#contact'}])

      return (<>
            <div className='header'>
                  {menuItems.map((item, index) => <a href= {item.href}><MenuItem title={item.title} photo={item.photo} index={index}/></a>)}
            </div>
      </>)
}

export default Header