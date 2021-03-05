//Import the JSX components from react-router-dom to enable multiple pages
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

//Import the JSX components
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import Resume from './components/Resume'
import Footer from './components/Footer'

//Defines the main component for the website
function App () {

  return (
    <div className='App'>
      <Router basename='/'>
        {/* Display the header */}
        <Header />
        <Switch>
          {/* Define which page to display based on the URL ending */}
          <Route path='/' exact component={() => <Home />}/>
          <Route path='/about' exact component={() => <AboutMe />}/>
          <Route path='/projects' exact component={() => <MyProjects />}/>
          <Route path='/resume' exact component={() => <Resume />}/>
        </Switch>
      </Router>
      {/* Display the footer */}
      <Footer />
    </div>
  )
}

export default App
