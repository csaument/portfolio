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
                  {menuItems.map((item, index) => <MenuItem title={item.title} href= {item.href} photo={item.photo} index={index}/>)}
            </div>
      </>)
}

export default Header