import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message= "Hola welcome props" name = "Gomez"/>
        <Router>
        <div> 
          <ul>
          <li>
           <Link to="/">Home</Link> 
          </li>  
          <li>
          <Link to="/contact">Contacto</Link> 
          </li> 
          <li>
          <Link to="/about-me">Sobre Mi</Link> 
          </li>
          <li>
          <Link to="/profile">Perfil</Link> 
          </li>
          </ul>
        </div>
          <Routes>
            <Route path="/contact" element = {<Contact/>}/> 
            <Route path="/about-me" element = {<AboutMe/>}/> 
            <Route path="/profile/:name" element = {<Profile/>}/> 
          </Routes> 
        </Router>
      </header>
    </div>
  );
}

export default App;
