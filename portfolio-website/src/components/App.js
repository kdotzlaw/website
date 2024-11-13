import { useState } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Home');

  const switchComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <div className="App">
      <Nav switchComponent={switchComponent} />
      {currentComponent === 'Home' ? <Home /> : <Projects />}
    </div>
  );
}

export default App;
