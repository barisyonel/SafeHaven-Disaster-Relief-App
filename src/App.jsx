  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './pages/Home';
  import Disasters from './pages/Disasters';
  import Tips from './pages/Tips';
  import Community from './pages/Community';
  import Contact from './pages/Contact';
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import WeatherApp from './components/WeatherApp'; 
  import ShelterFinder from './pages/ShelterFinder';
  import "./index.css";
  
  function App() {
    return (
      <Router>
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <WeatherApp /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disasters" element={<Disasters />} />
          <Route path="/shelters" element={<ShelterFinder />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>

    );
  }

  export default App;
