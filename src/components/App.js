import React from 'react'
import './App.css'
import MainContainer from '../containers/MainContainer'

const App = () => (
  <div className="App">
    <a className="skip-form" href="#skip-target">Skip to input form</a>
    <header>
      <h1>NextBus Compare</h1>
      <p>At a transit station but no idea what street you are on? No problem! Check when the next transit come by the station code right in front of you!</p>
    </header>
    <main>
      <p>NextBus Compare let's you compare up to 3 station stops and list all available transit vechicle that will stop at the listed station.</p>
      <MainContainer />
    </main>
    <footer>
      <small>Copyright &copy; {new Date().getFullYear()} Amy Yuen Ying Chan</small>
      <br />
      <span>
        <a title="My portfolio" href="https://craftplustech.com"><i className="icon-user-circle-o"></i></a>
        <a title="Site Github" href="https://github.com/amychan331"><i className="icon-github"></i></a>
        <a title="My Twitter" href="https://twitter.com/CraftPlusTech"><i className="icon-twitter"></i></a>
        <a title="My LinkedIn" href="https://www.linkedin.com/in/amyyychan/"><i className="icon-linkedin"></i></a>
      </span>
    </footer>
  </div>
);

export default App