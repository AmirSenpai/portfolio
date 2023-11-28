import React from 'react';
import Intro from './components/intro';
import Timeline from './components/timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (
      <div className="App">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
  )
} 

export default App
