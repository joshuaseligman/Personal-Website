//Import the Link JSX component to direct the user to each webpage
import {Link} from 'react-router-dom'

//Defines the header for the website
function Header() {
    return (
        <header>
            <div className='name'>
                <Link to='/'><h1 style={{'padding': '15px'}}>Josh Seligman</h1></Link>
            </div>
            {/* This div places the links to the pages in a nice row */}
            <div className='links'>
                {/* Links to redirect the user to a different page.
                    Communicates with the Router in App.js to work as
                    a complete system. */}
                <Link to='/about'><h3>About Me</h3></Link>
                <Link to='/projects'><h3>My Projects</h3></Link>
                <Link to='/resume'><h3>Resume</h3></Link>
            </div>
        </header>
    )
}

export default Header