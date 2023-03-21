import React from 'react'

const Work = ({title, desc, photo, code, tech}) => {
  return (
    <div className='work'>
      <img src={photo} alt={title} className='projectPhoto'/>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{code}</div>
      <div>{tech}</div>
    </div>
  )
}

export default Work