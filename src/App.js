import About from './Pages/About';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import CoursesPage from './Pages/CoursesPage';
import ContactPage from './Pages/ContactPage';
import Gallery from './Pages/Gallery';
import Teachers from './Pages/Teachers';
import './inc/css/bootstrap-grid.css'
import Career from './Pages/Career';
import SingleCareer from './Pages/SingleCareer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="notice" element={<SingleCareer />} />
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
