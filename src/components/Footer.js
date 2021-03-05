//Defines the footer for the website
function Footer () {
  return (
    <footer>
      {/* Display the copyright information */}
      <div className='copyright'>
        <div className='copyright-text'>
          <p>
            This work by Joshua Seligman <br />
            is licensed under&nbsp;
            <a
              href='http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1'
              target='_blank'
              rel='license noopener noreferrer'
            >
              CC BY-NC-ND 4.0
            </a>
          </p>
        </div>
        {/* This div places the images for the copyright in a nice row */}
        <div className='copyright-images'>
          <img src='https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1' />
          <img src='https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1' />
          <img src='https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1' />
          <img src='https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
