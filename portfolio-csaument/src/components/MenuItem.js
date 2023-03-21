import React from 'react'

const MenuItem = ({title, photo}) => {
      return (
            <img className='menuItem' src={photo} alt={title} />
      )
}

export default MenuItem