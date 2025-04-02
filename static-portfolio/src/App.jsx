import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import data from './data.js';
import { useEffect, useState } from 'react';


function App() {

  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects projects={projects}/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
