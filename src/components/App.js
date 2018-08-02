import React from 'react'
import './App.css'
import MainContainer from '../containers/MainContainer'

const App = () => (
  <div className="App">
    <header>
      <h1>NextBus Compare</h1>
      <p>At a transit station but no idea what street you are on? No problem! Check when the next transit come by the station code right in front of you!</p>
    </header>
    <main>
      <p>NextBus Compare let's you compare up to 3 station stops and list all available transit vechicle that will stop at the listed station.</p>
      <MainContainer />
    </main>
    <footer>
      <small>Copyright &copy; {new Date().getFullYear()} <a title="My portfolio" href="https://craftplustech.com">Amy Yuen Ying Chan</a></small>
    </footer>
  </div>
);

export default App