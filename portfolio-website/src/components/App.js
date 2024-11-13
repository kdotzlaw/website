import { useState } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
/*
<div className="App">
      
      <Nav />
      <Home />
    </div><div className="App">
      
      <Nav />
      <Home />
    </div>
*/


function App() {
  const [focus, setFocus] = useState(true);
  //swap between components by swapping focus
  function toggleFocus(){
    setFocus(!focus);
  }

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );

  
    
}

export default App;
