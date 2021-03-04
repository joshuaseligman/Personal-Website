import resumeURL from '../res/Joshua Seligman Resume.pdf'

function Resume() {
    return (
        <iframe src={resumeURL} className='resume'></iframe>
    )
}

export default Resume