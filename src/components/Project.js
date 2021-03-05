//Defines how each project should be individually displayed 
//Takes in the project information from the MyProjects component
function Project({project}) {

    //Destructure the project object to use each property on its own
    const {projectName, date, description, languages, tools, projectUrl} = project

    return (
        //The entire project links to its GitHub repository
        <a href={projectUrl} target='_blank' className='project'>
            <div>
                {/* Display the information for the project */}
                <h1 className='project-name'>{projectName}</h1>
                <h2>{date}</h2>
                <p className='project-description'>{description}</p>

                {/* For languages and tools, skip if there are none. Otherwise, display each language 
                    and tool as defined in the project object */}
                {languages.length > 0 && <p className='languages-tools'><b>Languages:</b> {languages.join(', ')}</p>}
                {tools.length > 0 && <p className='languages-tools'><b>Tools:</b> {tools.join(', ')}</p>}
            </div>
        </a>
    )
}

export default Project