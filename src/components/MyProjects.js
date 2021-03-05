//Import my Project custom JSX component to be used on the webpage
import Project from './Project'

//Defines the body of the webpage for displaying my projects
function MyProjects() {

    //Generate an object from reading the JSON file
    const projectsObj = require('../res/projects.json')

    //Define an array that stores each project
    const projectComponents = []

    //Add each Project JSX component to the array
    for (const project of projectsObj['projects']) {
        projectComponents.push(<Project project={project}/>)
    }

    return (
        <div>
            <h2 className='project-header'>Here are all of my wonderful projects! Click on a project for more information.</h2>
            {/* Display each project in an organized layout */}
            <div className='projects-div'>
                {[...projectComponents]}
            </div>
        </div>
    )
}

export default MyProjects