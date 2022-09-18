import React, {useState} from 'react';

import Header from './components/Header'
import About from './components/About';
import Route from './components/Route';
function App() {
  

  
  return (
    <div> 
      
    <Header/> 
    
      <Route path ="/about">
        <About />
      </Route>
    
   
    <div>
      
    
    </div>
    </div>
  );
}

export default App;
