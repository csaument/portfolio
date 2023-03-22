import React from 'react'
import projects from '../assets/cog.png'

const MenuItem = ({title, photo, href}) => {
      return (<>
            <img className='menuItem' href={href} src={Object.values(photo)} alt={title} />     
      </>)
}

export default MenuItem