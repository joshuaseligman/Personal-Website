//Import the images for the page
import me from '../res/me.jpeg'
import sunset1 from '../res/sunset1.jpeg'
import sunset2 from '../res/sunset2.jpeg'
import sunset3 from '../res/sunset3.jpeg'
import sunset4 from '../res/sunset4.jpeg'
import sunset5 from '../res/sunset5.jpeg'

//Defines the body of the page for displaying information about me
function AboutMe() {
    return (
        <div className='about-me'>
            <h2>Here is a little bit about me...</h2>

            {/* This div places the paragraph directly next to my picture */}
            <div className='about-me-top'>
                <p>
                    My name is Josh Seligman and I am currently a freshman studying 
                    Computer Science at Marist College in Poughkeepsie, NY.
                    Although I am originally from the Princeton, NJ area, Marist has
                    become my home due to my heavy involvement on campus and overall
                    love for the school. Most notably, I am currently the Vice President 
                    of the Computer Society and am also training to be a tour guide.
                    The campus is absolutely gorgeous, so walking around campus and 
                    watching the sunsets is a must-do for me every day of the week!
                    Here are some of my favorite sunset pictures for your enjoyment
                    and personal moment of relaxation:
                </p>
                <div className='about-me-img-div'>
                    <img src={me} alt='me'></img>
                </div>
            </div>

            {/* This div places a row of sunset pictures on the website below
                the previously defined elements */}
            <div className='sunsets'>
                <img src={sunset1} className='sunset' alt='sunset1'></img>
                <img src={sunset2} className='sunset' alt='sunset2'></img>
                <img src={sunset3} className='sunset' alt='sunset3'></img>
                <img src={sunset4} className='sunset' alt='sunset4'></img>
                <img src={sunset5} className='sunset' alt='sunset5'></img>
            </div>
            <p>
                In my free time, you can oftentimes find me watching sports
                or playing video games. I am a massive New York Yankees
                fan and enjoy watching hockey as a New York Rangers fan.
                I have played tennis for many years, and I usually watch
                each of the four majors every year. In regard to my
                video game interests, I love to play games with thrilling
                and engaging stories, which leads me to noting that my favorite game is
                <i>The Last of Us</i>(with<i>Uncharted 4</i>as a close second)!
                However,<i>MLB The Show</i>is a solid selection any day of
                the week as it is by far my most played game.
            </p>
        </div>
    )
}

export default AboutMe