/*
@copyright 2024 by AKS
@license <Apache-2.0 
*/

/*
Node Modules
*/
import {ReactLenis} from 'lenis/react';


/*
Components
*/
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
      <ReactLenis root>
        <Header/>
          <main>
            <Hero/>
            <About/>
            <Skill/>
            <Work/>
            <Contact/>
          </main>
        <Footer/>
      </ReactLenis>
    )
}

export default App;