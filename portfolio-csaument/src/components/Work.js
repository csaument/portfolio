import React from 'react'

const Work = ({title, desc, photo, code, tech}) => {
  return (
    <div className='work'>
      <img src={Object.values(photo)} alt={title} className='projectPhoto'/>
      <div className='title'>{title}</div>
      <div className='desc'>{desc}</div>
      <div className='code'>{code}</div>
      <div className='tech'>{tech}</div>
    </div>
  )
}

export default Work