import React, { useState } from 'react'
import MenuItem from './MenuItem'

const Header = () => {
      const [menuItems, setMenuItems] = useState([
            {title: 'About', photo: '../assets/history.jpeg'},
            {title: 'Projects', photo: '../assets/coding.png'},
            {title: 'Experience', photo: '../assets/cog.png'},
            {title: 'Contact', photo: '../assets/email.png'}])

      return (<>
            <div className='header'>
                  {menuItems.map((item, index) => <MenuItem title={item.title} photo={item.photo} index={index}/>)}
            </div>
      </>)
}

export default Header