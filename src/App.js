import './App.css';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import Projects from './Component/Project/Projects';
import Footer from './Component/Footer/Footer';
import { Element } from 'react-scroll';
import Blog from './Component/Blog/Blog';


function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>

      <Element name="home">
      <Home></Home>
      </Element>

      <Element name="project">
      <Projects></Projects>
      </Element>

      <Element name="blog">
      <Blog></Blog>
      </Element>

      <Element name="contact">
      <Contact></Contact>
      </Element>

      <Footer></Footer>
    </div>
  );
}

export default App;
