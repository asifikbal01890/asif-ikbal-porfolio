import './App.css';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import Projects from './Component/Project/Projects';
import Footer from './Component/Footer/Footer';
import { Element } from 'react-scroll';
import Skills from './Component/Home/Skills/Skills';
import { Toaster } from 'react-hot-toast';


function App() {

  
  return (
    <div className="App">
      <NavBar></NavBar>

      <Element name="home">
      <Home></Home>
      </Element>

      <Element name="skill">
      <Skills></Skills>
      </Element>

      <Element name="project">
      <Projects></Projects>
      </Element>

      <Element name="contact">
      <Contact></Contact>
      </Element>

      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
