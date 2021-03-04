import {HashRouter as Router, Route, Switch, Navigation} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App () {

  return (
    <div className='App'>
      <Router basename='/'>
        <Header />
        <Switch>
          <Route path='/' exact component={() => <Home />}/>
          <Route path='/about' exact component={() => <AboutMe />}/>
          <Route path='/projects' exact component={() => <MyProjects />}/>
          <Route path='/resume' exact component={() => <Resume />}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
