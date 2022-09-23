import React from 'react';
import './App.css';
import Main from './Main';
import Navbar from './Navbar';
// import Accordian from './Accordian';

function App() {
  return(
  <>

  <Navbar />
  <div className="container">
  <Main />
  {/* <Accordian /> */}
  </div>
  </>
  )
}

export default App;
