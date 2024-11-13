import { useState } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Publications from './Publications';
import Contact from './Contact';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Home');
  //switch statement to render the correct component
  function renderComponent() {
    switch (currentComponent) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Publications':
        return <Publications />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }
  const switchComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <div className="App">
      <Nav switchComponent={switchComponent} />
      {renderComponent()}
     
    </div>
  );
}

export default App;
