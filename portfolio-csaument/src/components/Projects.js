import React, { useState } from 'react'
import Work from './Work'
import tictac from '../assets/tictac.png'
import noman from '../assets/noman.png'
import treasure from '../assets/treasure.png'

const Projects = () => {
const [projects, setProjects] = useState([
      {title: 'Text-based game', desc: 'Designed an object-oriented application using procedural generation.', photo: {noman}, code: 'https://github.com/csaument/text-based-game-no-mans-text', live: '', tech: ['ruby']},
      {title: 'Treasure hunt', desc: 'Developed a React-based game to locate a random object.', photo: {treasure}, code: 'https://github.com/csaument/treasure-hunt-csaument', tech: ['javascript', 'react', 'html', 'css']},
      {title: 'Tic-tac-toe', desc: 'Developed a React-based game to play with friends.', photo: {tictac}, code: 'https://github.com/csaument/tic-tac-toe-neverland', live: 'https://tic-tac-toe-neverland.onrender.com/', tech: ['javascript', 'react', 'html', 'css']},
])

      return (<>
            <div>
                  <h2>Projects</h2>
                  <div className='projects'>
                        {projects.map((value, index) => <Work title={value.title} desc={value.desc} photo={value.photo} code={value.code} tech={value.tech} live={value.live} index={index} />)}
                  </div>
            </div>
      </>)
}

export default Projects