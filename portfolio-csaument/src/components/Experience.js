import React, { useState } from 'react'
import Story from './Story'

const Experience = () => {
      return (<>
            <div className='experience'>
                  <h2>Experience</h2>
                  <div className='track'>
                        <Story/>
                        <Story/>
                        <Story/>
                  </div>
            </div>
      </>)
}

export default Experience