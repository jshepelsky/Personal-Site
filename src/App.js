import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import ContactMe from './components/contactme/contactme';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}
export default App;