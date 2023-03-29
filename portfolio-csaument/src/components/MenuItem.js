import React from 'react'
import projects from '../assets/cog.png'

const MenuItem = ({title, photo, href}) => {
      return (<>
            <a href={href} ><img className='menuItem' src={Object.values(photo)} alt={title} /> </a>
      </>)
}

export default MenuItem