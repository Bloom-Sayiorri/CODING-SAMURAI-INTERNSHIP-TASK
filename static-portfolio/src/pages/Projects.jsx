import React from "react";

function Projects() {

    const projects = [
        {name: "", details: ""},
        {name: "", details: ""},
        {name: "", details: ""},
        {name: "", details: ""},
    ];

    const displayedProjects = projects.map(project => {
        <li key={project.name} className="">
            <img
                src={project.src}
                alt={project.img}
                height={500}
                width={500}
                className=""
            />
            <p>{project.name}</p>
            <p>{project.details}</p>
            <button className="">Live Demo</button>
            <button className="">Github URL</button>
        </li>
    })
	return (
		<div className="">
			<h2 className="">Projects</h2>
			<div className="">
				<div className="">
					{displayedProjects}
				</div>
			</div>
		</div>
	);
}

export default Projects;
