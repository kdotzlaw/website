import { useState } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';

import Contact from './Contact';


import Blog from './Blog';
/*
case 'Edu':
        return <Edu />;
      case 'Publications':
        return <Publications />;
*/
/*function renderComponent() {
    switch (currentComponent) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      
      case 'Blog':
        return <Blog />;
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
*/
function App() {
  //const [currentComponent, setCurrentComponent] = useState('Home');
  //switch statement to render the correct component
  return(
    <div className="App">
      <Nav />
      <section id='home'>
        <Home />
      </section>
     
    </div>
  );
}
export default App;
