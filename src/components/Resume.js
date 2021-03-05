//Import the path for the resume file
import resumeURL from '../res/Joshua Seligman Resume.pdf'

//Defines the body of the resume page
function Resume() {
    return (
        //Display the resume in a frame
        <iframe src={resumeURL} className='resume'></iframe>
    )
}

export default Resume