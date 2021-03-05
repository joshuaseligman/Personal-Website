//Defines the body for the landing page
function Home() {
    return (
        <div className='home'>
            {/* Top text */}
            <div className='welcome-front'>
                <p>Hello world,</p>
                <p>my name is Josh</p>
                <p>and welcome to my website.</p>
            </div>
            {/* Bottom text */}
            <div className='welcome-bottom'>
                <p>
                    This website is my virtual home as it is 
                    designed for me to be able to share my 
                    passions and interests with you!
                </p>
                <p>Feel free to navigate through the website to learn
                    more about me!
                    <br />
                    <br />
                </p>
            </div>
        </div>
    )
}

export default Home