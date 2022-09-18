import React, {useState} from 'react';

import Header from './components/Header'
import About from './components/About';
import Route from './components/Route';
import ContactForm from './components/Contact';
function App() {
  

  
  return (
    <div> 
      
    <Header/> 
    
      <Route path ="/about">
        <About />
      </Route>
    <Route path ="/contact">
      <ContactForm />
    </Route>
   
    <div>
      
    
    </div>
    </div>
  );
}

export default App;
