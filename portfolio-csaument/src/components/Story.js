import React from 'react'

const Story = ({title, desc, photo}) => {
      return (<>
            <div className='story'>
                  <img src={Object.values(photo)} alt={title} className='projectPhoto' />
                  <div className='title'>{title}</div>
                  <div className='desc'>{desc}</div>
            </div>
            </>)
}

export default Story