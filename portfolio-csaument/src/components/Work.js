import React from 'react'
import github from '../assets/github.png'
import cog from '../assets/cog.png'

// Troubleshoot this later - attempting to use functions to manage other components during mouse-over events
// , mouseOn, mouseOff, index
// onMouseOver={mouseOn({index})} onMouseLeave={mouseOff({index})}

const Work = ({title, desc, photo, code, live, tech}) => {
  return (
    <div className='work'>
      <img src={Object.values(photo)} alt={title} className='projectPhoto'/>
      <div className='title'>{title}</div>
      <div className='desc'>{desc}</div>
      {live && <a href={live} target='_blank'> <img src={cog} alt='live page' className='live' /></a>}
      <a href={code} target='_blank'> <img src={github} alt='code' className='code' /></a>
      {/* <div className='tech'>{tech}</div> */}
    </div>
  )
}

export default Work