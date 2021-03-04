import Project from './Project'

function MyProjects() {

    const projectsObj = require('../res/projects.json')

    const projectComponents = []

    for (const project of projectsObj['projects']) {
        projectComponents.push(<Project project={project}/>)
    }

    return (
        <div>
            <h2 className='project-header'>Here are all of my wonderful projects! Click on a project for more information.</h2>
            <div className='projects-div'>
                {[...projectComponents]}
            </div>
        </div>
    )
}

export default MyProjects