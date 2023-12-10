import Home from './components/Home/Home.component';
import Navigation from './components/Navigation/Navigation.component';
import About from './components/About/About.component';
import Project from './components/Project/Project.component';
import Contact from './components/Contact/Contact.component';

import './App.css';
import Footer from './components/Footer/Footer.component';


function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
