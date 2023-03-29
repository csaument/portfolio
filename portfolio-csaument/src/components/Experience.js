import React, { useState } from 'react'
import Story from './Story'
import usna from '../assets/usna.jpg'
import abudhabi from '../assets/usemb-abu-dhabi.jpeg'
import mg from '../assets/mg.jpeg'

const Experience = () => {
      // Create a React state for story objects
      const [stories, setStories] = useState([
            {title: 'Ownership',
                  desc: 'On 27 May, 2011, I graduated from the United States Naval Academy and commissioned into the United States Marine Corps as a second lieutenant. On that day, I swore an oath to support and defend the Constitution of the United States. Since that day, I have developed technical skills, communication tools, and my own personal brand of leadership. Ownership is at the center of this brand.',
                  photo: {usna}
            },
            {title: 'Diplomacy',
                  desc: 'True diversity is when people of different backgrounds and experiences work together towards a shared vision of success. During a study abroad trip to Morocco in 2009, I saw vastly different societies and perspectives from what I knew growing up. This experience proved invaluable while visiting foreign countries for Theater Security Cooperation and Port Visits during each of my three Marine Expeditionary Unit (MEU) deployments. From 2015-2017, I had the priviledge of serving on the Marine Security Guard program, which provides safety and security for American diplomats around the world.',
                  photo: {abudhabi},
            },
            {title: 'Leadership',
                  desc: 'Whether working on a pair project or on a massive multi-national exercise, effective leadership puts the team first. This recursive logic begins by ensuring that the individual member of the team is set up for success - training, resources, and tasking all in alignment with their capabilities. When each individual, including team and intermediate-level supervisors and managers, is set up for success, then the entire organization excels.',
                  photo: {mg}
            }
      ])


      return (<>
            <div className='experience'>
                  <h2>Experience</h2>
                  <div className='track'>
                        {stories.map((story, index) => <Story title={story.title} desc={story.desc} photo={story.photo} index={index} />)}
                  </div>
            </div>
      </>)
}

export default Experience