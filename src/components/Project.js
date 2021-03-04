function Project({project}) {

    const {projectName, date, description, languages, tools, projectUrl} = project

    return (
        <a href={projectUrl} target='_blank' className='project'>
            <div>
                <h1 className='project-name'>{projectName}</h1>
                <h2>{date}</h2>
                <p className='project-description'>{description}</p>
                {languages.length > 0 && <p className='languages-tools'><b>Languages:</b> {languages.join(', ')}</p>}
                {tools.length > 0 && <p className='languages-tools'><b>Tools:</b> {tools.join(', ')}</p>}
            </div>
        </a>
    )
}

export default Project