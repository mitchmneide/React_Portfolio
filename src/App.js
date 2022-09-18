import React, {useState} from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
function App() {
  const [categories] = useState([
    {name: "About Me"}
  ])
  const [currentCategory,setCurrentCategory] = useState(categories[0]);
  return (
    <div> 
    <Header> 
    <Nav
    categories={categories}
    setCurrentCategory= {setCurrentCategory}
    currentCategory = {currentCategory}>
    </Nav>
    </Header>
    </div>
  );
}

export default App;
