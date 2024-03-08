import './App.css';
import Benefits from './components/Benefits/Benefits';
import Collection from './components/Collection/Collection';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Mail from './components/Mail/Mail';
import Nav from './components/Nav/Nav';
import Range from './components/Range/Range';
import Space from './components/Space/Space';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="">
       <Nav/>
       <Intro/>
       <Benefits/>
       <Collection/>
       <Space/>
       <Range/>
       <Works/>
       <Mail/>
       <Footer/>
    </div>
  );
}

export default App;
