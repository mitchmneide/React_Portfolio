import React from 'react';
import Header from './components/Header'
import About from './components/About';
import Route from './components/Route';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import Resume from './components/Resume';
function App() {
  

  
  return (
    <div> 
      <div>
    <Header/> 
   </div>
   <main>
   <Route path ="/about">
        <About  />
      </Route>
    <Route path ="/contact">
      <ContactForm />
    </Route>
    <Route path ="/portfolio">
      <Project />
    </Route>
    <Route path ="/resume">
        <Resume />
      </Route>
    <Footer />
    </main>
    </div>
  );
}

export default App;
