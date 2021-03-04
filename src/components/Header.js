import {Link} from 'react-router-dom'

function Header({onClick}) {
    return (
        <header>
            <div className='name'>
                <Link to='/'><h1 style={{'padding': '15px'}}>Josh Seligman</h1></Link>
            </div>
            <div className='links'>
                <Link to='/about'><h3>About Me</h3></Link>
                <Link to='/projects'><h3>My Projects</h3></Link>
                <Link to='/resume'><h3>Resume</h3></Link>
            </div>
        </header>
    )
}

export default Header