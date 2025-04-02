// import React from "react";

// function Projects() {

//     const projects = [
//         {name: "", details: ""},
//         {name: "", details: ""},
//         {name: "", details: ""},
//         {name: "", details: ""},
//     ];

//     const displayedProjects = projects.map(project => {
//         <li key={project.name} className="">
//             <img
//                 src={project.src}
//                 alt={project.img}
//                 height={500}
//                 width={500}
//                 className=""
//             />
//             <p>{project.name}</p>
//             <p>{project.details}</p>
//             <button className="">Live Demo</button>
//             <button className="">Github URL</button>
//         </li>
//     })
// 	return (
// 		<div className="">
// 			<h2 className="">Projects</h2>
// 			<div className="">
// 				<div className="">
// 					{displayedProjects}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Projects;
import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/projects.css'

function Projects({projects}) {
  const displayedProject = projects.map((project) => {
    return (
      <li className='list'>
        <img src={project.imgUrl} alt="Project" className='imgUrl'/>
        <div className='details'>
          <h3 className='title'>{project.title}</h3>
          {project.stacks.map((stack) => {
            return (
              <p className='stack'>{stack}</p>
            )
          })}
          <NavLink to={project.demoUrl} className='links'>Live Demo</NavLink>
          <NavLink to={project.githubUrl} className='links'>Github Code</NavLink>
        </div>
        
      </li> 
    )
  })
  return (
    <ul className='wrapper'>
      {displayedProject}
    </ul>
  )
}

export default Projects