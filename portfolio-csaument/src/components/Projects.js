import React, { useState } from 'react'
import Work from './Work'
import tictac from '../assets/tictac.png'
import noman from '../assets/noman.png'
import treasure from '../assets/treasure.png'

const Projects = () => {
      // Create a React state for project objects
      const [projects, setProjects] = useState([
            {title: 'Text-based game',
                  desc: "No Man's Text is a text-based game using procedural generation to develop new and interesting worlds for the user to explore and discover. For this project, I worked on a team with two other developers using mob programming. We began by discussing ideas for the style of gameplay as well as theme. Once we established interesting user interactions and mechanics, we developed a framework for the game within Ruby. We designed and implemented several classes that used pseudo-random number generation to establish an initial state. We established initial function to allow the user to explore their initial world, encounter different plants, animals, and locations, and name new discoveries. The Ruby code uses anonymous blocks called within interpolated strings to conditionally assess the various aspects of the encounter while displaying an appropriate message. We expanded gameplay by developing a basic combat function. One challenge that we saw during development was tracking the scope of variables, objects, and functions. This required some deliberate planning in function and method design, and we passed objects as arguments to different functions to allow them to perform as desired.",
                  photo: {noman}, code: 'https://github.com/csaument/text-based-game-no-mans-text', live: '', tech: ['ruby']},
            {title: 'Treasure hunt',
                  desc: 'This Space Hunt Game is based on a prompt to create a treasure hunt game. Working with another partner, we took turns pair programming to develop a site using React components. The game allows the user to click on various boxes, searching for a treasure while avoiding a bomb. To prevent the user from inspecting the page to identify the location of these objects, we implemented a function that is called on click, allowing the pseudo-random process to determine whether the player wins, loses, or can continue to play. As we developed the project, we encountered several issues with our initial configuration. After learning that children cannot pass props directly between each other, we refactored the code to route props and methods through a shared ancestor in the hierarchy.',
                  photo: {treasure}, code: 'https://github.com/csaument/treasure-hunt-csaument', live: 'https://treasure-hunt-csaument.onrender.com/', tech: ['javascript', 'react', 'html', 'css']},
            {title: 'Tic-tac-toe',
                  desc: 'This tic-tac-toe game allows two users to take turns on a single system. I worked with another developer, and we took turns pair programming. We incorporated several checks within a function call for each click. This checks ensure that the user clicked a new box. whether the game is still in play, and to determine whether win or draw conditions were fulfilled before proceeding to update the gameboard with their selection. After completing the basic functionality for the application, we incorporated additional elements to provide a clean user interface, a reset button, and using a React State Hook to track the cumulative score of both players throughout their session. As a stretch goal, we wanted to implement a message to ask if the players wished to continue after 30 seconds of inactivity. This proved challenging in React, and we used the React Effect Hook to create a timer component. As part of the user click, we passed empty props to this timer component to force it to re-render and reset.',
                  photo: {tictac}, code: 'https://github.com/csaument/tic-tac-toe-neverland', live: 'https://tic-tac-toe-neverland.onrender.com/', tech: ['javascript', 'react', 'html', 'css']},
      ])

      // Troubleshoot this later - attempting to manage other components with onhover
      // mouseOn={activateProject} mouseOff={deactivateProject}
      // // Create a React state to track active projects
      // const [activeProject, setActiveProject] = useState([false, false, false])

      // // Create a function to process mouse-over events
      // const activateProject = (index) => {
      //       projects = activeProject[index] = true
      //       setActiveProject(projects)
      // }

      // // Create a function to end mouse-over events
      // const deactivateProject = (index) => {
      //       projects = activeProject[index] = false
      //       setActiveProject(projects)
      // }

      return (<>
            <div className='projects'>
                  <h2>Projects</h2>
                  <div className='track'>
                        {projects.map((value, index) => <Work title={value.title} desc={value.desc} photo={value.photo} code={value.code} tech={value.tech} live={value.live} index={index}/>)}
                  </div>
            </div>
      </>)
}

export default Projects